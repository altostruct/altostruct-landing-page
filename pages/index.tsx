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

export default function Home() {
    const { t } = useTranslation();
    const [visiblePackage, setVisiblePackage] = useState(0);
    const [visibleCitation, setVisibleCitation] = useState(0);

    const refPackage1 = useRef<HTMLDivElement>(null);
    const refPackage2 = useRef<HTMLDivElement>(null);
    const refPackage3 = useRef<HTMLDivElement>(null);
    const refCite1 = useRef<HTMLDivElement>(null);
    const refCite2 = useRef<HTMLDivElement>(null);
    const bgDark = twconfig.theme.dark;
    const bgLight = twconfig.theme.light;

    return (
        <>
            <SEO
                title={t("Altostruct | Cloud Consulting")}
                description={t(
                    "Altostruct är ett AWS konsultbolag i Stockholm."
                )}
            ></SEO>
            <Topbar></Topbar>
            <div className="bg-[#161616] pb-20">
                <Content>
                    <PageStart
                        description={t(
                            "Konsultbolaget med expertis inom AWS och molnet som hjälper er ta ert företag till nya höjder!"
                        )}
                        title={
                            <span className="text-3xl md:text-6xl text-left md:w-3/4">
                                It's always{" "}
                                <WordCircled borderCircle={true}>
                                    Sunny
                                </WordCircled>{" "}
                                when you are in the{" "}
                                <WordCircled>Cloud</WordCircled>
                            </span>
                        }
                    ></PageStart>
                </Content>
                <StaticSidebar></StaticSidebar>

                <div className={bgLight}>
                    <TransitionSquares></TransitionSquares>

                    <div className="grid grid-cols-12 pb-72 md:pt-96 pt-60 text-white">
                        <div className="md:col-start-4 text-xl md:col-span-6 col-start-2 col-span-10 mt-4 text-center">
                            <h1 className="text-2xl uppercase text-gray-300 mb-2">
                                {t("Vad är Altostruct?")}
                            </h1>
                            <p
                                className="md:text-3xl"
                                style={{ fontFamily: "KHTeka-Light" }}
                            >
                                {t(
                                    "Altostruct är ett konsultbolag specialiserade" +
                                        " inom AWS. Vårt team av "
                                )}{" "}
                                <i>
                                    <u>AWS konsulter är certifierade</u>
                                </i>
                                {t(
                                    " via AWS och erbjuder ett stort utbud av tjänster som" +
                                        " exempelvis molnmigrationer, AI, serverless och APIer." +
                                        " Altostruct grundades 2020 och hjälpt ett stort antal företag företag nå sin fulla potential med hjälp av molnet."
                                )}
                            </p>
                        </div>
                    </div>

                    {/* <div className="grid grid-cols-1 md:pt-20 pt-10 pb-60 w-11/12 md:w-11/12 m-auto text-white">
            <div className="col-start-1 text-2xl mb-2 uppercase">
              {t("Våra startpaket")}
            </div>
            <div className="col-start-1 text-md mb-10">
              {" "}
              {t(
                "Vi har brutit ner hela molnresan i tre paketerade tjänster för att göra det enklare för som kund att förbättra era nuvarande system"
              )}
            </div>

            <div
              className="flex overflow-x-auto md:grid md:grid-cols-3 md:gap-4 place-items-center snap-x snap-proximity"
              onScroll={(e) => {
                const test = refPackage3.current?.getBoundingClientRect().x;
                if (test != undefined) {
                  if (test < 300) {
                    setVisiblePackage(2);
                  }
                  if (test > 300 && test < 600) {
                    setVisiblePackage(1);
                  }
                  if (test > 600 && test < 900) {
                    setVisiblePackage(0);
                  }
                }
              }}
            >
              <div ref={refPackage1} className="snap-center">
                <Link href="/cloudshift">
                  <Package
                    title="Cloudshift"
                    description={t(
                      "Vi hjälper er flytta ett nytt eller befintligt system till AWS så ni slipper de dyra kostnaderna som kommer med att ha ett eget datacenter"
                    )}
                    iconPath="/images/icons/Icon-49.svg"
                  ></Package>
                </Link>
              </div>
              <div ref={refPackage2} className="snap-center">
                <Link href="/nebula">
                  <Package
                    title="Nebula"
                    description={t(
                      "Vi analyserar er AWS-miljö ytligt genom att titta på och utvärdera vilka kostnader och avtal som går att kostnadsoptimera direkt utan att förändra den underliggande arkitekturen"
                    )}
                    iconPath="/images/icons/Icon-50.svg"
                  ></Package>
                </Link>
              </div>
              <div ref={refPackage3} className="snap-center">
                <Link href="/atmosphere">
                  <Package
                    title="Atmosphere"
                    description={t(
                      "Vi ser till att säkra hela er AWS miljö så att den uppfyller alla de kraven på sekretess, intigritet och tillgänglighet som er organisation och bransch kan tänkas ha"
                    )}
                    iconPath="/images/icons/Icon-58.svg"
                  ></Package>
                </Link>
              </div>
            </div>

            <div className="flex md:hidden justify-center">
              <div
                onClick={() => {
                  refPackage1.current?.scrollIntoView({
                    block: "nearest",
                    behavior: "smooth",
                  });
                  setVisiblePackage(0);
                }}
                className="flex-none pr-2 snap-center"
              >
                <div
                  className={`h-3 w-3 ${
                    visiblePackage === 0 ? "bg-green-300" : "bg-white"
                  }`}
                ></div>
              </div>

              <div
                onClick={() => {
                  refPackage2.current?.scrollIntoView({
                    block: "nearest",
                    behavior: "smooth",
                  });
                  setVisiblePackage(1);
                }}
                className="flex-none pr-2 snap-center"
              >
                <div
                  className={`h-3 w-3 ${
                    visiblePackage === 1 ? "bg-green-300" : "bg-white"
                  }`}
                ></div>
              </div>

              <div
                onClick={() => {
                  refPackage3.current?.scrollIntoView({
                    block: "nearest",
                    behavior: "smooth",
                  });
                  setVisiblePackage(2);
                }}
                className="flex-none pr-2 snap-center"
              >
                <div
                  className={`h-3 w-3 ${
                    visiblePackage === 2 ? "bg-green-300" : "bg-white"
                  }`}
                ></div>
              </div>
            </div>
          </div>*/}
                </div>

                <div className="absolute left-full -translate-x-full opacity-100">
                    <div className="flex place-content-end bg-[#292929]">
                        <div className="md:w-28 md:h-28 h-14 w-14 "></div>
                    </div>
                </div>

                <Content>
                    <div className="md:mt-52 mt-32 mb-40">
                        <div className="md:hidden relative text-white mb-10">
                            <h3>{t("Rekommendationer")}</h3>
                            <p style={{ fontFamily: "KHTeka-Light" }}>
                                {t(
                                    "Läs vad några av våra grymma kunder har att säga!"
                                )}
                            </p>
                        </div>
                        <div
                            className="flex overflow-x-auto md:grid md:grid-cols-3 md:gap-4 text-white snap-x snap-mandatory"
                            onScroll={(e) => {
                                const citescroll =
                                    refCite2.current?.getBoundingClientRect().x;
                                if (citescroll != undefined) {
                                    if (citescroll < 250) {
                                        setVisibleCitation(1);
                                    }
                                    if (citescroll > 250 && citescroll < 600) {
                                        setVisibleCitation(0);
                                    }
                                }
                            }}
                        >
                            <div className="hidden md:block relative pb-[5%]">
                                <div className="flex opacity-0">
                                    <img
                                        className="w-10 ml-1"
                                        src={"/images/icons/citat-icon-67.svg"}
                                    />
                                    <img
                                        className="w-10 ml-1"
                                        src={"/images/icons/citat-icon-67.svg"}
                                    />
                                </div>
                                <h3 className="mt-10">
                                    {t("Rekommendationer")}
                                </h3>
                                <p>
                                    {t(
                                        "Läs vad några av våra grymma kunder har att säga!"
                                    )}
                                </p>
                            </div>
                            <div ref={refCite1} className="snap-start mr-4">
                                <Cite
                                    author="Peter Vesterberg, CEO Saluto AB"
                                    cite={t(
                                        "Med hjälp av Altostruct har vi kunnat utveckla vår lösning med hjälp av en svensk molnleverantör som har en hög grad av säkerhet, tillförlitlighet och regelefterlevnad."
                                    )}
                                    citeIcon="/images/icons/citat-icon-67.svg"
                                ></Cite>
                            </div>
                            <div ref={refCite2} className="snap-start">
                                <Cite
                                    author="Erik Strandin Pers, Founder Foodfacts"
                                    cite={t(
                                        "Vi har samarbetat med Altostruct i tre år. De har hjälpt oss med allting från infrastruktur till apputveckling för att bygga en skalbar och modern lösning."
                                    )}
                                    citeIcon="/images/icons/citat-icon-67.svg"
                                ></Cite>
                            </div>
                        </div>
                        <div className="flex md:hidden justify-center">
                            <div
                                onClick={() => {
                                    refCite1.current?.scrollIntoView({
                                        block: "nearest",
                                        behavior: "smooth",
                                    });
                                    setVisibleCitation(0);
                                }}
                                className="flex-none pr-2 snap-center"
                            >
                                <div
                                    className={`h-3 w-3 ${
                                        visibleCitation === 0
                                            ? "bg-green-300"
                                            : "bg-white"
                                    }`}
                                ></div>
                            </div>

                            <div
                                onClick={() => {
                                    refCite2.current?.scrollIntoView({
                                        block: "nearest",
                                        behavior: "smooth",
                                    });
                                    setVisibleCitation(1);
                                }}
                                className="flex-none pr-2 snap-center"
                            >
                                <div
                                    className={`h-3 w-3 ${
                                        visibleCitation === 1
                                            ? "bg-green-300"
                                            : "bg-white"
                                    }`}
                                ></div>
                            </div>
                        </div>
                    </div>
                </Content>

                <div className="md:hidden flex-wrap pb-20">
                    <div className="flex w-screen place-content-between">
                        <img
                            className="w-1/4"
                            src="/images/MISC/Altostruct_office-3.jpg"
                            alt=""
                        />
                        <img
                            className="w-1/4 mr-[25%]"
                            src="/images/MISC/Altostruct_office-15.jpg"
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
                            src="/images/MISC/Altostruct_office-12.jpg"
                            alt=""
                        />
                        <img
                            className="w-1/4 mr-[25%]"
                            src="/images/MISC/Altostruct_office-38.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex w-screen">
                        <img
                            className="w-1/4 mr-auto ml-auto"
                            src="/images/MISC/Altostruct_office-29.jpg"
                            alt=""
                        />
                        <img
                            className="w-1/4"
                            src="/images/MISC/Altostruct_office-23.jpg"
                            alt=""
                        />
                    </div>
                    <div className="grid grid-cols-1 mt-5 place-items-end text-[#c3eec3]">
                        <a className="flex text-[#c3eec3]" href="/about">
                            <p>{t("Människorna bakom Altostruct")}</p>
                            <img
                                className="w-6 ml-2 pt-[1%]"
                                src="/images/icons/Icon-59.svg"
                            ></img>
                        </a>
                    </div>
                </div>

                <div className="hidden mt-72 md:flex overflow-x-hidden">
                    <img
                        className="h-[300px] mr-4"
                        src="/images/MISC/Altostruct_office-3.jpg"
                        alt=""
                    />
                    <img
                        className="h-[150px]"
                        src="/images/MISC/Altostruct_office-15.jpg"
                        alt=""
                    />
                    <img
                        className="h-[150px] mr-4 mt-[150px]"
                        src="/images/MISC/Altostruct_office-18.jpg"
                        alt=""
                    />
                    <img
                        className="h-[300px] mr-4"
                        src="/images/MISC/Altostruct_office-39.jpg"
                        alt=""
                    />
                    <img
                        className="h-[150px] mt-[150px]"
                        src="/images/MISC/Altostruct_office-12.jpg"
                        alt=""
                    />
                    <img
                        className="h-[150px] mr-4"
                        src="/images/MISC/Altostruct_office-38.jpg"
                        alt=""
                    />
                    <img
                        className="h-[300px] mr-4"
                        src="/images/MISC/Altostruct_office-29.jpg"
                        alt=""
                    />
                    <img
                        className="h-[150px]"
                        src="/images/MISC/Altostruct_office-23.jpg"
                        alt=""
                    />
                    <img
                        className="h-[150px] mr-4 mt-[150px]"
                        src="/images/MISC/Altostruct_office-18.jpg"
                        alt=""
                    />
                    <img
                        className="h-[300px] mr-4"
                        src="/images/MISC/Altostruct_office-30.jpg"
                        alt=""
                    />
                </div>
                <div className="hidden md:grid grid-cols-1 mt-5 place-items-end pb-40 text-[#c3eec3]">
                    <div className="flex text-2xl mr-5">
                        <a className="flex text-[#c3eec3]" href="/about">
                            <p>{t("Människorna bakom Altostruct")}</p>
                            <img
                                className="w-10 ml-2"
                                src="/images/icons/Icon-59.svg"
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
