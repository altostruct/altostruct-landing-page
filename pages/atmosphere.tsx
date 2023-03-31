import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
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
        <h1>Atmosphere package</h1>
      </div>
      <div className="grid grid-cols-12 md:pb-60 text-white">
              <div className="md:col-start-4 md:col-span-6 col-start-2 col-span-10 mt-4 text-center"> 
                <h3>{t("Vi ser till att säkra hela er AWS miljö så att den uppfyller alla de kraven på sekretess, intigritet och tillgänglighet som er organisation och bransch kan tänkas ha. Vi använder oss av Virtual Private Cloud för att se till att kontrollera och begränsa externa anslutningar till er applikation. Målet här är att all er data ska säkras upp genom att installera virtuella “grindvakter“")}</h3>
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
