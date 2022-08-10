import React from "react";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import useTranslation from "../../hooks/useTranslation";
import { useLanguage, withLanguage } from "../../contexts/LanguageContext";

const usePosts = () => {
  const language = useLanguage();

  const data = useStaticQuery(graphql`
    query {
      en: allContentfulPost(
        filter: { node_locale: { eq: "en-US" }, isPublished: { eq: true } }
        sort: { fields: createDate, order: DESC }
      ) {
        edges {
          node {
            slug
            createDate(formatString: "YY/MM/DD")
            author
            title
            description
            body {
              raw
            }
            image {
              gatsbyImageData(height: 400, aspectRatio: 1.3)
            }
          }
        }
      }

      swe: allContentfulPost(
        filter: { node_locale: { eq: "sv" }, isPublished: { eq: true } }
        sort: { fields: createDate, order: DESC }
      ) {
        edges {
          node {
            slug
            createDate(formatString: "YY/MM/DD")
            author
            title
            description
            body {
              raw
            }
            image {
              gatsbyImageData(height: 400, aspectRatio: 0.8)
            }
          }
        }
      }
    }
  `);

  return data[language].edges;
};
function Blog() {
  const { t } = useTranslation();
  const languageMap = {};
  const edges = usePosts();

  const getReadTime = (data: string) => {
    return Math.ceil(data.split(" ").length / 100);
  };

  function Post(props: any) {
    if (!props.title) return null;

    return (
      <a className="p-2" href={"/blog/" + props.slug}>
        <div className="flex items-center gap-2 md:gap-12">
          <div className="h-fit flex-1">
            <p className="font-medium">{props.author}</p>
            <h1 className="text-lg md:text-3xl font-medium">{props.title}</h1>
            <p className="mt-2 text-gray-500 hidden md:block">
              {props.description}
            </p>
            <div className="mt-4 text-gray-500 text-xs md:text-sm flex gap-4">
              <p>{props.createDate}</p>
              {props.body && (
                <p>
                  {t("Lästid {{time}} minut", {
                    time: getReadTime(props.body.raw),
                  })}
                </p>
              )}
            </div>
          </div>
          <div className="max-h-96 w-1/4 md:w-56">
            {props.image && (
              <GatsbyImage alt="" image={props.image.gatsbyImageData} />
            )}
          </div>
        </div>
      </a>
    );
  }

  const posts = edges.map((node: any) => node.node);

  return (
    <div>
      <Topbar></Topbar>

      <div className="mt-24 flex  gap-10">
        <Content>
          <div className="m-auto ">
            {posts.map((post: any) => {
              return <Post {...post} />;
            })}
          </div>
          <p>{posts.length === 0 && t("Inga inlägg...")}</p>
        </Content>
      </div>
    </div>
  );
}
export default withLanguage(Blog);
