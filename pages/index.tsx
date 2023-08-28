/* eslint-disable @next/next/no-img-element */
import SEO from "@components/SEO";
import Cite from "components/Cite";
import Content from "components/Content";
import Footer from "components/Footer/Footer";
import Topbar from "components/Topbar/Topbar";
import useTranslation from "hooks/useTranslation";
import WordCircled from "components/Word-Circled/Word";
import Package from "@components/Packege/Packege";
import { useRef } from "react";
import React, { useState } from "react";
import Link from "next/link";
import SVG from "/images/icons/arrow-icon.svg"
import twconfig from "tailwind.config";
import TransitionSquares from "@components/TransistionSquares";
import PageStart from "@components/PageStart";
import StaticSidebar from "@components/StaticSidebar/StaticSidebar";
import Form from "@components/Form";
import Projects from "@components/Projects";
import classNames from "classnames";
import Images from "@components/Images";
import Recommendations from "@components/Recommendations";
import Button from "@components/Button/Button";
import Image from "next-image-export-optimizer";
import Calendar from "@components/Calendar/Calendar";
import CookieConsent from "react-cookie-consent";
import Script from "next/script";
import CookieBanner from "@components/CookieBanner/CookieBanner";
import LinkedIn from "@components/Linkedin/LinkedIn";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BorderedPanel from "@components/BorderedPanel";
const QUOTES = []

