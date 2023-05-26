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
import BookMeeting from "./BookMeeting";

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
      title: "Nrlyze har utvecklat ett AI-system ",
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
      title: "Saluto är en medtech startup.",
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
      title: "Tendium är en webbapplikation ",
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
          <div className="relative">
            <PageStart
              description={
                <>
                  {t(
                    "Vi erbjuder molnlösningar som tar ert bolag till nya höjder."
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
            ></PageStart>{" "}
            <div className="absolute w-full bottom-12  md:right-0 flex">
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
            </div>
          </div>
        </Content>

        <StaticSidebar></StaticSidebar>

        <div className={bgLight}>
          <TransitionSquares></TransitionSquares>

          <div className="grid grid-cols-12 md:pb-32 pb-40  md:pt-32 pt-60 text-white">
            <div
              className="md:col-start-4 text-xl md:col-span-6 col-start-2 col-span-10 mt-4 text-center"
              style={{ textAlignLast: "center" }}
            >
              <div className="flex items-center justify-center gap-2 mb-4 md:mb-4">
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
              <p className=" font-light">
                {t(
                  "Vi på Altostruct älskar molnet och tror starkt på dess förmåga att förvandla" +
                    " företag och driva innovation." +
                    " Genom våra certifierade och erfarna konsulter erbjuder vi högkvalitativa tjänster" +
                    " och lösningar till våra kunder. Oavsett om det handlar om att flytta" +
                    " till molnet, optimera befintlig molninfrastruktur eller skapa anpassade" +
                    " molnbaserade lösningar, är vi engagerade i att hjälpa våra kunder att navigera" +
                    " genom molnets komplexiteter."
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

        <div className="absolute left-full -translate-x-full opacity-100">
          <div className="flex place-content-end bg-[#292929]">
            <div className="md:w-28 md:h-28 h-14 w-14 "></div>
          </div>
        </div>

        <Content>
          <div className="mt-48 ">
            <pre>{t("KUNDER / 01.")}</pre>
            <h1 className="mb-16">{t("Några av våra kunder och projekt ")}</h1>

            <div className="mb-12 mt-2 grid md:text-left text-center grid-cols-4 gap-8">
              {projects.map((project, index) => {
                const isBig = index % 3 == 0;
                return (
                  <div
                    key={index}
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
                          <p className="text-lg md:text-2xl">
                            <span className="text-white">{project.title}</span>
                            <span className="text-gray-400">
                              {project.description}
                            </span>
                          </p>
                        </div>
                        <div className="mt-4">
                          <a
                            href={project.link}
                            className="text-white text-4xl"
                          >
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
                  </div>
                );
              })}
            </div>
          </div>
        </Content>

        <Recommendations></Recommendations>
        <div className="mb-32"></div>
        <Images></Images>

        <div className="hidden md:grid grid-cols-1 mt-5 place-items-end pb-40 text-[#c3eec3]">
          <div className="flex text-2xl mr-5">
            <Link className="flex text-[#c3eec3]" href={"/about"}>
              <p>{t("Människorna bakom Altostruct")}</p>
              {/* <img className="w-10 ml-5" src="/images/icons/Icon-59.svg"></img> */}
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
