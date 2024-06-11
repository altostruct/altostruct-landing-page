import Button from "@components/Button"
import SEO from "@components/SEO"
import Topbar from "@components/Topbar/Topbar"
import { Content, SectionWithLabel } from "pages"
import { SiAwsamplify } from "react-icons/si"

function Courses() {
    return <div className="flex flex-col gap-28 my-48 relative">
        {/* <div className="absolute w-1 -translate-x-1/2 top-0 h-full border-2 border-green-600 border-dashed  left-[12vw] "></div>
    <div className="w-4 -translate-x-1/2 h-4 bg-black  rounded-full fixed left-[12vw]"></div> */}
        <Topbar></Topbar>
        <SEO title="alto/s" description="Cloud, AI och automatisering" />
        <Content>
            <h1 className="text-6xl">
                <SiAwsamplify className="inline pr-2"></SiAwsamplify>
                Cloud och AWS Kurser</h1>
            <p className="text-2xl">
                Våra kurser består av en heldagsworkshop som kombinerar föreläsningar med praktiska övningar, vilket ger er möjlighet att utveckla era kunskaper och färdigheter inom molnteknologi.
            </p>
        </Content>


        <SectionWithLabel className="flex text-xl gap-2 md:flex-row" title="Introduktion till molnet och AWS">
            <div className="flex-1">
                Vår introduktionskurs inleds med en heldagsworkshop där vi tillsammans utforskar de grundläggande principerna för arbete i molnet. Under denna intensiva dag får deltagarna en omfattande genomgång av molnteknologi och dess praktiska tillämpningar. Efter workshopen får deltagarna även 
                tilldelade uppgifter att arbeta med på egen hand.
    
                <Button link={`mailto:info@altostruct.se?subject=Kurs%3A%20Introduktion%20till%20molnet%20och%20AWS&body=Hej%2C%0A%0AJag%20%C3%A4r%20intresserad%20av%20kursen%20%22Introduktion%20till%20molnet%20och%20AWS%22.%20V%C3%A4nligen%20kontakta%20mig%20f%C3%B6r%20att%20hitta%20en%20l%C3%A4mplig%20tid.%0A%0A`} label="Bestäm tid för kurs!" className="w-fit mt-12"></Button>
            </div>
            <div className="px-2">
                <h3 className="underline">Kursen täcker följande</h3>
                <ul className="list-decimal list-inside">
                    <li>Avancerad säkerhetskonfiguration</li>
                    <li>Skalbarhetsstrategier</li>
                    <li>Bästa praxis för AWS-miljöer</li>
                    <li>Övervakning och logghantering</li>
                    <li>Incidenthantering och återhämtning</li>
                </ul>
                <div className="mt-4 text-sm">
                    Rekommenderade förkunskaper: Inga förkunskaper krävs <br></br>
                    Max antal deltagare: 10 <br></br>
                    Pris: 7200 kr
                </div>
            </div>
        </SectionWithLabel>
        <SectionWithLabel className="flex text-xl gap-2 md:flex-row" title="Skalbarhet och säkerhet på AWS">
            <div className="flex-1">
                Vår kurs i säkerhet och skalbarhet riktar sig till certifierade AWS-specialister och visar hur man bygger skalbara och säkra lösningar på AWS. Vi går igenom bästa praxis för att sätta upp och hantera en AWS-miljö, och erbjuder djupgående insikter i avancerade säkerhetsåtgärder och skalbarhetsstrategier.
                <Button link={`mailto:info@altostruct.se?subject=Kurs%3A%20Skalbarhet%20och%20s%C3%A4kerhet%20p%C3%A5%20AWS&body=Hej%2C%0A%0AJag%20%C3%A4r%20intresserad%20av%20kursen%20%22Skalbarhet%20och%20s%C3%A4kerhet%20p%C3%A5%20AWS%22.%20V%C3%A4nligen%20kontakta%20mig%20f%C3%B6r%20att%20hitta%20en%20l%C3%A4mplig%20tid.%0A%0A`} label="Bestäm tid för kurs!" className="w-fit mt-12"></Button>
            </div>
            <div className="px-2">
                <h3 className="underline">Kursen täcker följande</h3>
                <ul className="list-decimal list-inside">
                    <li>Grundläggande koncept och terminologi</li>
                    <li>Molninfrastruktur och tjänster</li>
                    <li>Säkerhet och regelefterlevnad</li>
                    <li>Praktisk användning och implementering</li>
                    <li>Kostnadshantering och optimering</li>
                </ul>
                <div className="mt-4 text-sm">
                    Rekommenderade förkunskaper: Inga förkunskaper krävs <br></br>
                    Max antal deltagare: 10 <br></br>
                    Pris: 7200 kr
                </div>
            </div>
        </SectionWithLabel>


        <SectionWithLabel className="text-4xl font-second " title="AI på AWS">
            Kommer snart!
        </SectionWithLabel>
    </div>
}

export default Courses