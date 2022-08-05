import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";

import { Helmet } from "react-helmet";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import { GatsbyImage } from "gatsby-plugin-image";
import { useLanguage, withLanguage } from "../contexts/LanguageContext";

export const query = graphql`
  query ($slug: String!, $postLang: String!) {
    post: allContentfulPost(
      filter: { slug: { eq: $slug }, node_locale: { eq: $postLang } }
    ) {
      edges {
        node {
          id
          author
          title
          slug
          description
          createDate(formatString: "YYYY/MM/DD")
          body {
            raw
            references {
              contentful_id
              gatsbyImageData(width: 900)
            }
          }

          image {
            gatsbyImageData(width: 900)
          }
        }
      }
    }

    posts: allContentfulPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: createDate, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          description
          createDate(formatString: "YYYY/MM/DD")
          author
        }
      }
    }
  }
`;

const BlogComponent = ({ data }: any) => {
  const language = useLanguage();

  const languageMap: Record<string, string> = {
    sv: "sv",
    en: "en-US",
  };

  // const otherPosts = data.posts.edges
  //   .map((v: any) => v.node)
  //   .filter((v: any) => v.slug !== file.slug);

  const post = data.post.edges[0].node;

  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="mb-6 text-md">{children}</p>;
      },

      [BLOCKS.HEADING_1]: (node, children) => {
        return (
          <h1 className="font-bold mb-6 text-4xl text-gray-800">{children}</h1>
        );
      },

      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h2 className="font-bold mb-6 text-3xl text-gray-900">{children}</h2>
        );
      },

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node.data.target.sys.id;
        const ref = post.body.references.find(
          (ref: any) => ref.contentful_id === assetId
        );

        // const image = post.references.find(v=>v.contentful_id === node.data)
        // return   <GatsbyImage alt="" image={post.image.gatsbyImageData} />
        return (
          <GatsbyImage className="mb-6" alt="" image={ref.gatsbyImageData} />
        );

        try {
          const alt = node.data.target.fields.title[languageMap[language]];
          const url = node.data.target.fields.file[languageMap[language]].url;
          return (
            <div style={{ width: "100%", display: "flex" }}>
              <img
                style={{ margin: "auto", maxHeight: "800px" }}
                alt={alt}
                src={url}
              />
            </div>
          );
        } catch (err) {
          return <></>;
        }
      },

      "asset-hyperlink": (node, children) => {
        try {
          const url = node.data.target.fields.file["en-US"].url;
          return (
            <a
              target="_blank"
              type="application/octet-stream"
              download="enunity-pamphlet"
              href={"https:" + url}
            >
              {children}
            </a>
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

  const BottomScoller = ({ posts }: { posts: any }) => {
    return (
      <div
        style={{
          width: "100%",
          float: "left",
          overflowX: "scroll",
        }}
      >
        <div
          style={{
            display: "flex",
            float: "left",
          }}
        >
          <p>{JSON.stringify(data)}</p>
          {/* {posts.map((post) => {
            return (
              <div>
                <Link to={`/blog/${post.slug}`}>
                  <Card
                    // style={{
                    //   float: "left",
                    //   margin: "1vh",
                    //   width: "50vh",
                    //   height: "90%",
                    // }}

                    className="h-full w-80 border  rounded-xl ml-2"
                    // hoverable
                  >
                    <Title level="h3">{post.title}</Title>
                    <p>
                      {post.author}
                      <br></br>
                      <span className="text-gray-500">
                        {post.publishedDate}
                      </span>
                    </p>
                  </Card>
                </Link>
              </div>
            );
          })} */}
        </div>
      </div>
    );
  };

  return (
    <>
      <Topbar></Topbar>
      <div className="mt-24">
        <Content>
          <div className="flex">
            <div className="max-w-screen-md m-auto">
              <div>
                <div className="flex gap-4 text-sm">
                  <p className="">{post.author}</p>
                  <p>I</p>
                  <p className="">{post.createDate}</p>
                </div>
                <h1 className="text-6xl font-bold">{post.title}</h1>
                <h2 className="mt-3 mb-3 text-2xl font-normal text-gray-400">
                  {post.description}
                </h2>
              </div>
              <div className="mb-10 flex w-full bg-red-300">
                {post.image && (
                  <GatsbyImage alt="" image={post.image.gatsbyImageData} />
                )}
              </div>
              {/* <pre>{JSON.stringify(JSON.parse(post.body.raw), null, 4)}</pre> */}
              {documentToReactComponents(JSON.parse(post.body.raw), options)}
            </div>
          </div>
        </Content>
      </div>
      {/* <BottomScoller posts={otherPosts}></BottomScoller> */}
    </>
  );
};

export default withLanguage(BlogComponent);
