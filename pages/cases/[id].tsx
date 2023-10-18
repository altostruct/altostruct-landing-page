import { GetStaticPaths } from "next";
import {
  getReferenceCases,
} from "utils/contentful";
import {
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import Content from "@components/Content";
import Topbar from "@components/Topbar/Topbar";
import Footer from "@components/Footer/Footer";
import { ContentfulImage } from "@components/Contentful";
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

  console.log(props.post.fields.bulletPoints)
  return (
    <div className="bg-[#161616]">
      <SEO
        title={props.post.fields.title}
        description={props.post.fields.description}
      />
      <Topbar></Topbar>

      <Content>
        <div className="md:w-3/5 m-auto pt-32 text-[#eee]">
          <div className="md:w-3/5 flex gap-4 text-sm">
            <p className="">{props.post.fields.customer.fields.name}</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold md:mb-20">{props.post.fields.title}</h1>

          {props.post.fields.bulletPoints && props.post.fields.bulletPoints.length > 0 && (
            <div className="md:flex ml-2 justify-around">
              {props.post.fields.bulletPoints.map((v: any, index: number) => (
                <div key={index} className="md:flex-col md:w-1/4 border-l-4 md:h-20 border-gray-200 items-center md:mb-20">
                  <div className="w-full pl-2 text-xl mt-2 font-bold">{v.fields.title}</div>
                  {/* <p className="w-full text-lg mt-6 pl-2 font-light">{v.fields.description}</p> */}
                </div>
              ))}
            </div>
          )}

          <h2 className="mb-3 text-xl font-normal">
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

  return {
    paths: posts.filter(post => post.sys.locale === "sv").map((post) => {
      return { params: { id: post.fields.slug } };
    }),

    fallback: false, // can also be true or 'blocking'
  };
};

export default BlogPage;
