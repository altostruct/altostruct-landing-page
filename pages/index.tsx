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

export default function Home() {
  const { t } = useTranslation();
  const bgLight = twconfig.theme.light;

  const projects = [
    {
      link: "https://www.nrlyze.se/",
      img: (
        <img
          alt="Customer Nrlyze"
          className="max-h-56"
          src="/images/customers/nrlyze.png"
        ></img>
      ),
      title: "Nrlyze har skapat ett AI system ",
      description: t(
        "av trådlösa sensorer som kan optimera parametrar gällande värmesystem i byggnader. Altostruct hjälpte Nrlyze bygga en portal som presenterar datan i grafer för att ge dem en överblick över värmesystemet."
      ),
    },
    {
      link: "https://www.saluto.ai/",
      img: (
        <div className="flex">
          <img
            alt="Customer Saluto"
            className="max-h-56"
            src="https://www.saluto.ai/static/first_step_swe-a528fa16687553e6a9f564e91f85e007.png"
          ></img>
          <img
            alt="Customer Saluto"
            className="max-h-56"
            src="https://www.saluto.ai/static/second_step_swe-d932bfc8c9f2053cec9867008120c07c.png"
          ></img>
          <img
            alt="Customer Saluto"
            className="max-h-56"
            src="https://www.saluto.ai/static/second_step_swe-d932bfc8c9f2053cec9867008120c07c.png"
          ></img>
        </div>
      ),
      title: "Saluto är en medtech startup",
      description: t(
        " med målet att hjälpa sina kunder nå ett friskare liv. Altostruct hjälpte till att bygga en app som tillåter användarna att både ge och få information om deras nuvarande hälsa."
      ),
    },
    {
      link: "https://tendium.ai/se/",
      img: (
        <img
          alt="Customer Tendium"
          className="max-h-56"
          src="https://tendium.ai/wp-content/uploads/2022/04/img-landing-hero-1.jpeg.webp"
        ></img>
      ),
      title: "Tendium är en webbapplikation ",
      description: t(
        "tillåter kunder att enkelt följa, hitta och ansöka till offentliga upphandlingar. Altostruct la grunden för infrastrukturen till deras microservice arkitektur."
      ),
    },
    {
      link: "https://www.foodfacts.se/",
      img: (
        <img
          alt="Customer Foodfacts"
          className="max-h-56"
          src="/images/customers/foodfacts.png"
        ></img>
      ),
      title: "Foodfacts hjälper dig göra medvetna val gällande mat.",
      description: t(
        " Altostruct ledde utvecklingen av en mobilapplikation i samarbete med ett offshoreteam. Applikationen är byggd på AWS med React Native."
      ),
    },
  ];

  return (
    <>
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>
      <div className="bg-[#161616] pb-20">
        <Content>
          <PageStart
            description={
              <>
                {t(
                  "Konsultbolaget med expertis inom AWS som hjälper er ta ert företag till nya höjder."
                )}
              </>
            }
            title={
              <>
                Bygg snabbare, stabilare och säkrare med{" "}
                <WordCircled borderCircle={true}>
                  Amazon Web Services
                </WordCircled>
              </>
            }
          ></PageStart>
        </Content>
        <StaticSidebar></StaticSidebar>

        <div className={bgLight}>
          <TransitionSquares></TransitionSquares>

          <div className="grid grid-cols-12 md:pb-32 pb-40  md:pt-32 pt-60 text-white">
            <div
              className="md:col-start-4 text-xl md:col-span-6 col-start-2 col-span-10 mt-4 text-center"
              style={{ textAlignLast: "center" }}
            >
              <h1 className="text-2xl md:text-4xl uppercase text-gray-300 mb-4 md:mb-4">
                {t("Vad är Altostruct?")}
              </h1>
              <p
                className="md:text-3xl text-xl"
                style={{ fontFamily: "KHTeka-Light" }}
              >
                {t(
                  "Altostruct är ett Stockholm baserat konsultbolag med certifierade AWS experter. Vi hjälper dig bygga skalbara lösningar med det senaste inom cloud."
                )}
              </p>
              <Button link="/contact" className="mt-10">
                {t("Kontakta oss")}
              </Button>
            </div>
          </div>

          {/*THIS IS THE SECTION FOR THE THREE DIFFERENT PACKAGES THAT SHOULD BE IMPLEMENTED AFTER THEY ARE COMPLETED*/}

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
          <div className="mt-48 ">
            <pre>KUNDER / 01.</pre>

            <div className="mb-12 mt-2 grid md:text-left text-center grid-cols-4 gap-8">
              {projects.map((project, index) => {
                const isBig = index % 3 == 0;
                return (
                  <a
                    key={index}
                    href={project.link}
                    className={classNames(
                      "p-3 border-2 border-[#292929] flex col-span-5 overflow-hidden sm:grid-cols-2  transition-all transition-all",
                      {
                        "lg:col-span-4": isBig,
                        "lg:col-span-2": !isBig,
                      }
                    )}
                  >
                    <div
                      className={classNames("grid grid-cols-1", {
                        "md:grid-cols-1": !isBig,
                        "md:grid-cols-2": isBig,
                      })}
                    >
                      <div className="col-span-1 flex flex-col p-12 justify-center">
                        <div>
                          <p className="text-2xl">
                            <span className="text-white">{project.title}</span>
                            <span className="text-gray-400">
                              {project.description}
                            </span>
                          </p>
                        </div>
                        <div className="mt-4">
                          <a className="text-white text-4xl">
                            <WordCircled>Read more</WordCircled>
                          </a>
                        </div>
                      </div>
                      <div
                        className={classNames(
                          "col-span-1 justify-center flex-row flex"
                        )}
                      >
                        <div className="m-auto md:scale-150 md:translate-x-1/4 translate-y-1/4 rounded-md overflow-hidden">
                          {project.img}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </Content>

        <Recommendations></Recommendations>

        <Images></Images>

        <div className="hidden md:grid grid-cols-1 mt-5 place-items-end pb-40 text-[#c3eec3]">
          <div className="flex text-2xl mr-5">
            <Link className="flex text-[#c3eec3]" href={"/about"}>
              <p>{t("Människorna bakom Altostruct")}</p>
              <img className="w-10 ml-5" src="/images/icons/Icon-59.svg"></img>
            </Link>
          </div>
        </div>
        <div id="kontakt">
          <Content>
            <Form></Form>
          </Content>
        </div>
      </div>
      <Footer />
    </>
  );
}
