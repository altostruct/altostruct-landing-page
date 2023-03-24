import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import React, { Suspense } from "react";
import Content from "@components/Content";
import CardStack from "@components/CardStack";
import Button from "@components/Button/Button";
import Cite from "@components/Cite";
import useTranslation from "hooks/useTranslation";
import NoSSR from "@components/NoSSR";
import SEO from "@components/SEO";
import Image from "next/image";
import WordCircled from "components/Word-Circled/Word";
import Package from "components/AWS-Packages/Packege"

function Articles() {
  const { t } = useTranslation();

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
          <p className="pt-20 md:pt-48 mt-9 text-3xl md:text-6xl text-left md:w-3/4">Lorem <WordCircled>Lorem</WordCircled> dolor sit amet adipisicing elit lorem <WordCircled>Lorem</WordCircled> dolor sit amet <WordCircled>Lorem</WordCircled></p>
          <p className="mt-5 mb-72 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit/consectetur adipisicing elit.</p>
          <div className="rotate-90 text-white text-xs origin-top-right flex absolute md:bottom-80 bottom-72 right-5">
            <img src="/images/icons/arrow-icon.svg" width="20" decoding="async" loading="lazy"></img>
            <p className="pl-2 text-right">Är du vår nästa kollega?</p>
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
                Lediga tjänster
              </h2>
              <div className="col-start-1 text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
            </div>
              <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:gap-4 place-items-center mt-36 w-11/12 m-auto">
                <div>
                <Package
                  title="AWS Package 2"
                  children="This is a description"
                  iconPath="/images/icons/arrow-icon.svg"
                  ></Package>
                </div>
                <div>
                <Package
                  title="AWS Package 3"
                  children="This is a description"
                  iconPath="/images/icons/arrow-icon.svg"
                  ></Package>
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

    </div>
    <Footer />
  </>
  );
}

export default Articles;
