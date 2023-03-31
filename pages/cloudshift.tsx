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
        <h1>Cloudshift package</h1>
      </div>
      <div className="grid grid-cols-12 md:pb-60 text-white">
              <div className="md:col-start-4 md:col-span-6 col-start-2 col-span-10 mt-4 text-center"> 
                <h3>{t("Vi hjälper er flytta ett nytt eller befintligt system till AWS så ni slipper de dyra kostnaderna som kommer med att ha ett eget datacenter. Vare sig det gäller en applikation som ni precis har tagit fram eller om ni har ett eget datacenter sedan långt tillbaka. Vidare så hjälper vi er också ifall ni redan har en molnleverantör men är intresserade av att byta till AWS.")}</h3>
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
