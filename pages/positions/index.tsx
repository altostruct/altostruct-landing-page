import Topbar from "@components/Topbar/Topbar"
import positions from "../../.data/contentful/positions/all.json"
import { Content } from "pages"
import Footer from "@components/Footer"
import Form from "@components/Email"
import Link from "next/link"

function PositionsPage(){
    return <>
        <Topbar></Topbar>
        <Content className="mt-32">
            <h1 className="text-7xl underline bold">Lediga tjänster</h1>
            <div className="flex gap-2 py-8">
                {positions.filter(v=>v.sys.locale === "sv").map(v=>{
                    return <Link key={v.fields.slug} href={"/positions/" + v.fields.slug}> 
                    <article className="p-2 w-1/2 cursor-pointer border-black border-2 border-dashed">
                        <h2 className="text-3xl">{v.fields.position}</h2>
                        <p className="line-clamp-4">{v.fields.longDescription}</p>
                    </article>
                    </Link>
                }
                )}
            </div>    
        </Content>

        <Content className="mt-16">
            <Form title={<p className="text-5xl bold">Annars tar vi alltid <br></br> emot spontan ansökan.</p>}></Form>            
        </Content>

        <Footer></Footer>
    </>
}

export default PositionsPage