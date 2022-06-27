import Button from "@components/Button/Button";
import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import React, { ReactNode, Suspense, useState } from "react";

import Img from "gatsby-image";
import HouseBackground from "@components/HouseBackground";
import ThreeImages from "@components/ThreeImages";
import Section from "@components/Section";
import House from "./assets/newHouse.svg";
import foodfactsImage from "../../images/foodfacts.png";
import nrlyzeImage from "../../images/nrlyze.png";
import bintessLogo from "../../images/Bintess_logo.webp";
import CardGrid from "@components/CardGrids";
import StrokedSvg from "@components/StrokedSvg";
import TextAnimation from "@components/TextAnimation/TextAnimation";
import Carousel from "@components/Carousel/Carousel";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import useTranslation from "../../hooks/useTranslation";

interface DefaultPageProps {
  title: string;
  titleDescription: string;
  inDepthDescription: string;
  image: ReactNode;
}

interface CiteProps {
  cite: string;
  author: string;
}

function Cite(props: CiteProps) {
  const { author, cite } = props;
  return (
    <div>
      <Fade>
        <h1>"{cite}"</h1>
      </Fade>
      <pre>{author}</pre>
    </div>
  );
}

const Cube = React.lazy(() => import("@components/Cube"));

function DefaultPage(props: DefaultPageProps) {
  const { t } = useTranslation();
  const { title, titleDescription, inDepthDescription, image } = props;
  const isSSR = typeof globalThis.window === "undefined";

  return (
    <div>
      <div
        className="h-screen"
        style={{
          height: "140vh",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100vw",
            zIndex: 0,
            height: "140vh",
          }}
        >
          {!isSSR && (
            <Suspense fallback="">
              <Cube />
            </Suspense>
          )}
        </div>
      </div>

      <div className=" absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <h1 className="md:text-8xl text-center text-5xl uppercase">
          <span className="text-3xl font-light">
            {t("KONSULTER I STOCKHOLM INOM")}
            <br></br>
          </span>

          <div className="flex">
            <span className="text-black flex m-auto gap-2">
              <span>CLOUD</span>
              <span> / </span>
              <span className="overflow-hidden border-solid">
                <Slide left>{"AWS"}</Slide>
              </span>
            </span>
          </div>
        </h1>
        <p className="text-black text-center py-2 text-xl">
          {t(
            "Altostruct är en konsultfirma som arbetar primärt med molntjänster och web teknologier."
          )}
          <br></br>
        </p>
        <div className="flex pt-2">
          <div className="flex m-auto gap-2">
            <Button className="p-20 ">{t("Läs mer")}</Button>
            {/* <Button type="secondary">{t("Om oss")}</Button> */}
          </div>
        </div>
      </div>

      {/* <div className={style.content}> */}
      <div
        style={{ backgroundColor: "white", zIndex: 1, position: "relative" }}
      >
        <Section position="center">
          <p>Vad säger våra kunder?</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "3em" }}>
            <Cite
              cite="Altostruct ger oss möjligheten att bygga våran platform snabbare"
              author="Peter Vesterberg"
            ></Cite>
            <Cite
              cite="Altostruct ger oss möjligheten att bygga våran platform snabbare"
              author="Peter Vesterberg"
            ></Cite>
            <Cite
              cite="Altostruct ger oss möjligheten att bygga våran platform snabbare"
              author="Peter Vesterberg"
            ></Cite>
          </div>
        </Section>
        <Section
          dark
          style={{
            minHeight: "160vh",
          }}
          position="center"
          backgroundImage={
            <StrokedSvg>
              <House></House>
            </StrokedSvg>
          }
        >
          <div>
            <div>
              <Fade>
                <h2 className="text-6xl">{titleDescription}</h2>
              </Fade>
              <p className="py-10">{inDepthDescription}</p>
              <div className="flex align-middle flex-col">
                <CardGrid
                  animatedOnView
                  grid={[
                    {
                      title: "Foodfacts",
                      description: "",
                      backgroundColor: "#08011e",
                      image: <img src={foodfactsImage} />,
                    },
                    {
                      title: "Bintess",
                      description: "",
                      backgroundColor: "#08011e",
                      image: <img src={bintessLogo}></img>,
                    },
                    {
                      title: "Nrlyze",
                      description: "",
                      image: <img src={nrlyzeImage} />,
                      backgroundColor: "#08011e",
                    },
                  ]}
                ></CardGrid>
                <div className="py-5">
                  <Button>{t("See more projects")}</Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section backgroundImage={<img />} position="full">
          <Fade>
            <pre className="shiny" style={{ textAlign: "center" }}>
              Nyheter ifrån oss
            </pre>
          </Fade>
          <Carousel></Carousel>
        </Section>
        <Section dark position="full">
          <Form />
        </Section>
      </div>
      {/* </div> */}
    </div>
  );
}

export default DefaultPage;
