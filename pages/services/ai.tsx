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
import Brand from "@components/Brand/Brand";
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
                  Machine learning på<br></br>
                  <WordCircled borderCircle>
                    Amazon Web Services
                  </WordCircled>
                </>
              }
              description={<p>Vi hjälper er utveckla en skräddarsydd AI datastrategi som lägger grunden för ert AI initiativ, vilket skapar förutsättningarna för er data att bli en källa för industriledande insikter och företagsvärde.</p>}
              mainContent={<Image alt="" className="w-full h-full object-contain" src="/chat-pixels.png" width={10} height={10} />}
              cta={<div className="flex gap-2">
                <Button link="/contact">{t("Boka konsultation")}</Button>
                <Button type="secondary" link="/asd">{t("Boka konsultation")}</Button>
              </div>}
            />

          </div>
        </Content>

        <Content className="bg-[#1f1f1f] mt-40 border border-gray-800 p-12 rounded-xl">
          <div className="w-full flex-col gap-6 md:flex-row flex ">
            <div className="md:w-3/5 flex-grow">
              <h2 className="mb-3 text-5xl">
                Ett AI projekt börjar med bra data.
              </h2>
              <p className="text-2xl text-gray-200">Väl hanterad data är ett måste för ett lyckat AI projekt. Tillsammans med er tar vi fram en skräddarsydd strategi för alla steg av datahantering på AWS. Vi hjälper er samla in, lagra och strukturera er data så att ni kan utvinna insikter och maximalt värde från den.</p>
            </div>
            <div className="md:w-2/5 flex-grow-0 relative">
              <div className="absolute inset-0 flex overflow-hidden items-center">
                <Image alt="" className="w-full h-full object-contain" src="/images/icons/Frame 1 (90).png" width={10} height={10} />
              </div>
            </div>
          </div>
        </Content >

        <Content className="pt-40">
          <div className="hidden md:block">
            {/* <TransitionSquares></TransitionSquares> */}
          </div>

          <div className="w-full flex-col gap-6 md:flex-row flex ">
            <div className="md:w-3/5 flex-grow">
              <h2 className="mb-3 text-5xl">
                Varför använda AI?
                <Image className="w-16 inline-block mx-3" width={100} height={100} alt="" src="/images/icons/light-cloud.svg" />
              </h2>
              <p className="text-2xl text-gray-200">I dagens samhälle utvecklar och integrerar många företag AI system och applikationer som kräver stora mängder data. Givet att AI är ett av de mest dynamiska och komplexa fälten i vår tid är kraven på datahantering för att allt ska flyta på smidigt därmed enormt höga. <br></br><br></br>Se dock inte dessa höga krav som avskräckande, utan se dem som en möjlighet att tillsammans med specialiserade konsulter inom AWS utveckla AI datalösningar som garanterar att ni håller er konkurrenskraftiga och branschledande.</p>
              <Button type="primary" className="mt-6">Läs mer om oss</Button>
            </div>
            <div className="md:w-2/5 flex-grow-0 relative">
              <div className="absolute inset-0 flex overflow-hidden items-center">
                <Image alt="" className="w-full h-full object-contain" src="/images/pixels.png" width={10} height={10} />
              </div>
            </div>
          </div>
        </Content >


        <Content className="pt-40">
          <div className="w-full flex-col gap-12 md:flex-row flex ">
            <div className="flex-grow">
              <h2 className="mb-12 text-5xl">
                Varför alto/s?
              </h2>
              {/* <p className="pb-6">
                I dagens samhälle utvecklar och integrerar många företag AI system och applikationer som kräver stora mängder data. Givet att AI är ett av de mest dynamiska och komplexa fälten i vår tid är kraven på datahantering för att allt ska flyta på smidigt därmed enormt höga.
              </p> */}
              <div className="flex flex-col gap-8">
                <BorderedPanel label="01">
                  <p className="md:text-4xl">Enkel ock effektiv </p>
                </BorderedPanel>

                <BorderedPanel label="01">
                  <p className="md:text-4xl">Enkel ock effektiv </p>
                </BorderedPanel>

                <BorderedPanel label="01">
                  <p className="md:text-4xl">Enkel ock effektiv </p>
                </BorderedPanel>
              </div>


              {/* <p className="text-2xl text-gray-200">I dagens samhälle utvecklar och integrerar många företag AI system och applikationer som kräver stora mängder data. Givet att AI är ett av de mest dynamiska och komplexa fälten i vår tid är kraven på datahantering för att allt ska flyta på smidigt därmed enormt höga. Se dock inte dessa höga krav som avskräckande, utan se dem som en möjlighet att tillsammans med specialiserade konsulter inom AWS utveckla AI datalösningar som garanterar att ni håller er konkurrenskraftiga och branschledande.</p> */}

            </div>

          </div>
        </Content >

        <Content className="bg-[#1f1f1f] mt-40 border-gray-800 p-6 rounded-xl">
          <Carousel centerMode={false} showThumbs={false} showStatus={false} swipeable showArrows={false} autoPlay className="p-6">
            {new Array(2).fill(null).map((_, index) => {
              return <div key={index} className="text-left ">
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








        <Content className="mt-40">
          <Form></Form>
        </Content>
      </div >
      <Footer />

    </>
  );
}
