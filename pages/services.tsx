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
import styles from "./services/services.module.scss";
import TextWithCheckMark from "@components/services/TextWithCheckmark";


export default function Home() {
  const { t } = useTranslation();
  const bgLight = twconfig.theme.light;

  return (
    <>
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>
      <div className="bg-[#161616] pt-36 pb-20">
        <Content>
          <h1 className={classNames(styles["subTitle"], "ml-8")}>{t("Våra tjänster")}</h1>
          <div className="flex" style={{marginBottom: "80px"}}>
            <div style={{flex: "0.5"}}>
              <div className="flex" style={{marginBottom: "40px"}} >
                <img alt="cite" className="w-14 ml-1" src="/images/icons/citat-icon-67.svg" />
                <img alt="cite" className="w-14 ml-1" src="/images/icons/citat-icon-67.svg" />
              </div>  
              <p className="font-light text-lg md:text-2xl ml-8">
                {`
                Vi erbjuder konsulttjänster, alltifrån AI strategier på AWS till optimering av er AWS infrastruktur.
                Vi hjälper er realisera era ambitioner genom att sänka era kostnader samt maximera er infrastrukturs skalbarhet och prestanda.
                `}
              </p>
            </div>
          </div>
          <div className="flex" >
            <div style={{flex: 1}}/>
            <Link href={"#ai"}>
              <button className={classNames(styles["navButton"], "md:text-2 xl rounded-md")}>{t("AWS AI Strategi")}</button>
            </Link>
            <div style={{flex: 1, maxWidth: "80px"}}/>
            <Link href={"#optimization"}>
              <button className={classNames(styles["navButton"], "md:text-2 xl rounded-md")}>{t("AWS Optimering")}</button>
            </Link>
            <div style={{flex: 1}}/>
          </div>
        </Content>

        <Content className="mt-48">
          <div id="ai" style={{width: "100%", height: "1px"}} />
          <h2 className={classNames(styles["subTitle"], "ml-8", "mt-16")}>{t("AWS AI Strategi")}</h2>
          <div className="flex" style={{marginBottom: "40px"}}>
            <div style={{flex: "0.5"}}>
              <p className="font-light text-lg md:text-2xl ml-8">
                {`
                Ett AI projekt börjar med bra data. Vi skapar de bästa förutsättningarna för ditt företag att lyckas.
                `}
              </p>
            </div>
            <div id="image" style={{flex: "0.5"}} ></div>
          </div>
          <div className="ml-8">
          <TextWithCheckMark />

          </div>
        </Content>

        
      </div>

      <Footer></Footer>
    </>
  );
}
