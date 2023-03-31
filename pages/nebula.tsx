import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
import WordCircled from "components/Word-Circled/Word";
import Package from "@components/Package/Packege"
import { useRef } from "react";
import React, { useState } from 'react'

function Carrer() {
  const { t } = useTranslation();

  
  return (
    <>
    <SEO
      title={t("Altostruct | Cloud Consulting")}
      description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
    ></SEO>
    <Topbar></Topbar>



    <div className="bg-[#161616] md:pb-20 pb-10">

      <div className="grid grid-cols-1 pt-52 text-center text-white">
        <h1>Nebula package</h1>
      </div>
      <div className="grid grid-cols-12 md:pb-60 text-white">
                <div className="md:col-start-4 md:col-span-6 col-start-2 col-span-10 mt-4 text-center"> 
                <h3>{t("Vi analyserar er AWS-miljö ytligt genom att titta på och utvärdera vilka kostnader och avtal som går att kostnadsoptimera direkt utan att förändra den underliggande arkitekturen. Vi utför även en mer grundlig analys och presenterar ett lösningsförslag som innebär större design-förändringar som bidrar till ännu lägre kostnader och ökad prestanda.")}</h3>
                </div>
      </div>

      <div className="grid grid-cols-12 md:pb-52 pb-24 text-white">
          <div className="md:col-start-4 md:col-span-6 col-start-2 col-span-10 mt-4 text-center"> 
                <h2>{t("Hör av dig så hjälper vi dig!")}</h2>
          </div>
      </div>
          <Content>
           <Form></Form>
          </Content>
    </div>
    <Footer />
  </>
  );
}

export default Carrer;
