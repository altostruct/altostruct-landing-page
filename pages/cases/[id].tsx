import { GetStaticPaths } from "next";
import {
  ContentfulPost,
  getContentfulPosts,
  getPostFromSlug,
  getReferenceCases,
} from "utils/contentful";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import Content from "@components/Content";
import formatDate from "utils/formatDate";
import Topbar from "@components/Topbar/Topbar";
import Footer from "@components/Footer/Footer";
import { ContentfulImage } from "@components/Contentful";
import NoSSR from "@components/NoSSR";
import SEO from "@components/SEO";
import { RichText } from "pages/blog/[id]";

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mb-8 leading-8">{children}</p>;
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => {
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

    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h1 className="font-bold mb-2 mt-8 text-4xl text-white">
          {children}
        </h1>
      );
    },

    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2 className="font-bold mb-2 text-2xl mt-8 text-white">
          {children}
        </h2>
      );
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <h3 className="font-bold text-xl mb-2 mt-4 text-white">{children}</h3>
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



interface BlogPageProps {
  post: any;
}

function BlogPage(props: BlogPageProps) {

  if (!props?.post?.fields) {
    return <></>;
  }

  return (
    <div className="bg-[#161616]">
      <SEO
        title={props.post.fields.title}
        description={props.post.fields.description}
      />
      <Topbar></Topbar>

      <Content>
        <div className="md:w-3/5 m-auto pt-32 text-[#eee]">
          <div className="flex gap-4 text-sm">
            <p className="">{props.post.fields.customer.fields.name}</p>
          </div>
          <h1 className="text-6xl font-bold">{props.post.fields.title}</h1>
          <h2 className="mt-3 mb-3 text-xl font-normal">
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
          <div className="text-lg">
            <RichText body={props.post.fields.about}></RichText>
            <h2 className="text-3xl mb-3">Problem description</h2>
            <RichText body={props.post.fields.problemDescription}></RichText>
            <h2 className="text-3xl mb-3">Solution</h2>
            <RichText body={props.post.fields.solutionDescription}></RichText>
            <h2 className="text-3xl mb-3">Conclusion</h2>
            <RichText body={props.post.fields.conclusion}></RichText>
          </div>
        </div>
      </Content>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps(context: any) {
  return {
    // Passed to the page component as props
    props: {
      post: getReferenceCases().find(item => item.fields.slug == context.params.id) ?? null
    }
  }
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const posts = getReferenceCases().filter(
    (post) =>
      post.fields.isPublished ||
      process.env.NEXT_PUBLIC_CONTENTFUL_DEV === "TRUE"
  );

  console.log(posts.map(post => post.fields.title + " " + post.fields.isPublished))

  return {
    paths: posts.filter(post => post.sys.locale === "sv").map((post) => {
      return { params: { id: post.fields.slug } };
    }),

    fallback: false, // can also be true or 'blocking'
  };
};

export default BlogPage;
