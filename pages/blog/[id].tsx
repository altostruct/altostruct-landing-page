import { GetStaticPaths } from "next";
import * as fs from "fs";
import {
  ContentfulPost,
  getContentfulPosts,
  getPostFromSlug,
} from "utils/contentful";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import Content from "@components/Content";
import Image from "next/image";
import formatDate from "utils/formatDate";
import Topbar from "@components/Topbar/Topbar";
import Footer from "@components/Footer/Footer";
import { ContentfulCodeWidget, ContentfulImage } from "@components/Contentful";
import NoSSR from "@components/NoSSR";
import SEO from "@components/SEO";

interface BlogPageProps {
  post: ContentfulPost;
}

function BlogPage(props: BlogPageProps) {
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="mb-8 text-lg leading-8	">{children}</p>;
      },

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node);
        return (
          <ContentfulImage alt="" className="my-16" image={node.data.target} />
        );

        return <p>asd</p>;
        // if (node.data.__typename == "") {
        //   const assetId = node.data.target.sys.id;
        //   // const ref = post.body.references.find(
        //   //   (ref: any) => ref.contentful_id === assetId
        //   // );

        //   return (
        //     <GatsbyImage className="mb-6" alt="" image={ref.gatsbyImageData} />
        //   );
        // }

        // try {
        //   const alt = node.data.target.fields.title[languageMap[language]];
        //   const url = node.data.target.fields.file[languageMap[language]].url;
        //   return (
        //     <div style={{ width: "100%", display: "flex" }}>
        //       <img
        //         style={{ margin: "auto", maxHeight: "800px" }}
        //         alt={alt}
        //         src={url}
        //       />
        //     </div>
        //   );
        // } catch (err) {
        //   return <></>;
        // }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        return (
          <NoSSR>
            <ContentfulCodeWidget id={node.data.target.sys.id} />
          </NoSSR>
        );
        // if (node.data.__typename == "") {
        //   const assetId = node.data.target.sys.id;
        //   // const ref = post.body.references.find(
        //   //   (ref: any) => ref.contentful_id === assetId
        //   // );

        //   return (
        //     <GatsbyImage className="mb-6" alt="" image={ref.gatsbyImageData} />
        //   );
        // }

        // try {
        //   const alt = node.data.target.fields.title[languageMap[language]];
        //   const url = node.data.target.fields.file[languageMap[language]].url;
        //   return (
        //     <div style={{ width: "100%", display: "flex" }}>
        //       <img
        //         style={{ margin: "auto", maxHeight: "800px" }}
        //         alt={alt}
        //         src={url}
        //       />
        //     </div>
        //   );
        // } catch (err) {
        //   return <></>;
        // }
      },

      [BLOCKS.HEADING_1]: (node, children) => {
        return (
          <h1 className="font-bold mb-2 mt-8 text-4xl text-gray-900">
            {children}
          </h1>
        );
      },

      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h2 className="font-bold mb-2 text-2xl mt-8 text-gray-800">
            {children}
          </h2>
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <h3 className="font-bold text-xl mb-2 mt-4 text-gray-800">
            {children}
          </h3>
        );
      },

      "asset-hyperlink": (node, children) => {
        try {
          const url = node.data.target.fields.file["en-US"].url;
          return (
            <Link
              target="_blank"
              type="application/octet-stream"
              download="enunity-pamphlet"
              href={"https:" + url}
            >
              {children}
            </Link>
          );
        } catch (err) {
          return <></>;
        }
      },
    },

    renderMark: {
      [MARKS.BOLD]: (text) => {
        return <b>{text}</b>;
      },
    },
  };

  if (!props?.post?.fields) {
    return <></>;
  }

  return (
    <>
      <SEO
        title={props.post.fields.title}
        description={props.post.fields.description}
      />
      <Topbar></Topbar>

      <Content>
        <div className="md:w-3/5 m-auto mt-32">
          <div className="flex gap-4 text-sm">
            <p className="">{props.post.fields.author}</p>
            <p>I</p>
            <p className="">
              {props.post.fields.createDate &&
                formatDate(props.post.fields.createDate)}
            </p>
          </div>
          <h1 className="text-6xl font-bold">{props.post.fields.title}</h1>
          <h2 className="mt-3 mb-3 text-xl font-normal text-gray-700">
            {props.post.fields.description}
          </h2>
          <div className="mb-10 flex w-full ">
            {props.post.fields.image && (
              <ContentfulImage
                alt=""
                image={props.post.fields.image}
                className="w-full"
                style={{
                  objectFit: "cover",
                }}
              />
            )}
          </div>
          {documentToReactComponents(props.post.fields.body, options)}
        </div>
      </Content>
      <Footer></Footer>
    </>
  );
}

export async function getStaticProps(context: any) {
  return {
    // Passed to the page component as props
    props: { post: getPostFromSlug(context.params.id, context.locale) },
  };
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const posts = getContentfulPosts().filter(
    (post) =>
      post.fields.isPublished ||
      process.env.NEXT_PUBLIC_CONTENTFUL_DEV === "TRUE"
  );

  return {
    paths: posts.map((post) => {
      return { locale: post.sys.locale, params: { id: post.fields.slug } };
    }),

    fallback: false, // can also be true or 'blocking'
  };
};

export default BlogPage;
