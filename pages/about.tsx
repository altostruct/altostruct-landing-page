import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
import WordCircled from "components/Word-Circled/Word";
import TeamImage from "components/TeamImages/Image";
import TransitionSquares from "@components/TransistionSquares";
import tailwindConfig from "tailwind.config";
import Link from "next/link";
import PageStart from "@components/PageStart";
import BigList from "@components/BigList";
import StaticSidebar from "@components/StaticSidebar";

function About() {
  const { t } = useTranslation();
  const lightBg = tailwindConfig.theme.light;

  return (
    <>
      <StaticSidebar></StaticSidebar>
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>

      <div className="bg-[#161616] md:pb-20 pb-10">
        <Content>
          <PageStart
            title={
              <p className="pt-20 md:pt-48 mt-9 text-3xl md:text-6xl text-left md:w-3/4">
                {t("Jobba med banbrytande")}{" "}
                <WordCircled borderCircle={true}>{t("teknologi")}</WordCircled>{" "}
                {t(" tillsammans med de främsta inom AWS")}{" "}
                <WordCircled>{t("och molnet")}</WordCircled>
              </p>
            }
          ></PageStart>
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
                  <h1 className="relative z-10">
                    {t(
                      "Altostruct är ett konsultbolag specialiserade inom AWS. Vårt team av AWS konsulter är certifierade via AWS och erbjuder ett stort utbud av tjänster som exempelvis molnmigrationer, AI, serverless och APIer. Altostruct grundades 2020 och har sedan start haft en stark tillväxt och har hjälpt ett stort antal företag företag nå sin fulla potential med hjälp av molnet."
                    )}
                  </h1>
                  <div className="absolute top-20 left-3/4 w-20 h-20 md:w-40 md:h-40 rotate-45 bg-[#6024ff]"></div>
                  <div className="absolute top-2 left-10 rotate-12 w-20 h-20 md:w-40 md:h-40 bg-[#6024ff]"></div>
                </div>
              </div>

              <div className="col-start-3 col-end-7 justify-items-end">
                <div className="pt-20 text-white font-sans">
                  <h2>{t("Vår vision")}</h2>
                </div>
                <div className="relative pb-20">
                  <h1 className="relative z-10">
                    {t(
                      "Vår vision är att göra det möjligt för alla företag att bygga och hosta branschledande applikationer och platformer i molnet, och på så sätt demokratisera tillgången till den mest kraftfulla teknologin och resurserna."
                    )}
                  </h1>
                  <div className="absolute top-32 left-3/4 w-20 h-20 md:w-40 md:h-40 rotate-45 bg-[#6024ff]"></div>
                  <div className="absolute top-2 left-20 w-20 h-20 md:w-40 md:h-40 bg-[#6024ff]"></div>
                </div>
              </div>
            </div>
          </Content>
          <div className="flex place-content-start">
            <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]"></div>
          </div>
        </div>

        <Content>
          <BigList
            items={[
              {
                title: "Wolfpacks",
                description: t(
                  "Vi säkerställer kvalitet och leverans i tid genom att arbeta agilt i små team vars huvudsakliga fokus är er och er produkt."
                ),
                image: (
                  <img
                    className="w-full"
                    src="/images/icons/Icon-48.svg"
                    alt=""
                  />
                ),
              },
              {
                title: "Direkt kontakt",
                description: t(
                  "Vi tror på enkel och effektiv kommunikation. Det är A och O i utveckling. Vi minskar därför mellanhänder och erbjuder direkt kontakt mellan kund och utvecklare."
                ),
                image: (
                  <img
                    className="w-full"
                    src="/images/icons/Icon-54.svg"
                    alt=""
                  />
                ),
              },
              {
                title: "Nära och långsiktiga samarbeten",
                description: t(
                  "Vi arbetar nära kund och är lojala partners. Genom nära samarbeten får vi en djup förståelse för era utmaningar vilket ger oss möjligheten att skapa bättre och mer anpassade lösningar. Efter lösningen är byggd erbjuder vi också kontinuerligt underhåll."
                ),
                image: (
                  <img
                    className="w-full"
                    src="/images/icons/Icon-55.svg"
                    alt=""
                  />
                ),
              },
            ]}
          ></BigList>
        </Content>

        <div className="bg-[#292929]">
          <div className="flex">
            <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]"></div>
          </div>
          <div className="flex md:pl-28 pl-14">
            <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]"></div>
          </div>

          <div className="md:hidden flex-wrap pt-10">
            <div className="flex w-screen place-content-between">
              <img
                className="w-1/4"
                src="/images/MISC/Altostruct_office-19.jpg"
                alt=""
              />
              <img
                className="w-1/4 mr-[25%]"
                src="/images/MISC/Altostruct_office-34.jpg"
                alt=""
              />
            </div>
            <div className="flex w-screen">
              <img
                className="w-1/4 mr-auto ml-auto"
                src="/images/MISC/Altostruct_office-18.jpg"
                alt=""
              />
              <img
                className="w-1/4"
                src="/images/MISC/Altostruct_office-39.jpg"
                alt=""
              />
            </div>
            <div className="flex w-screen place-content-between">
              <img
                className="w-1/4"
                src="/images/MISC/Altostruct_office-38.jpg"
                alt=""
              />
              <img
                className="w-1/4 mr-[25%]"
                src="/images/MISC/Altostruct_office-37.jpg"
                alt=""
              />
            </div>
            <div className="flex w-screen">
              <img
                className="w-1/4 mr-auto ml-auto"
                src="/images/MISC/Altostruct_office-33.jpg"
                alt=""
              />
              <img
                className="w-1/4"
                src="/images/MISC/Altostruct_office-16.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="pt-10 md:pt-40 flex place-content-end text-white pb-10 mr-10 font-sans">
            <p className="text-3xl">{t("Hälsa Altostruct teamet!")}</p>
          </div>

          <div className="hidden md:grid grid-cols-6 pb-40 font-sans">
            <div className="flex place-content-center">
              <TeamImage
                title="Erik & Gustav"
                imagePath="/images/MISC/Altostruct_office-19.jpg"
              ></TeamImage>
            </div>
            <div className="flex place-content-center">
              <TeamImage
                title={t("Kaffe paus")}
                imagePath="/images/MISC/Altostruct_office-34.jpg"
              ></TeamImage>
            </div>
            <div className="flex place-content-center">
              <TeamImage
                title="Erik & Simon"
                imagePath="/images/MISC/Altostruct_office-18.jpg"
              ></TeamImage>
            </div>
            <div className="flex place-content-center">
              <TeamImage
                title="Team meeting / Altostruct"
                imagePath="/images/MISC/Altostruct_office-39.jpg"
              ></TeamImage>
            </div>
            <div className="flex place-content-center">
              <TeamImage
                title="Joakim & Per"
                imagePath="/images/MISC/Altostruct_office-38.jpg"
              ></TeamImage>
            </div>
            <div className="flex place-content-center">
              <TeamImage
                title={t("Kontorets Maskot")}
                imagePath="/images/MISC/Altostruct_office-37.jpg"
              ></TeamImage>
            </div>
          </div>
        </div>

        <div className="flex place-content-end">
          <div className="md:w-28 md:h-28 h-14 w-14 bg-[#292929]"></div>
        </div>
        <div className="flex place-content-end md:pr-28 pr-14">
          <div className="md:w-28 md:h-28 h-14 w-14 bg-[#292929]"></div>
        </div>
        <Content>
          <div className="text-white pt-10 md:w-2/4 mb-10">
            <h1>
              {t("Vill du veta mer om Altostruct?")}{" "}
              <WordCircled borderCircle={true} color="blue">
                {t("hör av dig")}
              </WordCircled>{" "}
              {t("till oss så berättar vi mer!")}
            </h1>
          </div>
          <Form></Form>
        </Content>
      </div>
      <Footer />
    </>
  );
}

export default About;
