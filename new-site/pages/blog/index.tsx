// export async function getStaticPaths() {
//   return {
//     paths: [
//       { locale: "sv", params: {} },
//       { locale: "en-US", params: {} },
//     ],
//     fallback: false, // can also be true or 'blocking'
//   };
// }

import Content from "@components/Content";
import { TagCloud } from "react-tagcloud";

import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import useTranslation from "hooks/useTranslation";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ContentfulPost, getContentfulPosts } from "utils/contentful";
import formatDate from "utils/formatDate";

function ABC(props: { posts: ContentfulPost[] }) {
  const { locale } = useRouter();
  const { t } = useTranslation();
  const posts = getContentfulPosts()
    .filter((post) => post.sys.locale === locale)
    .filter(
      (post) =>
        post.fields.isPublished ||
        process.env.NEXT_PUBLIC_CONTENTFUL_DEV === "TRUE"
    )
    .sort(
      (a, b) =>
        new Date(b.fields.createDate).getTime() -
        new Date(a.fields.createDate).getTime()
    );

  console.log(posts);

  const getReadTime = (data: string) => {
    return Math.ceil(data.split(" ").length / 100);
  };

  function Post(props: any) {
    if (!props.fields.title) return null;

    return (
      <Link href={"blog/" + props.fields.slug}>
        <div className="flex items-center gap-2 md:gap-12">
          <div className="h-fit flex-1">
            <p className="font-light">{props.fields.author}</p>

            <h1 className="text-lg font-sans md:text-3xl font-medium">
              {props.fields.title}
            </h1>
            <p className="mt-2 text-gray-500 hidden md:block">
              {props.fields.description}
            </p>
            <div className="mt-4  text-gray-500 text-xs md:text-sm flex gap-4">
              <p>{formatDate(props.fields.createDate ?? new Date())}</p>

              <p>
                {t("Lästid {{time}} minuter", {
                  time: getReadTime(JSON.stringify(props)),
                })}
              </p>
            </div>
          </div>
          <div className="m-auto w-1/5 md:w-56">
            {props.fields.image && (
              <Image
                alt=""
                src={"/static/images/" + props.fields.image.sys.id}
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

  const words = posts
    .map((post) =>
      JSON.stringify(post.fields.body ?? {})
        .replace(/"/g, "")
        .replace(/,/g, "")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace(/:/g, "")
        .replace(/\)/g, "")
        .replace(/\(/g, "")
        .replace(/\[/g, "")
        .replace(/\]/g, "")
        .replace(/=/g, "")
        .split(" ")
    )
    .flat()
    .filter((word) => word !== "")
    .filter((word) => !/[^A-Za-z]+/.test(word));

  const getWordCount = (word: string) => {
    return words.filter((w) => w === word).length;
  };

  const orderedWords = Array.from(new Set(words)).sort((wordA, wordB) => {
    return getWordCount(wordB) - getWordCount(wordA);
  });

  const amountOfWords = 80;

  const data = orderedWords.slice(0, amountOfWords).map((value) => {
    return {
      value,
      count: getWordCount(value),
      color: "black",
    };
  });

  return (
    <div>
      <Topbar fixed={false} transparent></Topbar>
      <div className="bg-yellow-500 w-full py-36 border border-black bg-gradient-to-tr from-red-400">
        <Content>
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="">
                <b>{t("Technology is best when it brings people together.")}</b>
              </h1>
              <p>{t("")}</p>
            </div>
            <div className="hidden md:flex w-1/2 font-mono leading-tight justify-center gap-12 font-extralight">
              <div className="rounded-full w-16 h-16 bg-gray-800"></div>
              <div className="rounded-full w-16 h-16 bg-gray-800"></div>
              <div className="rounded-full w-16 h-16 bg-gray-800"></div>
            </div>
          </div>
        </Content>
      </div>
      <Content>
        <div className="mt-12 gap-12 flex-col md:w-3/4 flex">
          {posts.map((post) => {
            return <Post key={post.fields.slug} {...post} />;
          })}
        </div>
        <p>{posts.length === 0 && t("Inga inlägg...")}</p>
      </Content>
      <Footer></Footer>
    </div>
  );
}

export default ABC;
