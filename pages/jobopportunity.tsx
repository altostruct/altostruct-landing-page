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

      <div className="grid grid-cols-1 pt-52 px-5 text-center text-white">
        <h1>{t("Tack för ditt intresse av att jobba och utvecklas med oss!")}</h1>
      </div>
      <div className="grid grid-cols-12 md:pb-60 text-white">
              <div className="md:col-start-4 md:col-span-6 col-start-2 col-span-10 mt-4 text-center"> 
                <h3>{t("Bifoga gärna ditt CV och personliga brev samt vilken position du söker så hör vi av oss!")}</h3>
              </div>
      </div>

      <div className="grid grid-cols-12 md:pb-52 pb-24 text-white">
          <div className="md:col-start-4 md:col-span-6 col-start-2 col-span-10 mt-4 text-center"> 
            <h2>
              <p>{t("Klicka mig för att skicka ett mail eller skicka det till:")}</p>
              <a className="text-[#c3eec3]" href="mailto:info@altostruct.se">info@altostruct.se</a>
           </h2>
          </div>
      </div>
    </div>
    <Footer />
  </>
  );
}

export default Carrer;
