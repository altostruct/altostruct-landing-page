import Button from "@components/Button"
import Form from "@components/Email"
import Footer from "@components/Footer"
import SEO from "@components/SEO"
import Topbar from "@components/Topbar/Topbar"
import { Content, SectionWithLabel } from "pages"
import { SiAwsamplify } from "react-icons/si"

function ConsultingServices() {
    return <div className="flex flex-col gap-28 my-48 relative">
        {/* <div className="absolute w-1 -translate-x-1/2 top-0 h-full border-2 border-green-600 border-dashed  left-[12vw] "></div>
    <div className="w-4 -translate-x-1/2 h-4 bg-black  rounded-full fixed left-[12vw]"></div> */}
        <Topbar></Topbar>
        <SEO title="alto/s | AWS konsulter" description="alto/s | konsulttjänster" />
        <Content>
            <h1 className="text-6xl pb-2">
                <SiAwsamplify className="inline pr-2"></SiAwsamplify>
                Utnyttja molnets och AI fulla potential
            </h1>
            <p className="text-3xl">
                Genom certifierade AWS experter erbjuder hjälper vi dig, bygga och underhålla den senaste tekniken.
            </p>
            <ul className="flex flex-col gap-4 mt-10 text-2xl">
                <li><span className="underline">Expertis och Erfarenhet:</span> Vi har omfattande erfarenhet och certifierad expertis inom AWS, vilket garanterar att du får den bästa lösningen för dina specifika behov.</li>
                <li><span className="underline">Anpassade Lösningar:</span> Vi erbjuder skräddarsydda lösningar som är anpassade till din verksamhets unika krav och mål, vilket möjliggör smidig skalbarhet och tillväxt.</li>
                <li><span className="underline">Kundcentrerad Kultur:</span> Vi sätter alltid kunden i fokus och arbetar nära dig för att förstå dina behov och skapa lösningar som verkligen gör skillnad.</li>
                <li><span className="underline">Kontinuerlig Support:</span> Vår dedikerade supportteam är tillgängligt dygnet runt för att hjälpa dig med allt från drift till felsökning, vilket säkerställer att dina tjänster alltid fungerar optimalt.</li>
            </ul>
            <Form className="mt-20"></Form>
        </Content>
        <Footer></Footer>
    </div>
}

export default ConsultingServices