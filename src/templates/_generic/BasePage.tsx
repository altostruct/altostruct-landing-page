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
import { graphql, useStaticQuery } from "gatsby";

interface DefaultPageProps {
  title: string;
  titleDescription: string;
  inDepthDescription: string;
  image: ReactNode;
  mainCategory: string;
  techonology: string;
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
        <h3>"{cite}"</h3>
      </Fade>
      <p>{author}</p>
    </div>
  );
}

const Cube = React.lazy(() => import("@components/City"));

function DefaultPage(props: DefaultPageProps) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/light-canvas.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 3080, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { t } = useTranslation();
  const {
    title,
    mainCategory,
    techonology,
    titleDescription,
    inDepthDescription,
    image,
  } = props;
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
            <Suspense fallback={""}>
              <Cube />
            </Suspense>
          )}
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <h1 className="md:text-8xl text-center text-6xl uppercase">
          <span className="text-xl md:text-3xl font-light">
            {t("KONSULTER I STOCKHOLM INOM")}
          </span>

          <div className="flex">
            <span className="text-black flex m-auto gap-2">
              <span>{mainCategory}</span>
              <span> / </span>
              <span className="overflow-hidden border-solid">
                <Slide left>{techonology}</Slide>
              </span>
            </span>
          </div>
        </h1>
        <p className="text-black text-center py-2 text-lg md:text-xl">
          {t(
            "Altostruct är en konsultfirma som arbetar primärt med molntjänster och web teknologier."
          )}
          <br></br>
        </p>
        <div className="flex pt-2">
          <div className="flex m-auto gap-2">
            <Button link="#info" className="p-20 ">
              {t("Läs mer")}
            </Button>
            {/* <Button type="secondary">{t("Om oss")}</Button> */}
          </div>
        </div>
      </div>

      {/* <div className={style.content}> */}
      <div
        style={{ backgroundColor: "white", zIndex: 1, position: "relative" }}
      >
        <Section dark position="center">
          <div id="info">
            <div>
              <Fade>
                <h2 className="text-6xl">{titleDescription}</h2>
              </Fade>
              <p className="py-10">{inDepthDescription}</p>
              <div className="flex align-middle flex-col">
                <CardGrid
                  animatedOnView
                  cols={2}
                  grid={[
                    {
                      title: "Foodfacts",
                      description: "",
                      backgroundColor: "#ffffff",
                      image: <img src={foodfactsImage} />,
                    },

                    {
                      title: "Nrlyze",
                      description: "",
                      image: <img src={nrlyzeImage} />,
                      backgroundColor: "#ffffff",
                    },
                  ]}
                ></CardGrid>
                <div className="py-5 mb-36">
                  <Button>{t("See more projects")}</Button>
                </div>
              </div>
            </div>
          </div>

          <p>Vad säger våra kunder?</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "3em" }}>
            <Cite
              cite={
                "Med hjälp av Altostruct har vi kunnat utveckla vår lösning baserat på en" +
                " svensk molnleverantör med hög grad av säkerhet, tillförlitlighet och regelefterlydnad."
              }
              author={t("Peter Vesterberg - Founder Foodfacts")}
            ></Cite>
            <Cite
              cite={
                "Vi har samarbetat med Altostruct i två år. De har hjälp oss med allting ifrån" +
                "infrastruktur till apputveckling för att bygga en skalbar och modern lösning."
              }
              author={t("Erik Standin Pers - Founder Foodfacts")}
            ></Cite>
          </div>
        </Section>

        <Section position="full">
          <Fade>
            <h3 className="shiny" style={{ textAlign: "center" }}>
              {t("Nyheter ifrån oss")}
            </h3>
          </Fade>
          <div className="mb-36">
            <Carousel></Carousel>
          </div>
          <Form />
        </Section>
      </div>
      {/* </div> */}
    </div>
  );
}

export default DefaultPage;
