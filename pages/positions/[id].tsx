import Topbar from "@components/Topbar/Topbar";
import { GetStaticPaths } from "next";
import positions from "../../.data/contentful/positions/all.json"
import { Content } from "pages";
import Button from "@components/Button";
import Footer from "@components/Footer";


function PositionsPage(props: { id: string }) {
    const { id } = props
    const position = positions.find(p => p.fields.slug === id)!

    return <>
        <Topbar></Topbar>
        <Content className="mt-32 flex flex-col gap-2">
            <h1 className="text-7xl bold">{position.fields.position}</h1>
            <p className="border-2 border-black border-dashed w-fit p-2">Sista ansökningsdatum: {position.fields.applicationDeadline}</p>
            <p>{position.fields.longDescription}</p>
            <div className="w-fit">
                <Button link="mailto:erik.rehn@altostruct.se" onClick={()=>{}} label="Ansök"></Button>
            </div>
        </Content>
        <Footer></Footer>
    </>
}

export async function getStaticProps(context: any) {
    return {
        // Passed to the page component as props
        props: { id: context.params.id },
    };
}

export const getStaticPaths: GetStaticPaths<any> = async () => {

    return {
        paths: positions.filter(post => post.sys.locale === "sv").map((post) => {
            return { params: { id: post.fields.slug } };
        }),

        fallback: false, // can also be true or 'blocking'
    };
};

export default PositionsPage