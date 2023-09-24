import Content from "@components/Content";
import { ContentfulImage } from "@components/Contentful";
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
    const resposible = props.post.fields.resposible;

    return (
        <div className="bg-[#161616] h-screen">
            <SEO
                title={props.post.fields.title}
                description={props.post.fields.shortDescription}
            />
            <Topbar></Topbar>
            <Content>
                <div className="flex flex-col pt-32 md:flex-row md:gap-16 pb-12">
                    <div className="flex-1 text-[#eee]">
                        <h1 className="text-4xl mb-2 md:text-6xl font-bold">
                            {title.endsWith(".") ? <>{title.slice(0, -1)}<span className="text-green-500">.</span></> : title}
                        </h1>
                        <RichText body={props.post.fields.description}></RichText>
                    </div>

                    <div className="md:w-1/3 flex-0">
                        <div className="flex w-full md:gap-4 gap-8 flex-col justify-between">
                            <div>
                                <p className="text-4xl md:text-3xl font-bold">{props.post.fields.cta}</p>
                            </div>
                            <div className="max-w-full">
                                <Formshort extraMessage={"CAMPAIGN::" + slug} rows></Formshort>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex pb-32 justify-between items-center">
                    <div className="flex my-auto h-auto items-center flex-row gap-2">
                        {
                            resposible &&
                            <div className="w-32 h-32 rounded-full overflow-hidden">
                                <ContentfulImage alt="" image={resposible.fields.profile}></ContentfulImage>
                            </div>
                        }
                        <div className="text-lg">
                            <p className="">{resposible.fields.firstName} {resposible.fields.lastName} {resposible.fields.role} </p>
                            <p>
                                <a className="text-white underline" href={"mailto:" + resposible.fields.email}>{resposible.fields.email} </a>
                            </p>
                            <p>
                                <a href={"tel:" + resposible.fields.email} className="text-white underline">{resposible.fields.phoneNr} </a>
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-4xl"></p>
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