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
import Quotes from "@components/Quotes";
import TextSection from "@components/TextSection";
import Card from "@components/Card";
const QUOTES = []

export default function Home() {
  const { t } = useTranslation();
  const bgLight = twconfig.theme.light;
  const quotes = require(".data/contentful/customerQuote/all.json")

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
        </Content>


        <Content className="mt-20">
          <Quotes data={quotes.map((item: any) => ({
            quote: item.fields.quote,
            author: item.fields.author,
            role: item.fields.authorsRole,
            company: {
              name: item.fields.customer.fields.name,
              url: item.fields.customer.fields.link,
            }
          }))}></Quotes>
        </Content>

        <Content className="mt-24 md:mt-40 relative">
          <TextSection title="Bygg med senaste teknologin med våra certifierade AWS konsulter i Stockholm" text={"Genom våra certifierade och erfarna konsulter erbjuder vi högkvalitativa tjänster och lösningar. Oavsett om det handlar om att flytta till molnet eller optimera befintlig molninfrastruktur är "}></TextSection>
        </Content >

        <Content className="mt-24">
          <Card title="Upptäck 30+ framgångsberättelser från våra kunder.">
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
          </Card>
        </Content >

        <Content className="relative mt-24 md:mt-40">
          <TextSection image="/images/pixels.png" title="Bygg med senaste teknologin med våra certifierade AWS konsulter i Stockholm" text={"Genom våra certifierade och erfarna konsulter erbjuder vi högkvalitativa tjänster och lösningar. Oavsett om det handlar om att flytta till molnet eller optimera befintlig molninfrastruktur är "}></TextSection>
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
