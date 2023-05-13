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

function About(props: { code: string }) {
  const { code } = props;
  const { t } = useTranslation();
  const lightBg = tailwindConfig.theme.light;

  return (
    <>
      <StaticSidebar></StaticSidebar>
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
                {t("Bygg branschledande web ")}{" "}
                <WordCircled borderCircle={true}>
                  {t("applikationer")}
                </WordCircled>{" "}
                {t("och platformer i ")}{" "}
                <WordCircled>{t("molnet")}</WordCircled>
                {t(" med oss")}
              </>
            }
          ></PageStart>
        </Content>

        <div>
          <TransitionSquares></TransitionSquares>
          <Content className="py-32 flex">
            <div className="w-full flex flex-col gap-10">
              <BorderedPanel label="OSS / 01.">
                <p className="text-4xl">
                  <span className="text-white">
                    {t(
                      "Altostruct är ett konsultbolag specialiserade inom AWS."
                    )}
                  </span>
                  <span className="text-gray-400">
                    {t(
                      " Vårt team av AWS konsulter är certifierade via " +
                        " AWS och erbjuder ett stort utbud av tjänster som" +
                        " exempelvis molnmigrationer, AI, serverless och APIer. "
                    )}
                  </span>
                </p>
              </BorderedPanel>

              <BorderedPanel label="OSS / 02.">
                <p className="text-4xl">
                  <span className="text-white">{t("Vår vision är att ")}</span>
                  <span className="text-gray-400">
                    {t(
                      "är att göra det möjligt för alla företag" +
                        " att bygga och hosta branschledande applikationer" +
                        " och platformer i molnet."
                    )}
                  </span>
                </p>
              </BorderedPanel>

              <BorderedPanel label="OSS / 03.">
                <p className="text-4xl">
                  <span className="text-white">{t("Vi tror på ")}</span>
                  <span className="text-gray-400">
                    {t(
                      "är att göra det möjligt för alla " +
                        "företag att bygga och hosta branschledande" +
                        " applikationer och platformer i molnet."
                    )}
                  </span>
                </p>
              </BorderedPanel>
            </div>
          </Content>
        </div>

        <Content>
          <div className=" pt-32 pb-10">
            <h1 className="text-left mb-12">Varför välja oss?</h1>
            <BigList
              items={[
                {
                  title: "Wolfpacks",
                  description: t(
                    "Vi säkerställer kvalitet och leverans i tid genom att arbeta agilt i små team vars huvudsakliga fokus är er och er produkt."
                  ),
                  image: "/images/icons/Icon-58.svg",
                },
                {
                  title: t("Direkt kontakt"),
                  description: t(
                    "Vi tror på enkel och effektiv kommunikation. Det är A och O i utveckling. Vi minskar därför mellanhänder och erbjuder direkt kontakt mellan kund och utvecklare."
                  ),
                  image: "/images/icons/Icon-52.svg",
                },
                {
                  title: t("Nära och långsiktiga samarbeten"),
                  description: t(
                    "Vi arbetar nära kund och är lojala partners. Genom nära samarbeten får vi en djup förståelse för era utmaningar vilket ger oss möjligheten att skapa bättre och mer anpassade lösningar. Efter lösningen är byggd erbjuder vi också kontinuerligt underhåll."
                  ),
                  image: "/images/icons/Icon-53.svg",
                },
              ]}
            ></BigList>
          </div>
        </Content>

        <div className="bg-[#292929]">
          <div className="flex">
            <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]"></div>
          </div>

          <div className="md:hidden flex-wrap pt-20">
            <div className="flex w-screen place-content-between">
              <img
                className="w-5/12"
                src="/images/MISC/Altostruct_office-19.jpg"
                alt=""
              />
              <img
                className="w-5/12"
                src="/images/MISC/Altostruct_office-34.jpg"
                alt=""
              />
            </div>
            <div className="flex w-screen mt-4">
              <img
                className="w-5/12 ml-auto mr-auto"
                src="/images/MISC/Altostruct_office-18.jpg"
                alt=""
              />
            </div>
            <div className="flex w-screen place-content-between mt-4">
              <img
                className="w-5/12"
                src="/images/MISC/Altostruct_office-38.jpg"
                alt=""
              />
              <img
                className="w-5/12"
                src="/images/MISC/Altostruct_office-37.jpg"
                alt=""
              />
            </div>
            <div className="flex w-screen mt-4">
              <img
                className="w-5/12 mr-auto ml-auto"
                src="/images/MISC/Altostruct_office-15.jpg"
                alt=""
              />
            </div>
            <div className="flex w-screen place-content-between mt-4">
              <img
                className="w-5/12"
                src="/images/MISC/Altostruct_office-39.jpg"
                alt=""
              />
              <img
                className="w-5/12"
                src="/images/MISC/Altostruct_office-16.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            className="pt-10 md:pt-10 flex place-content-center text-white md:mr-10 md:pb-10 pb-32"
            style={{ fontFamily: "KHTeka-Light" }}
          >
            <p className="md:text-4xl text-3xl mx-4 text-center">
              {t("Hälsa på Altostruct teamet!")}
            </p>
          </div>

          <div className="hidden md:grid grid-cols-3 pb-40 gap-10 max-w-7xl m-auto px-4">
            <div className="flex flex-col place-content-center">
              <TeamImage
                title="Erik & Gustav"
                imagePath="/images/MISC/Altostruct_office-19.jpg"
              ></TeamImage>
            </div>
            <div className="flex flex-col place-content-center">
              <TeamImage
                title={t("Kaffepaus")}
                imagePath="/images/MISC/Altostruct_office-34.jpg"
              ></TeamImage>
            </div>
            <div className="flex flex-col place-content-center">
              <TeamImage
                title="Erik & William"
                imagePath="/images/MISC/Altostruct_office-18.jpg"
              ></TeamImage>
            </div>
            <div className="flex flex-col place-content-center">
              <TeamImage
                title={t("Team möte")}
                imagePath="/images/MISC/Altostruct_office-39.jpg"
              ></TeamImage>
            </div>
            <div className="flex flex-col place-content-center">
              <TeamImage
                title="Joakim & Per"
                imagePath="/images/MISC/Altostruct_office-38.jpg"
              ></TeamImage>
            </div>
            <div className="flex flex-col place-content-center">
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

        <Content>
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

export async function getStaticProps(context: any) {
  const code = `
  import Footer from "@components/Footer/Footer";
  import Form from "@components/Form";
  import Topbar from "@components/Topbar/Topbar";
  import Content from "@components/Content";
  import useTranslation from "hooks/useTranslation";
  import SEO from "@components/SEO";
  import React, { useState } from 'react'
  
  function Carrer() {
    const { t } = useTranslation();
    return (
      <>
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>
      <div className="bg-[#161616] md:pb-20 pb-10">
        <div className="grid grid-cols-1 pt-52 text-center text-white">
          <h1>Atmosphere package</h1>
        </div>
        <div className="grid grid-cols-12 md:pb-60 text-white">
                <div className="md:col-start-4 md:col-span-6>
                </div>
        </div>
  
        <div className="grid grid-cols-12 md:pb-52 pb-24 text-white">
            <div className="md:col-start-4 md:col-span-6>
                  <h2>{t("Hör av dig så hjälper vi dig!")}</h2>
            </div>
        </div>
            <Content>
             <Form></Form>
            </Content>
      </div>
      <Footer />
    </>
    );
  }
  
  export default Carrer;
  `;

  return {
    // Passed to the page component as props
    props: { code },
  };
}

export default About;
