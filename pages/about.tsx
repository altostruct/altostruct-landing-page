import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
import WordCircled from "components/Word-Circled/Word";
import TeamImage from "components/TeamImages/Image"
import TransitionSquares from "@components/TransistionSquares";
import tailwindConfig from "tailwind.config";

function About() {
  const { t } = useTranslation();
  const lightBg = tailwindConfig.theme.light

  return (
    <>
    <SEO
      title={t("Altostruct | Cloud Consulting")}
      description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
    ></SEO>
    <Topbar></Topbar>
    
    <div className="bg-[#161616] md:pb-20 pb-10">
      <Content>
        <div className="mb-6 items-center md:text-left text-center text-white md:w-3/4">
        <p className="pt-20 md:pt-48 mt-9 text-3xl md:text-6xl text-left md:w-3/4">{t("Jobba med banbrytande")} <WordCircled borderCircle={true}>{t("teknologi")}</WordCircled> {t(" tillsammans med de främsta inom AWS")} <WordCircled>{t("och molnet")}</WordCircled></p>
          <p className="mt-5 mb-72 text-left"></p>
          <div className="rotate-90 text-white text-xs origin-top-right flex absolute md:bottom-80 bottom-72 right-5">
              <img src="/images/icons/arrow-icon.svg" width="20" decoding="async" loading="lazy"></img>
              <a href={"/career"}> 
              <p className="pl-2 text-right text-white">{t("Är du vår nästa kollega?")}</p>
              </a>
          </div>
        </div>
        </Content>
            

            <div className={lightBg}>
            <TransitionSquares></TransitionSquares>
            <Content>

              <div className="md:grid md:grid-cols-6 md:gap-4 text-white">
                <div className="col-start-1 col-end-5">
                  <div className="pt-20 text-white font-sans">
                    <h2 className="pb-4">{t("Om Altostruct")}</h2>
                  </div>
                  <div className="relative">
                    <h1 className="relative z-10">{t("Altostruct är ett konsultbolag specialiserade inom AWS. Vårt team av AWS konsulter är certifierade via AWS och erbjuder ett stort utbud av tjänster som exempelvis molnmigrationer, AI, serverless och APIer. Altostruct grundades 2020 och har sedan start haft en stark tillväxt och har hjälpt ett stort antal företag företag nå sin fulla potential med hjälp av molnet.")}</h1>
                    <div className="absolute top-20 left-3/4 w-20 h-20 md:w-40 md:h-40 rotate-45 bg-[#6024ff]"></div>
                    <div className="absolute top-2 left-10 rotate-12 w-20 h-20 md:w-40 md:h-40 bg-[#6024ff]"></div>
                  </div>
                </div>

                <div className="col-start-3 col-end-7 justify-items-end">
                <div className="pt-20 text-white font-sans">
                  <h2>{t("Vår vision")}</h2>
                </div>
                  <div className="relative pb-20">
                    <h1 className="relative z-10">{t("Vår vision är att göra det möjligt för alla företag att bygga och hosta branschledande applikationer och platformer i molnet, och på så sätt demokratisera tillgången till den mest kraftfulla teknologin och resurserna.")}</h1>
                    <div className="absolute top-32 left-3/4 w-20 h-20 md:w-40 md:h-40 rotate-45 bg-[#6024ff]"></div>
                    <div className="absolute top-2 left-20 w-20 h-20 md:w-40 md:h-40 bg-[#6024ff]"></div>
                  </div>
                </div>
              </div>
              </Content>
              <div className="flex place-content-start">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
            </div>

          <Content>
          <div className="hidden md:block">
              <div className="text-white pt-40 pb-20">
                <h2>{t("Varför välja oss?")}</h2>
              </div>

            <div className="md:grid md:grid-cols-12 text-white items-center mb-20">
              <div className="md:col-span-1">
                <img className="w-20" src="/images/icons/Icon-48.svg" alt="" />
              </div>
              <div className="flex col-span-11 items-center ml-6 border-b-[1px]">
                <h1>Wolfpacks</h1>
                <p className="w-1/2 ml-auto font-sans">
                {t("Vi säkerställer kvalitet och leverans i tid genom att arbeta agilt i små team vars huvudsakliga fokus är er och er produkt.")}
                </p>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 text-white items-center mb-20">
              <div className="md:col-span-1">
                <img className="w-20" src="/images/icons/Icon-54.svg" alt="" />
              </div>
              <div className="md:flex col-span-11 items-center ml-6 border-b-[1px]">
                <h1>{t("Direkt kontakt")}</h1>
                <p className="w-1/2 ml-auto font-sans">
                {t("Vi tror på enkel och effektiv kommunikation. Det är A och O i utveckling. Vi minskar därför mellanhänder och erbjuder direkt kontakt mellan kund och utvecklare.")}
                </p>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 text-white items-center mb-20">
              <div className="md:col-span-1">
                <img className="w-20" src="/images/icons/Icon-55.svg" alt="" />
              </div>
              <div className="flex col-span-11 items-center ml-6 border-b-[1px]">
                <h1>{t("Nära och långsiktiga samarbeten")}</h1>
                <p className="w-1/2 ml-auto font-sans">
                  {t("Vi arbetar nära kund och är lojala partners. Genom nära samarbeten får vi en djup förståelse för era utmaningar vilket ger oss möjligheten att skapa bättre och mer anpassade lösningar. Efter lösningen är byggd erbjuder vi också kontinuerligt underhåll.")}
                </p>
              </div>
            </div>
          </div>

          <div className="md:hidden text-white">
            <div className="text-white pt-40 pb-20">
              <h2>{t("Varför välja oss?")}</h2>
            </div>

              <div className="mb-10">
                <div className="flex border-b-[1px]">
                  <img className="w-10" src="/images/icons/Icon-48.svg" alt="" />
                  <h2 className="ml-2">Wolfpacks</h2>
                </div>
                <p className="mt-5">
                {t("Vi säkerställer kvalitet och leverans i tid genom att arbeta agilt i små team vars huvudsakliga fokus är er och er produkt.")}
                </p>
              </div>

              <div className="mb-10">
                <div className="flex border-b-[1px]">
                  <img className="w-10" src="/images/icons/Icon-54.svg" alt="" />
                  <h2 className="ml-2">{t("Direkt kontakt")}</h2>
                </div>
                <p className="mt-5">
                {t("Vi tror på enkel och effektiv kommunikation. Det är A och O i utveckling. Vi minskar därför mellanhänder och erbjuder direkt kontakt mellan kund och utvecklare.")}
                </p>
              </div>

              <div className="mb-10">
                <div className="flex border-b-[1px]">
                  <img className="w-10" src="/images/icons/Icon-55.svg" alt="" />
                  <h2 className="ml-2">{t("Nära och långsiktiga samarbeten")}</h2>
                </div>
                <p className="mt-5 font-sans">
                  {t("Vi arbetar nära kund och är lojala partners. Genom nära samarbeten får vi en djup förståelse för era utmaningar vilket ger oss möjligheten att skapa bättre och mer anpassade lösningar. Efter lösningen är byggd erbjuder vi också kontinuerligt underhåll.")}
                </p>
              </div>
          </div>
          </Content>
 
          
          <div className="bg-[#292929]">
              <div className="flex">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
              <div className="flex md:pl-28 pl-14">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>

            <div className="md:hidden flex-wrap pt-10">
              <div className="flex w-screen place-content-between">
              <img className="w-1/4" src="/images/MISC/Altostruct_office-19.jpg" alt="" />
              <img className="w-1/4 mr-[25%]" src="/images/MISC/Altostruct_office-34.jpg" alt="" />
              </div>
              <div className="flex w-screen">
              <img className="w-1/4 mr-auto ml-auto" src="/images/MISC/Altostruct_office-18.jpg" alt="" />
              <img className="w-1/4" src="/images/MISC/Altostruct_office-39.jpg" alt="" />
              </div>
              <div className="flex w-screen place-content-between">
              <img className="w-1/4" src="/images/MISC/Altostruct_office-38.jpg" alt="" />
              <img className="w-1/4 mr-[25%]" src="/images/MISC/Altostruct_office-37.jpg" alt="" />
              </div>
              <div className="flex w-screen">
              <img className="w-1/4 mr-auto ml-auto" src="/images/MISC/Altostruct_office-33.jpg"alt="" />
              <img className="w-1/4" src="/images/MISC/Altostruct_office-16.jpg" alt="" />
              </div>
            </div>
          
            
            <div className="pt-10 md:pt-40 flex place-content-end text-white pb-10 mr-10 font-sans">
              <p className="text-3xl">{t("Hälsa Altostruct teamet!")}</p>
            </div>

            <div className="hidden md:grid grid-cols-6 pb-40 font-sans">
              <div className="flex place-content-center">
                <TeamImage children="Erik & Gustav" imagePath="/images/MISC/Altostruct_office-19.jpg"></TeamImage>
              </div>
              <div className="flex place-content-center">
                <TeamImage children={t("Kaffe paus")} imagePath="/images/MISC/Altostruct_office-34.jpg"></TeamImage>
              </div>
              <div className="flex place-content-center">
                <TeamImage children="Erik & Simon" imagePath="/images/MISC/Altostruct_office-18.jpg"></TeamImage>
              </div>
              <div className="flex place-content-center">
                <TeamImage children="Team meeting / Altostruct" imagePath="/images/MISC/Altostruct_office-39.jpg"></TeamImage>
              </div>
              <div className="flex place-content-center">
                <TeamImage children="Joakim & Per" imagePath="/images/MISC/Altostruct_office-38.jpg"></TeamImage>
              </div>
              <div className="flex place-content-center">
                <TeamImage children={t("Kontorets Maskot")} imagePath="/images/MISC/Altostruct_office-37.jpg"></TeamImage>
              </div>
            </div>
          </div>


          <div className="flex place-content-end">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#292929]">
                </div>
              </div>
              <div className="flex place-content-end md:pr-28 pr-14">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#292929]">
                </div>
              </div>
        <Content>
        <div className="text-white pt-10 md:w-2/4 mb-10">
          <h1>{t("Vill du veta mer om Altostruct?")} <WordCircled borderCircle={true} color="blue">{t("hör av dig")}</WordCircled> {t("till oss så berättar vi mer!")}</h1> 
        </div>
        <Form></Form>
        </Content>
       
    </div>
    <Footer />
  </>
  );
}

export default About;
