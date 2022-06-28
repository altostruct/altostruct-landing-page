import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import React from "react";
import useTranslation from "../../hooks/useTranslation";

import BasePage from "../../templates/_generic/BasePage";

function Index() {
  const { t } = useTranslation();
  return (
    <>
      <Topbar pathName=""></Topbar>
      <BasePage
        mainCategory={t("WEB")}
        techonology={t("REACT")}
        image={<p>asd</p>}
        inDepthDescription={t(
          "Ända sedan dag ett har vi jobbat med webben. Först och främst inom React och Typescript. " +
            "Genom att använda den senaste teknologin och ramverk kan framtidssäkrar vi din produkt på " +
            "ett effektivt sett. "
        )}
        title="REACT"
        titleDescription="REACT + ALTO = <3"
      ></BasePage>
      <Footer />
    </>
  );
}

export default Index;
