import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import * as fs from "fs";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
import WordCircled from "components/Word-Circled/Word";
import TeamImage from "components/TeamImages/Image";
import TransitionSquares from "@components/TransistionSquares";
import tailwindConfig from "tailwind.config";
import PageStart from "@components/PageStart";
import BigList from "@components/BigList";
import StaticSidebar from "@components/StaticSidebar/StaticSidebar";
import BorderedPanel from "@components/BorderedPanel";
import CloudRain from "@components/CloudRain";
import SmallCity from "@components/3d/SmallCity";
import NoSSR from "@components/NoSSR";
import Image from "next-image-export-optimizer";
import Button from "@components/Button/Button";

function About(props: { code: string }) {
  const { t } = useTranslation();
  const lightBg = tailwindConfig.theme.light;

  return (
    <>
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>

      <div className="bg-[#161616] md:pb-20 pb-10">
        <Content>
          <PageStart
            title={
              <>
                Vi är certifierade AWS konsulter i Stockholm!
              </>
            }
          ></PageStart>
        </Content>

        <Content className="md:pt-2 pt-40">
          <div className="w-full flex-col gap-6 md:flex-row flex ">
            <div className="md:w-3/5 flex-grow">
                <Image className="md:w-40 w-36 inline-block pb-4" width={100} height={100} alt="" src="/images/pixels.png" />
              <p className="text-2xl text-gray-200">Genom våra certifierade och erfarna konsulter erbjuder vi högkvalitativa tjänster och lösningar. Oavsett om det handlar om att flytta till molnet eller optimera befintlig molninfrastruktur är vi engagerade i att hjälpa våra kunder att navigera genom molnets komplexiteter.</p>
            </div>
          </div>
        </Content >


        <Content className="mt-12 flex-wrap flex">
          <div className="w-1/2 mt-12 md:mt-48 md:p-6">
            <Image alt="" className="w-full h-full object-contain" src="/images/MISC/Altostruct_office-39.jpg" width={1024} height={1024} />
          </div>
          <div className="w-1/2 md:p-6">
            <Image alt="" className="w-full h-full object-contain" src="/images/icons/Frame 1 (90).png" width={1024} height={1024} />
          </div>
          <div className="m-auto w-1/2 md:p-6">
            <Image alt="" className="w-full h-full object-contain" src="/images/MISC/Altostruct_office-34.jpg" width={1024} height={1024} />
          </div>

        </Content >


      



        <Content className="md:pt-40 pt-20 relative flex gap-6 flex-col" >
          <h1 className="mt-auto">Varför välja oss?</h1>
          <BorderedPanel label="OSS / 01.">
            <p className="md:text-4xl">
              <span className="text-white">
                {t(
                  "Altostruct är ett konsultbolag specialiserade inom AWS."
                )}
              </span>
              <span className="text-gray-400">
                {t(" Vårt team av AWS konsulter är certifierade via AWS och erbjuder ett stort utbud av " + "tjänster som exempelvis molnmigrationer, " + "AI, serverless och APIer."
                )}
              </span>
            </p>
          </BorderedPanel>
          <BorderedPanel label="OSS / 02.">
            <p className="md:text-4xl">
              <span className="text-white">{t("Vår vision är att")}</span>
              <span className="text-gray-400">
                {t(
                  " göra det möjligt för alla företag" +
                  " att bygga och hosta branschledande applikationer" +
                  " och plattformer i molnet."
                )}
              </span>
            </p>
          </BorderedPanel>
          <BorderedPanel label="OSS / 03.">
            <p className="md:text-4xl">
              <span className="text-white">{t("Vår vision är att")}</span>
              <span className="text-gray-400">
                {t(
                  " göra det möjligt för alla företag" +
                  " att bygga och hosta branschledande applikationer" +
                  " och plattformer i molnet."
                )}
              </span>
            </p>
          </BorderedPanel>
        </Content >

        <Content className="bg-[#1f1f1f] p-6 md:p-16 mt-20 rounded-xl">
          <h1>Sedan 2020 har vi arbetat med senaste teknologin</h1>
          <div className="flex gap-8 mt-8 items-start flex-col md:flex-row">
            <p className="md:text-2xl md:w-1/2">
              Altoustruct AB är ett innovativt konsultbolag grundat 2020 och fokuserat på att leverera skräddarsydda lösningar inom Amazon Web Services (AWS)-ekosystemet.
              <br></br><br></br> Med en passion för teknologi och en djup förståelse för molninfrastruktur erbjuder vi expertis av högsta kvalitet för att stödja företag i deras digitala omvandlingsresa. Vår team av erfarna molntekniker och AWS-arkitekter är dedikerade till att optimera och modernisera företags IT-infrastruktur med hjälp av de senaste verktygen och tjänsterna som AWS-plattformen erbjuder.
            </p>
            <p className="md:text-2xl md:w-1/2">
              Från att designa skalbara och säkra molnarkitekturer till att implementera DevOps-principer och automatisering, är vår expertis mångsidig och anpassad för att passa dina unika behov.
              <br></br>
              <br></br>
              Har ni några frågor eller vill veta mer om oss. Tveka inte på att höra av dig!
              <br></br>
              <br></br>
              <div className="text-sm" >
                <Button>Kontakta oss</Button>
              </div>
            </p>
          </div>
          <div>

            <p className="mt-12">{"- Altostruct Teamet"}</p>
          </div>
        </Content>

        <Content className="md:mt-10 mt-20">
          <div
            className="text-white md:pt-20 pt-10 md:w-4/5 mb-10"
            style={{ fontFamily: "KHTeka-Light" }}
          >
            <p className="md:text-6xl text-3xl" style={{ lineHeight: "1.4" }}>
              {t("Vill du veta mer om Altostruct?")}{" "}
              <WordCircled borderCircle={true} color="blue">
                {t("hör av dig")}
              </WordCircled>{" "}
              {t("till oss så berättar vi mer!")}
            </p>
          </div>
          <div id="#contact">
            <Form></Form>
          </div>
        </Content>
      </div>
      <Footer />
    </>
  );
}

export default About;