export default function Home() {
  const { t } = useTranslation();
  const bgLight = twconfig.theme.light;


  const projects = [
    {
      link: "https://www.nrlyze.se/",
      img: (
        <Image
          width={400}
          height={400}
          alt="Customer Nrlyze"
          className="max-h-56"
          src="/images/customers/nrlyze.png"
        ></Image>
      ),
      title: t("Nrlyze har utvecklat ett AI-system"),
      description: t(
        " bestående av trådlösa sensorer som optimerar parametrarna för värmesystem i byggnader. Altostruct har samarbetat med Nrlyze genom att bygga en webbportal som presenterar datan i grafer. Detta ger användarna en enkel och tydlig översikt över värmesystemets prestanda och hjälper dem att effektivt övervaka och förbättra systemet."
      ),
    },
    {
      link: "https://www.saluto.ai/",
      img: (
        <div className="flex">
          <Image
            width={400}
            height={400}
            alt="Customer Saluto"
            className="max-h-56"
            src="/images/first_step_swe-a528fa16687553e6a9f564e91f85e007.png"
          ></Image>
          <Image
            width={400}
            height={400}
            alt="Customer Saluto"
            className="max-h-56"
            src="/images/second_step_swe-d932bfc8c9f2053cec9867008120c07c.png"
          ></Image>
          <Image
            width={400}
            height={400}
            alt="Customer Saluto"
            className="max-h-56"
            src="/images/third_step_swe-99ae287c674a9ba0af11be20dd65ac21.png"
          ></Image>
        </div>
      ),
      title: t("Saluto är en medtech startup."),
      description: t(
        " Altostruct samarbetade med Saluto för att bygga en app som ger användarna möjlighet att både ge och få information om deras nuvarande hälsotillstånd. Appen ger användarna en enkel och överskådlig översikt över deras hälsostatus genom att samla in data från olika källor, inklusive wearables och andra hälsorelaterade apparater. Genom att arbeta tillsammans med Altostruct kunde Saluto skapa en användarvänlig app som gör det enkelt och bekvämt för användarna att följa sin hälsa."
      ),
    },
    {
      link: "https://tendium.ai/se/",
      img: (
        <Image
          width={400}
          height={400}
          alt="Customer Tendium"
          className="max-h-56"
          src="/images/img-landing-hero-1.jpeg.webp"
        ></Image>
      ),
      title: t("Tendium är en webbapplikation"),
      description: t(
        " som ger kunder möjligheten att enkelt följa, hitta och ansöka om offentliga upphandlingar. Altostruct har bidragit till projektet genom att bygga en solid infrastruktur för deras microservice arkitektur. Med Altostructs expertis kunde Tendium bygga en skalbar och robust arkitektur som ger en smidig användarupplevelse och pålitlig prestanda. "
      ),
    },
    {
      link: "https://www.foodfacts.se/",
      img: (
        <Image
          width={400}
          height={400}
          alt="Customer Foodfacts"
          className="max-h-56"
          src="/images/customers/foodfacts.png"
        ></Image>
      ),
      title: t("Foodfacts hjälper dig göra medvetna val gällande mat."),
      description: t(
        " Altostruct ledde utvecklingen av en mobilapplikation i samarbete med ett offshoreteam. Applikationen är byggd på AWS med React Native."
      ),
    },
  ];

  return (
    <>
      <CookieBanner></CookieBanner>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/26849291.js"
      />
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      />
      <Topbar></Topbar>
      <div className="pb-48">
        <Content>
          <div className="relative">
            <PageStart
              title={
                <>
                  {/* <div className="w-63"><Image width={100} height={100} alt="" src="/images/icons/aws.svg"></Image></div> */}
                  {t("Bygg skalbart med våra certifierade")}{" "}
                  <WordCircled borderCircle={true}>
                    {t("Amazon Web Services")}
                  </WordCircled>
                  {" "}{t("utveckare")}
                </>
              }
              cta={<div className="flex gap-2">
                <Button className="group" icon={
                  <div className="group-hover:translate-x-1 transition-all">
                    <svg height={"1.2em"} id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                      <path
                        fill="#c3eec3"
                        d="m138.08,71.7v16.59h-16.59v16.59h-16.59v-16.59H21.92v-16.59h82.97v-16.59h16.59v16.59h16.59Zm-33.19-33.19v16.59h-16.59v-16.59h16.59Zm-16.59,66.37h16.59v16.59h-16.59v-16.59Z" />
                    </svg>
                  </div>
                }
                  link="/contact">{t("Boka konsultation")}</Button>
                <Button type="secondary" link="/asd">{t("Boka konsultation")}</Button>
              </div>}
            />
            {/* <div className="absolute w-full bottom-3  md:right-0 flex">
              <div className="m-auto md:mr-auto md:ml-0 flex">
                <div className="translate-x-8">
                  <Image
                    width={100}
                    height={100}
                    alt=""
                    placeholder="empty"
                    className="-rotate-12 animate-transitions"
                    src="/images/aws-certified-solutions-architect-associate.webp"
                  />
                </div>
                <Image
                  width={100}
                  height={100}
                  alt=""
                  placeholder="empty"
                  className="transform -translate-y-6 animate-transitions"
                  src="/images/AWS-Certified-Machine-Learning-Specialty_badge.e5d66b56552bbf046f905bacaecef6dad0ae7180 (1).png"
                />
                <div className="-translate-x-8">
                  <Image
                    width={100}
                    height={100}
                    alt=""
                    placeholder="empty"
                    className="rotate-12 animate-transitions"
                    src="/images/AWS-Certified-Data-Analytics-Specialty_badge.c74203ecf6d7c4889d01d8b4ba5c9df6e69c6f43.png"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </Content>


        <Content className="bg-[#1f1f1f]  border-gray-800 md:p-6 rounded-xl">
          <Carousel centerMode={false} showThumbs={false} showStatus={false} swipeable showArrows={false} autoPlay className="p-6">
            {new Array(2).fill(null).map((_, index) => {
              return <div key={index} className="text-left text-gray-200">
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="flex w-fit gap-2">
                      <img alt="cite" className="w-6 h-6" src={"/images/icons/citat-icon-67.svg"} />
                      <img alt="cite" className="w-6 h-6" src={"/images/icons/citat-icon-67.svg"} />
                    </div>
                  </div>
                  <cite className="text-2xl md:text-4xl not-italic">
                    They truly showed us how we can use public cloud to reduce time-to-market as we develop our digital portfolio
                  </cite>
                  <div className="flex justify-between text-gray-200">
                    <div>
                      <p className="font-extrabold">Karl Ingestam</p>
                      <p>CTO @ Purply</p>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </Carousel>

        </Content>

        <Content className="mt-24 md:mt-40 relative">
          <div className="absolute z-0 right-32 top-8 md:hidden">
            <TransitionSquares></TransitionSquares>
          </div>

          <div className="w-full relative text-gray-200 flex-col gap-6 md:flex-row flex ">
            <div className="md:w-3/5 flex-grow">
              <h2 className="mb-3 text-3xl md:text-4xl">

                <span>
                  Bygg med senaste teknologin med våra certifierade AWS konsulter i Stockholm
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-200">Genom våra certifierade och erfarna konsulter erbjuder vi högkvalitativa tjänster och lösningar. Oavsett om det handlar om att flytta till molnet eller optimera befintlig molninfrastruktur är </p>
              <div className="w-fit">
                <Button type="primary" className="mt-6">Läs mer om oss</Button>
              </div>
            </div>
            <div className="md:w-2/5 flex-grow-0 relative">
              <div className="absolute inset-0 flex items-center">
                <Image alt="" className="w-full h-full object-contain" src="/images/Frame 2 (32).png" width={1024} height={1024} />
              </div>
            </div>
          </div>


        </Content >

        <Content className="mt-24 md:mt-40 rounded-xl bg-[#1f1f1f] p-8">

          <div>
            <div>
              <div className="w-full flex">
                <div className="w-full">
                  <h2 className="mb-3 border-b text-xl py-4 border-gray-700">
                    Upptäck 30+ framgångsberättelser från våra kunder.
                  </h2>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-2 mt-4 divide-gray-800 divide-2">
                {new Array(3).fill(null).map((_, index) => {
                  return <div className="md:w-1/3 md:first:pl-0 md:px-6 md:last:pr-0" key={index}>
                    <div className="flex justify-between">
                      <div className="mb-2">
                        <p className="text-2xl md:text-4xl mb-2">Saluto</p>
                        <div className="text-xl flex gap-1">
                          <WordCircled borderCircle>Hälsa</WordCircled>
                          <WordCircled borderCircle>GDRP</WordCircled>
                          <WordCircled borderCircle>GDRP</WordCircled>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg md:text-2xl">Saluto är en medtech startup. Altostruct samarbetade med Saluto för att bygga en app som ger användarna möjlighet att både ge och få information om deras nuvarande hälsotillstånd.
                    </p>
                  </div>
                })}
              </div>
            </div>
          </div >
        </Content >



        <Content className="relative mt-24 md:mt-40">
          <div className="absolute top-0 z-0 -translate-x-full right-32 md:hidden">
            <TransitionSquares></TransitionSquares>
          </div>
          <div className="w-full relative flex-col-reverse gap-6 md:flex-row flex ">
            <div className="md:w-3/5 flex-grow">
              <h2 className="mb-3 text-3xl md:text-4xl">
                Bygg med senaste teknologin med våra certifierade AWS konsulter i Stockholm
              </h2>
              <p className="text-xl text-gray-200">Genom våra certifierade och erfarna konsulter erbjuder vi högkvalitativa tjänster och lösningar. Oavsett om det handlar om att flytta till molnet eller optimera befintlig molninfrastruktur är</p>
              <div className="w-fit">
                <Button type="primary" className="mt-6">Läs mer om oss</Button>
              </div>
            </div>
            <div className="w-full md:w-2/5 flex-grow-0 relative">
              <div className="absolute inset-0 flex overflow-hidden items-center">
                <Image alt="" className="w-full h-full object-contain" src="/images/pixels.png" width={1024} height={1024} />
              </div>
            </div>
          </div>
        </Content >

        <Content className="text-xl mt-24 md:mt-40 relative flex gap-6 flex-col" >
          <BorderedPanel label="OSS / 01.">
            <p className="md:text-4xl">
              <span className="text-white">
                {t(
                  "Altostruct är Test  sd sdf sdf asd asd asd asd asd asd ett konsultbolag specialiserade inom AWS. asd asdAltostruct är ett konsultbolag specialiserade inom AWS. Altostruct är ett konsultbolag specialiserade inom AWS. Altostruct är ett konsultbolag specialiserade inom AWS."
                )}
              </span>
              <span className="text-gray-400">
                {t(" Vårt team av AWS konsulter är certifierade via AWS och erbjuder ett stort utbud av " + "tjänster som exempelvis molnmigrationer, " + "AI, serverless och APIer."
                )}
              </span>
            </p>
          </BorderedPanel>

        </Content >

        <Content className="mt-40">
          <Form></Form>
        </Content>
      </div >
      <Footer />

    </>
  );
}
