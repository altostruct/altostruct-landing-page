import WordCircled from "components/Word-Circled/Word";

import Content from "@components/Content";
import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import useTranslation from "hooks/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { ContentfulPost, getContentfulPosts, ContentfulAuthor } from "utils/contentful";
import formatDate from "utils/formatDate";
import SEO from "@components/SEO";
import { ContentfulImage } from "@components/Contentful";
import { unique } from "next/dist/build/utils";
import { useState } from "react";
import classNames from "classnames";

function Blog(props: { posts: ContentfulPost[] }) {
  const { locale } = useRouter();
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string[]>()
  const posts = getContentfulPosts()
    .filter(
      (post) =>
        post.fields.isPublished ||
        process.env.NEXT_PUBLIC_CONTENTFUL_DEV === "TRUE"
    ).sort((a, b) => {
      if (a.sys.locale === "sv") return -1
      if (a.sys.locale === "en-US") return 1
      return 0
    }).filter((post, index, arr) => {
      // make unique by the slug
      return arr.map((post) => post.fields.slug).indexOf(post.fields.slug) == index
    })
    .sort(
      (a, b) =>
        new Date(b.fields.createDate).getTime() -
        new Date(a.fields.createDate).getTime()
    );

  const tags = posts.map(post => post.fields.tags).flat().filter((item, index, arr) => {
    return arr.indexOf(item) === index
  }).filter(Boolean)




  const getReadTime = (data: string) => {
    return Math.ceil(data.split(" ").length / 100);
  };

  function Post(props: any) {
    if (!props.fields.title) return null;

    const getAuthorsNames = (authors: ContentfulAuthor[]) => {
      return authors.map((author, index, arr) => {
        if (index === 0) {
          return `${author.fields.firstName} ${author.fields.lastName}`
        }
        if (index === arr.length - 1) {
          return ` & ${author.fields.firstName} ${author.fields.lastName}`
        }
        return `, ${author.fields.firstName} ${author.fields.lastName}`
      })
    }

    return (
      <Link href={"blog/" + props.fields.slug}>
        <div className="flex items-center gap-8 md:gap-12 text-gray-200 py-5 p-4 md:p-8">
          <div className="h-fit flex-1">
            {!props.fields.authors && <p className="font-light">{props.fields.author}</p>}
            {props.fields.authors && <div className="flex text-xs items-center gap-3 mb-3">
              <div className="flex flex-row gap-2">
                {props.fields.authors.map((author: ContentfulAuthor, index: number) => {
                  if (!author.fields.profile) return;
                  return <div key={index} className="h-6 w-6 rounded-full -translate-x-4 first:translate-x-0 overflow-hidden">
                    <ContentfulImage alt="" image={author.fields.profile}></ContentfulImage>
                  </div>
                })}
              </div>
              <p className="font-extralight text-xs md:text-sm text-gray-200">

                {getAuthorsNames(props.fields.authors)} · {formatDate(props.fields.createDate ?? new Date())}
              </p>
            </div>
            }

            <h1 className="text-lg font-sans md:text-3xl font-medium">
              {props.fields.title}
            </h1>
            <p className="mt-2 w-3/5 hidden sm:block text-gray-200">
              {props.fields.description}
            </p>
            <div className="mt-4 text-white text-xs md:text-sm flex gap-4">
              <p className="font-extralight text-gray-400">
                Lästid  {
                  getReadTime(JSON.stringify(props))
                } minuter
              </p>
            </div>
          </div>
          <div className="m-auto w-1/5 md:w-56 justify-items-end">
            {props.fields.image && (
              <ContentfulImage
                alt=""
                image={props.fields.image}
                height={400}
                width={400}
                className="h-32 w-32 md:w-36 md:h-36"
                style={{
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        </div>


      </Link>
    );
  }

  // const words = posts
  //   .map((post) =>
  //     JSON.stringify(post.fields.body ?? {})
  //       .replace(/"/g, "")
  //       .replace(/,/g, "")
  //       .replace(/{/g, "")
  //       .replace(/}/g, "")
  //       .replace(/:/g, "")
  //       .replace(/\)/g, "")
  //       .replace(/\(/g, "")
  //       .replace(/\[/g, "")
  //       .replace(/\]/g, "")
  //       .replace(/=/g, "")
  //       .split(" ")
  //   )
  //   .flat()
  //   .filter((word) => word !== "")
  //   .filter((word) => !/[^A-Za-z]+/.test(word));

  // const getWordCount = (word: string) => {
  //   return words.filter((w) => w === word).length;
  // };

  // const orderedWords = Array.from(new Set(words)).sort((wordA, wordB) => {
  //   return getWordCount(wordB) - getWordCount(wordA);
  // });

  // const amountOfWords = 80;

  // const data = orderedWords.slice(0, amountOfWords).map((value) => {
  //   return {
  //     value,
  //     count: getWordCount(value),
  //     color: "black",
  //   };
  // });

  return (
    <div className="bg-[#161616]">
      <SEO
        title={t("Altostruct - Kunskapsbas")}
        description={t(
          "Våran kunskapsbas. Här finns information om AWS, webben och mycket mer"
        )}
      ></SEO>
      <Topbar fixed={false} transparent></Topbar>
      <Content className="mt-20">

        <h1>
          <span className="pixelated">{"<3 dev"}</span>
        </h1>
      </Content>
      <Content className="py-2 ">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => {
            return <div key={index} onClick={() => {
              if (filter?.includes(tag)) {
                setFilter(filter.filter((t) => t !== tag))
              } else {
                setFilter([...(filter ?? []), tag])
              }
            }}>
              <div className={classNames()}>
                <WordCircled className="cursor-pointer" borderCircle filled={filter?.includes(tag)}>
                  <h2 className={classNames("text-lg p-1")}> {tag}</h2>
                </WordCircled>
              </div>
            </div>
          })}
        </div>
      </Content >

      <Content className="py-2 mb-24 ">
        <div className="mt-8 flex-col divide-y divide-[#363535]  bg-[#1f1f1f] rounded-xl flex">
          {posts.filter((post) => {
            if (!filter?.length) return true;
            if (!post.fields.tags) return false;
            return post.fields.tags.findIndex(tag => filter.includes(tag)) !== -1
          }).map((post) => {

            return <>
              <Post key={post.fields.slug} {...post} />
            </>
          })}
        </div>
      </Content>
      <Footer></Footer>
    </div >
  );
}

export default Blog;
