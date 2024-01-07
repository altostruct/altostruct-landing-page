import { GetStaticPaths } from "next";
import {
    getReferenceCases,
} from "utils/contentful";
import {
    Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import Topbar from "@components/Topbar/Topbar";
import { ContentfulImage } from "@components/Contentful";
import SEO from "@components/SEO";
import { RichText } from "pages/blog/[id]";
import { Content } from "pages";



interface BlogPageProps {
    post: any;
}

function BlogPage(props: BlogPageProps) {

    if (!props?.post?.fields) {
        return <></>;
    }

    return (
        <div >
            <SEO
                title={props.post.fields.title}
                description={props.post.fields.description}
            />
            <Topbar></Topbar>

            <Content>
                <div className="md:w-3/5 m-auto pt-32 pb-32">
                    <div className="md:w-3/5 flex gap-4 text-sm">
                        <p className="">{props.post.fields.customer.fields.name}</p>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold md:mb-20">{props.post.fields.title}</h1>

                    {props.post.fields.bulletPoints && props.post.fields.bulletPoints.length > 0 && (
                        <div className="md:flex ml-2 ">
                            {props.post.fields.bulletPoints.map((v: any, index: number) => (
                                <div key={index} className="flex-1 border-l-4 border-gray-200 items-center">
                                    <div className="w-full p-2 text-xl mt-2 font-bold">{v.fields.title}</div>
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
                    <div>
                        <RichText body={props.post.fields.about}></RichText>
                        <h2 className="text-3xl mb-2 mt-8">Problem description</h2>
                        <RichText body={props.post.fields.problemDescription}></RichText>
                        <h2 className="text-3xl mb-2 mt-8">Solution</h2>
                        <RichText body={props.post.fields.solutionDescription}></RichText>
                        <h2 className="text-3xl mb-2 mt-8">Conclusion</h2>
                        <RichText body={props.post.fields.conclusion}></RichText>
                    </div>
                </div>
            </Content>

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