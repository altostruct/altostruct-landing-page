import Button from "@components/Button";
import NoSSR from "@components/NoSSR";
import SEO from "@components/SEO";
import Topbar from "@components/Topbar/Topbar";
import Script from "next/script";
import { Content } from "pages";
import { useState } from "react";

function Trend(props: {trend: string}) {
    const {trend} = props
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
    return <>
        <Topbar></Topbar>
        <SEO title="AWS Specialister - molntjänster, AI och automatisering" description="Vi är ett konsultbolag specialiserat på molntjänster, AI och automatisering, med fokus på AWS.." />
        <div className="my-48">
            <Content>
                <label>alto/s - datastrategi undersökning 2024</label>
                <h1 className="text-5xl mb-2">Hur mogna är svenska bolag för att börja använda AI?</h1>
                <p className="text-2xl mb-2">
                    Juni var den månad då ChatGTP söktes på mest någonsin.
                    AI är här för att stanna. Dock inte utan dess utamaningar. 
                    Vi på altostruct vill mötas förstå och möta dessa utamaningar 
                    tillsammans med er.

                </p>
                <div>
                    <div className="w-1/2">
                        <Trend trend="chatgpt"></Trend>
                    </div>
                </div>
                <Button className="md:w-fit" label="Delta"></Button>
            </Content>
        </div>
    </>
}

export default CloudAndAIStudy;
