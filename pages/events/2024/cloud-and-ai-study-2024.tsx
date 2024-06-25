import Button from "@components/Button";
import Form from "@components/Email";
import NoSSR from "@components/NoSSR";
import SEO from "@components/SEO";
import Topbar from "@components/Topbar/Topbar";
import Script from "next/script";
import { Content, Expand } from "pages";
import { useState } from "react";

function Trend(props: { trend: string }) {
    const { trend } = props
    const [hasLoaded, setHasLoaded] = useState<boolean>(false)

    return <NoSSR>
        <div className="w-full relative bg-blue-50" id="googleTrendsGraph"></div>
        <Script async={false} onLoad={() => {
            setHasLoaded(true);
        }} src="https://ssl.gstatic.com/trends_nrtr/3769_RC01/embed_loader.js" />
        {hasLoaded && <Script async={false} id="trends_scripts" type="text/javascript">
            {`                    
                    if("trends" in this){
                        const wrapper = document.getElementById('googleTrendsGraph');
                        trends.embed.renderExploreWidgetTo(wrapper, "TIMESERIES", {"comparisonItem":[{"keyword":"${trend}","geo":"","time":"2021-05-01 2024-06-24"}],"category":0,"property":""}, {"exploreQuery":"date=2021-05-01%202024-06-24&q=chatgpt&hl=sv","guestPath":"https://trends.google.com:443/trends/embed/"});
                }
            `}
        </Script>}
    </NoSSR>
}
function CloudAndAIStudy() {
    const [showPopUp, setShowPopup] = useState(false)

    return <>
        <Topbar></Topbar>
        <SEO title="AWS Specialister - molntjänster, AI och automatisering" description="Vi är ett konsultbolag specialiserat på molntjänster, AI och automatisering, med fokus på AWS.." />
        {showPopUp &&
            <>
                <div onClick={()=>setShowPopup(false)} style={{zIndex: 100}} className="z-10 w-screen h-screen absolute bg-black opacity-20">
                </div>
                <div style={{zIndex: 100}} className="left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute p-10 bg-white w-full md:w-auto">
                    <Form tag="CLOUD_AND_AI_STUDY" image={false} title="Delta i studie" description="Fyll i namn och email så återkommer vi för att hitta en tid för intervjun"></Form>
                </div>
            </>
        }
        <div className="my-48">
            <Content>
                {/* <label>alto/s - datastrategi undersökning 2024</label> */}
                <h1 className="text-5xl mb-2">Delta i våran undersökning!</h1>
                <p className="text-2xl mb-6">
                    Hur mogna är svenska bolag för att börja använda AI?
                    Delta i våran undersökning för att få våran sammanställda
                    resultat.
                </p>
                <p>Sista dag för ansökning: 2024-08-31</p>
                
                <Button onClick={() => { setShowPopup(!showPopUp) }} className="md:w-fit" label="Delta" />
                <div className="flex flex-col gap-2 mt-12">
                    <Expand label={<div><p className="bold text-xl">Varför görs denna studie?</p></div>}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/2 flex flex-col">
                                <p className="text-2xl mb-2 flex-1">
                                    Juni var den månad då ChatGTP söktes på mest någonsin.
                                    AI är här för att stanna. Dock inte utan dess utamaningar.
                                    Vi på altostruct vill mötas förstå och möta dessa utamaningar
                                    tillsammans med er. Därför under 2024 håller vi på att att
                                    kartlägga de utmaningar som bolag har när det kommer
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <Trend trend="chatgpt"></Trend>
                            </div>
                        </div>
                    </Expand>

                    <Expand label={<div><p className="bold text-xl">Vilka deltar i studien?</p></div>}>
                        <p className="text-2xl ">
                            Företag inom livsmedel och hälsa är vår primära målgrupp för denna
                            studie. Vi tror dock att många branscher delar liknande utmaningar,
                            vilket gör oss mycket intresserade av era perspektiv, oavsett vilken
                            industri ni tillhör. Tveka därför inte att höra av er!
                        </p>
                    </Expand>
                    <Expand label={<div><p className="bold text-xl">Är studien anonym?</p></div>}>
                        <p className="text-2xl ">
                            Den sammanställda rapporten öppen för alla som deltar.
                            Dock ser vi till att det inte finns någon information
                            i den vilket skulle kunna identifieras till ett särskilt
                            bolag.
                        </p>
                    </Expand>
                    <Expand label={<div><p className="bold text-xl">Hur går studien till?</p></div>}>
                        <p className="text-2xl ">
                            Studien innefattar en timmes intervju med en person från företaget, exempelvis en projektledare, teknisk chef eller motsvarande.
                            Intervjun sker digital och bestäms då
                            Frågorna kommer att skickas i förväg.
                        </p>
                    </Expand>
                </div>
            </Content>
        </div>
    </>
}

export default CloudAndAIStudy;
