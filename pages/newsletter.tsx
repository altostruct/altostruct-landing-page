/* eslint-disable @next/next/no-img-element */
import SEO from "@components/SEO";
import Content from "components/Content";
import Footer from "components/Footer/Footer";
import Topbar from "components/Topbar/Topbar";
import useTranslation from "hooks/useTranslation";
import WordCircled from "components/Word-Circled/Word";
import React, { useState } from "react";
import twconfig from "tailwind.config";
import Newsletter from "@components/Newsletter";
import Formshort from "@components/Form-short";

export default function Home() {
  const { t } = useTranslation();
  const bgLight = twconfig.theme.light;

  return (
    <>
      <SEO
        title={t("Altostruct | AWS Services & Support")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>

      <div className="bg-[#161616] md:pt-[10%] pt-32 pb-20 h-screen">
        <Content>
          <p className="md:text-3xl text-xl">Tack för intresset om vårt nyhetsbrev, vi kommer med jämna mellanrum skicka en massa nyhetsbrev gällande en massa spännande ny teknologi. Vi kommer även dela en massa råd från våra AWS experter så tveka inte att prenumera!</p>
          <Newsletter></Newsletter>
        </Content>
      </div>

      <Footer></Footer>
    </>
  );
}
