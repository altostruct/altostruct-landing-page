/* eslint-disable @next/next/no-img-element */
import SEO from "@components/SEO";
import Content from "components/Content";
import Footer from "components/Footer/Footer";
import Topbar from "components/Topbar/Topbar";
import useTranslation from "hooks/useTranslation";
import WordCircled from "components/Word-Circled/Word";
import React, { useState } from "react";
import twconfig from "tailwind.config";

import Formshort from "@components/Form-short";

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
      
      <div className="bg-[#161616] md:pt-36 pt-32 pb-20 h-screen">
        <Content>
          <div
            className="text-white mb-10"
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
          <Formshort></Formshort>
        </Content>
      </div>

      <Footer></Footer>
    </>
  );
}
