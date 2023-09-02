import CookieBanner from "@components/CookieBanner/CookieBanner"
import SEO from "@components/SEO"
import Topbar from "@components/Topbar/Topbar"
import Script from "next/script"

function Techonologies() {

    return <>
        <CookieBanner></CookieBanner>
        <Script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="https://js-eu1.hs-scripts.com/26849291.js"
        />
        <SEO
            title={"Altostruct | Cloud Consulting"}
            description={"Altostruct är ett AWS konsultbolag i Stockholm."}
        />
        <Topbar></Topbar>
    </>
}

export default Techonologies