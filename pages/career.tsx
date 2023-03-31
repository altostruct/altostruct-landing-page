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
import Link from "next/link";


function Carrer() {
  const { t } = useTranslation();
  const refPackage1 = useRef<HTMLDivElement>(null);
  const refPackage2 = useRef<HTMLDivElement>(null);
  const [visiblePackage, setVisiblePackage] = useState(0);

  
  return (
    <>
    <SEO
      title={t("Altostruct | Cloud Consulting")}
      description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
    ></SEO>
    <Topbar></Topbar>
    <div className="bg-[#161616] md:pb-20 pb-10">
      <Content>
        <div className="mb-6 items-center md:text-left text-center text-white md:w-3/4">
          <p className="pt-20 md:pt-48 mt-9 text-3xl md:text-6xl text-left md:w-3/4">{t("Jobba med banbrytande")} <WordCircled borderCircle={true}>{t("teknologi")}</WordCircled> {t("tillsammans med de främsta inom ")} <WordCircled>{t("AWS och molnet")}</WordCircled></p>
          <p className="mt-5 mb-72 text-left"></p>
          <div className="rotate-90 text-white text-xs origin-top-right flex absolute md:bottom-80 bottom-72 right-5">
          <img src="/images/icons/arrow-icon.svg" width="20" decoding="async" loading="lazy"></img>
              <a href={"/career"}> 
              <p className="pl-2 text-right text-white">{t("Är du vår nästa kollega?")}</p>
              </a>
          </div>
        </div>
        </Content>

        <div className="items-center text-white bg-[#292929]">
            <div className="flex place-content-end">
              <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
              </div>
            </div>
            <div className="flex place-content-end md:pr-28 pr-14">
              <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
              </div>
            </div>
            <div className="flex place-content-end">
              <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
              </div>
            </div>
            <div className="place-content-center text-center">
              <h2 className="font-bold">
                {t("Lediga tjänster")}
              </h2>
              <div className="col-start-1 text-xl">{t("Just nu söker vi dig som är")}</div>
            </div>
              <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:gap-4 place-items-center mt-36 w-11/12 m-auto" 
              onScroll={(e) => 
                {
                  const test = refPackage2.current?.getBoundingClientRect().x
                  if(test != undefined ){
                    if(test < 300){
                      setVisiblePackage(1);
                    }
                    if(test > 300 && test < 600){
                      setVisiblePackage(0);
                    }
                  }
                }}
              >
                <div ref={refPackage1}>
                <Link href="/jobopportunity">
                <Package
                  title="Software Developer"
                  iconPath="/images/icons/Icon-51.svg"
                  ></Package>
                  </Link>
                </div>
                <div ref={refPackage2}>
                <Link href="/jobopportunity">
                  <Package
                  title="Senior Software Developer"
                  iconPath="/images/icons/Icon-54.svg"
                  ></Package>
                  </Link>
                </div>
               
              </div>

              <div className="flex md:hidden justify-center">
                    <div onClick={() => 
                    {
                      refPackage1.current?.scrollIntoView({block: "nearest", behavior:"smooth"})
                      setVisiblePackage(0);
                    }} 
                      className="flex-none pr-2 snap-center">
                      <div className={`h-3 w-3 ${visiblePackage === 0 ? "bg-green-300" : "bg-white"}`}>
                      </div>
                    </div>

                    <div onClick={() => {
                      refPackage2.current?.scrollIntoView({block: "nearest", behavior:"smooth"})
                      setVisiblePackage(1);
                    }} 
                      className="flex-none pr-2 snap-center">
                      <div className={`h-3 w-3 ${visiblePackage === 1 ? "bg-green-300" : "bg-white"}`}>
                      </div>
                    </div>
                  
                </div>

              <div className="flex place-content-start md:pl-28 pl-14 md:pt-28 pt-16">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
              <div className="flex place-content-start">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
          </div>

          <Content>
            <div className="bg-[#161616] md:pt-72 pt-20 text-white">
              <h1>{t("Varför jobba hos Altostruct?")}</h1>
            </div>

            <div className="md:grid md:grid-cols-2 grid-cols-1 pb-40 place-items-center text-white"> 
              <div className="relative">
                <h2 className="relative pt-5 z-10">{t("Någon som älskar det de gör kommer alltid utföra sitt jobb bättre än någon som inte gör det. På grund av detta lägger vi stor vikt vid att para ihop rätt person med rätt projekt. Hos oss du mycket individuellt ansvar och självständighet men också mycket stöd för att säkerställa att du utvecklas, både som utvecklare och person. Vi erbjuder kontinuerlig utbildning och kompetensutveckling. Vi strävar efter att hela tiden utmana traditionella arbetssätt för att på bästa sätt främja vår vision och se till att våra kunder får ta del av allt molnet har att erbjuda.")}</h2>
                <div className="absolute top-10 left-96 md:w-40 md:h-40 rotate-45 bg-[#6024ff]"></div>
                <div className="absolute top-20 left-10 rotate-12 md:w-40 md:h-40 bg-[#6024ff]"></div>
             </div>

              <div className="mt-20">
                <div className="flex">
                <p className="mb-2 mr-auto">Kund Nöjdhet</p>
                <p className="place-content-end">Erik Rehn </p>
                </div>
                <hr />
                <p className="mt-2">{t("Vi tar hand om dig internt så du kan ta hand om våra kunder på bästa sätt")}</p>
              
              <div id="kontakt" className="flex text-2xl mr-5 justify-end md:mt-72 mt-12">
                <p>
                {t("Kontakta oss")}
                </p>
                <a href="#kontakt">
                  <img className="w-10 ml-2 rotate-90" src="/images/icons/arrow-icon.svg"></img>
                </a>
              </div>
              </div>
           </div>
           <Form></Form>
          </Content>
    </div>
    <Footer />
  </>
  );
}

export default Carrer;
