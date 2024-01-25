import { GetStaticPaths } from "next";
import {
    ContentfulPost,
    getContentfulPosts,
    getPostFromSlug,
} from "utils/contentful";
import {
    documentToReactComponents,
    Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import formatDate from "utils/formatDate";
import Topbar from "@components/Topbar/Topbar";
import { ContentfulImage } from "@components/Contentful";

import SEO from "@components/SEO";
import { Content } from "pages";
import Footer from "@components/Footer";

export const options: Options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
            return <p className="inline pb-2">{children}</p>;
        },

        [BLOCKS.HR]: (node, children) => {
            return <hr className="mt-4 mb-4"></hr>
        },

        [INLINES.HYPERLINK]: (node, children) => {
            return <a href={node.data.uri} className="underline">
                {children}
            </a>
        },



        "entry-hyperlink": () => {
            return <p>asd</p>
        },


        [BLOCKS.LIST_ITEM]: (node, children) => {
            return <li className="">{children}</li>;
        },

        [BLOCKS.UL_LIST]: (node, children) => {
            return <ul className="list-disc list-inside flex flex-col gap-2 pb-2">{children}</ul>;
        },

        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return (
                <ContentfulImage alt="" image={node.data.target} />
            );
        },

        [BLOCKS.HEADING_1]: (node, children) => {
            return (
                <h1 className="font-bold text-4xl mt-4 mb-2">
                    {children}
                </h1>
            );
        },

        [BLOCKS.HEADING_2]: (node, children) => {
            return (
                <h2 className="font-bold text-3xl mt-4 mb-2">
                    {children}
                </h2>
            );
        },
        [BLOCKS.HEADING_3]: (node, children) => {
            return (
                <h3 className="font-bold text-xl mt-4 mb-2">{children}</h3>
            );
        },

        "asset-hyperlink": (node, children) => {
            try {
                const url = node.data.target.fields.file["en-US"].url;
                return (
                    <Link
                        target="_blank"
                        type="application/octet-stream"
                        href={"https:" + url}
                        className="undeline bg-red-200"
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


export function RichText(props: { body: any }) {
    const { body } = props
    return <div className="flex flex-col">
        {documentToReactComponents(body, options)}
    </div>
}

interface BlogPageProps {
    post: ContentfulPost;
}

function BlogPage(props: BlogPageProps) {
    if (!props?.post?.fields) {
        return <></>;
    }

    const title: string = props.post.fields.title;


    return (
        <div >
            <SEO
                title={props.post.fields.title}
                description={props.post.fields.description}
            />
            <Topbar></Topbar>

            <Content>
                <div className="md:w-3/5 m-auto pt-32 ">
                    <div className="flex gap-4 text-sm">
                        <p className="">{props.post.fields.author}</p>
                        <p>I</p>
                        <p>
                            {props.post.fields.createDate &&
                                formatDate(props.post.fields.createDate)}
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold bold">
                        {title.endsWith(".") ? <>{title.slice(0, -1)}<span className="text-green-600">.</span></> : title}
                    </h1>

                    <h2 className="mt-3 mb-3 text-2xl font-light">
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
                        <RichText body={props.post.fields.body}></RichText>
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
        props: { post: getPostFromSlug(context.params.id, context.locale) ?? null },
    };
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
    const posts = getContentfulPosts().filter(
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