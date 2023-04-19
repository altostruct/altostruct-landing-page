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
import StaticSidebar from "@components/StaticSidebar";
import Projects from "@components/Projects";

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
      <StaticSidebar></StaticSidebar>
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>
      <div className={bgDark}>
        <Content>
          <PageStart
            description={t(
              "Konsultbolaget med expertis inom AWS och molnet som hjälper er ta ert företag till nya höjder!"
            )}
            title={
              <p className="text-3xl md:text-6xl text-left md:w-3/4">
                {"It's always "}
                <WordCircled borderCircle={true} color="">
                  {" "}
                  Sunny{" "}
                </WordCircled>{" "}
                when you are in the <WordCircled>Cloud</WordCircled>
              </p>
            }
          ></PageStart>
          {/* <div className="mb-6 items-center md:text-left text-center text-white md:w-3/4">
            <p className="mt-5 mb-72 text-left">
              {t(
                "Konsultbolaget med expertis inom AWS och molnet som hjälper er ta ert företag till nya höjder!"
              )}
            </p>
            <div className="rotate-90 text-white text-xs origin-top-right flex absolute md:bottom-80 bottom-72 right-5">
              <img
                src="/images/icons/arrow-icon.svg"
                width="20"
                decoding="async"
                loading="lazy"
              ></img>
              <a href={"/career"}>
                <p className="pl-2 text-right text-white">
                  {t("Är du vår nästa kollega?")}
                </p>
              </a>
            </div>
          </div> */}
        </Content>

        <div className={bgDark}>
          <TransitionSquares></TransitionSquares>
          {/* <div className="flex justify-items-center pt-32">
            <img
              className="m-auto place-content-center w-48 mb-3"
              src="/images/icons/Icon-51.svg"
            ></img>
          </div> */}

          <div className="grid grid-cols-12 pt-32 pb-32 text-white">
            <div className="md:col-start-4 text-xl md:col-span-6 col-start-2 col-span-10 mt-4 text-center">
              <h2 className="text-lg uppercase text-gray-300 mb-2">
                {t("Vad är Altostruct?")}
              </h2>
              <p className="text-3xl">
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
        </div>
        <Projects></Projects>

        <Content>
          <div className="grid grid-cols-3 mt-36 text-white">
            <div className="w-4/5">
              <h3 className="uppercase">{t("Rekommendationer")}</h3>
              <p>{t("Om oss / rekomendationer")}</p>
            </div>

            <div>
              <Cite
                author="Peter Vesterberg, CEO Saluto AB"
                cite={t(
                  "Med hjälp av Altostruct har vi kunnat utveckla vår lösning med hjälp av en svensk molnleverantör som har en hög grad av säkerhet, tillförlitlighet och regelefterlevnad."
                )}
                citeIcon="/images/icons/citat-icon-67.svg"
              ></Cite>
            </div>
            <div>
              <Cite
                author="Erik Strandin Pers, Founder Foodfacts"
                cite={t(
                  "Vi har samarbetat med Altostruct i tre år. De har hjälpt oss med allting från infrastruktur till apputveckling för att bygga en skalbar och modern lösning."
                )}
                citeIcon="/images/icons/citat-icon-67.svg"
              ></Cite>
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
            <Link className="flex text-[#c3eec3]" href="/about">
              <p>{t("Människorna bakom Altostruct")}</p>
              <img
                className="w-6 ml-2 pt-[1%]"
                src="/images/icons/Icon-59.svg"
              ></img>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex mt-96 text-white place-content-end">
          {/* <p className="text-xs">psst, scroll to the right</p> */}
          <img
            className="w-4 pt-[0.1%] ml-2"
            src="/images/icons/Icon-42.svg"
          ></img>
        </div>
        <div className="hidden md:flex overflow-x-hidden">
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
            <Link className="flex text-[#c3eec3]" href="/about">
              <p>{t("Människorna bakom Altostruct")}</p>
              <img className="w-10 ml-2" src="/images/icons/Icon-59.svg"></img>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
