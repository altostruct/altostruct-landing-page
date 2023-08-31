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
import BigList from "@components/BigList";

import { getContentfulProducts, getReferenceCases, getReferenceCasesFromProducts } from "utils/contentful";
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
        </Content>

        <div>
          <Content className="my-20">
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
        </div>

        <Content>
          <div className="pt-20">

            <div className="flex gap-2 mb-4 md:mb-4">
              <h1 className="text-2xl md:text-4xl uppercase text-gray-300">
                {t("Vad är Altostruct?")}
              </h1>
              <Image
                width={50}
                height={50}
                alt=""
                src="/icons8-amazon-web-services.svg"
              ></Image>
            </div>
            <div className="font-light pb-5 text-2xl">
              Altostruct är erfarna molnkonsulter som hjälper företag att dra navigera genom molnteknologin. Vi stöttar med  <span className="text-[#c3eec3]">Migration</span>,  <span className="text-[#c3eec3]">Optimering</span> och  <span className="text-[#c3eec3]">Skräddarsyr</span> dina molnprojekt. Vi erbjuder kostnadsfri rådgivning för att navigera genom molnets komplexiteter på Amazon Web Services.
            </div>

            <Button className="group" icon={
              <div className="group-hover:translate-x-1 transition-all">
                <svg height={"1.2em"} id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                  <path
                    fill="#c3eec3"
                    d="m138.08,71.7v16.59h-16.59v16.59h-16.59v-16.59H21.92v-16.59h82.97v-16.59h16.59v16.59h16.59Zm-33.19-33.19v16.59h-16.59v-16.59h16.59Zm-16.59,66.37h16.59v16.59h-16.59v-16.59Z" />
                </svg>
              </div>
            }
              link="/contact">{t("Kontakta oss")}
            </Button>
          </div>
        </Content>

        <Content>
          <div className="pt-20 pb-10">
            <BigList
              items={[
                {
                  title: t("Optimering"),
                  description: t(
                    "Cloudtjänster tillåter livsmedelsföretag att enkelt öka eller minska IT-resurser baserat på efterfrågan."
                  ),
                  image: "/images/productivity-green.png",
                },
                {
                  title: t("Migration"),
                  description: t(
                    "AWS minskar behovet av dyra infrastrukturinvesteringar och erbjuder istället betalning baserad på faktisk användning."
                  ),
                  image: "/images/scale-green.png",
                },
                {
                  title: t("Skräddarsyr"),
                  description: t(
                    "Analysera i molnet av stora mängder data för att dra insikter som förbättrar försäljning och lagerhantering."
                  ),
                  image: "/images/analysis-green.png",
                },
              ]}
            ></BigList>
          </div>
        </Content>

        <Content className="md:mt-20 mt-40">
          <Card title={"Case Studies."}>
            <div className="flex flex-col md:h-96 md:flex-row gap-24 md:gap-3 mt-4 divide-gray-800 divide-2">
              {getReferenceCases().slice(0, 3).map((item: any, index: number) => {
                return <div className="md:w-1/3  text-gray-300 flex flex-col md:first:pl-0 md:px-6 md:last:pr-0" key={index}>
                  <div className="flex justify-between">
                    <div className="mb-3">
                      <p className="text-2xl md:text-3xl mb-3">{item.fields.title}</p>
                      <div className="text-xl flex gap-1">
                        {item.fields.tags?.slice(0, 5).map((tag: string, index: number) => {
                          return <WordCircled key={index} borderCircle>{tag}</WordCircled>
                        })}
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-ellipsis overflow-hidden flex-grow">{item.fields.shortDescription} </p>
                  <Button type="secondary" link={"/cases/" + item.fields.slug} className="mt-4 ml-auto align-bottom">Läs mer</Button>
                </div>
              })}
            </div>
          </Card>
        </Content >


        <Content className="mt-40">
          <Form></Form>
        </Content>
      </div >
      <Footer />

    </>
  );
}
