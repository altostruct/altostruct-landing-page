import Content from "@components/Content";
import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Formshort from "@components/Form-short";
import SEO from "@components/SEO";
import Topbar from "@components/Topbar/Topbar";
import { GetStaticPaths } from "next";
import { RichText } from "pages/blog/[id]";
import { getCampanignFromSlug, getCampanigns, getPostFromSlug, getReferenceCases } from "utils/contentful";
import formatDate from "utils/formatDate";

function CampaignsPage(props: any) {


    const title: string = props.post.fields.title;
    const slug = props.post.fields.slug;

    return (
        <div className="bg-[#161616] h-screen">
            <SEO
                title={props.post.fields.title}
                description={props.post.fields.description}
            />
            <Topbar></Topbar>
            <Content>
                <div className="flex gap-16 pb-12">
                    <div className="flex-1 pt-32 text-[#eee]">
                        <h1 className="text-4xl mb-2 md:text-6xl font-bold">
                            {title.endsWith(".") ? <>{title.slice(0, -1)}<span className="text-green-500">.</span></> : title}
                        </h1>
                        <RichText body={props.post.fields.description}></RichText>
                    </div>
                    <div className="sticky top-32 flex-0">
                        <div className="flex w-full md:gap-4 gap-8 flex-col md:flex-col  mt-32 justify-between">
                            <div className="md:w-[25vw]">
                                <p className="text-4xl mb-4 md:text-3xl font-bold">Kontakta oss</p>
                                <p className="text-xl">Låt oss diskutera hur vi kan hjälpa dig med din molnresa. Vi brukar svara inom dagen.</p>
                            </div>
                            <div className="md:w-[25vw] max-w-full">
                                <Formshort extraMessage={"CAMPAIGN::" + slug} rows></Formshort>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer></Footer>
        </div >
    );
}

export async function getStaticProps(context: any) {
    return {
        // Passed to the page component as props
        props: {
            post: getCampanignFromSlug(context.params.id, context.locale) ?? null
        }
    };
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
    const posts = getCampanigns().filter(
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

export default CampaignsPage;