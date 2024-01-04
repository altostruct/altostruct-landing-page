import { GetStaticPaths } from "next";
import { ContentfulPost, getContentfulPosts, getPostFromSlug } from "utils/contentful";
import SEO from "@components/SEO";

interface BlogPageProps {
    post: ContentfulPost;
}

function BlogPage(props: BlogPageProps) {
    if (!props?.post?.fields) {
        return <></>;
    }

    const title: string = props.post.fields.title;

    return <>
        <SEO
            title={props.post.fields.title}
            description={props.post.fields.description}
        />
        <p>{title}</p>
    </>
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



export default BlogPage