import Button from "@components/Button/Button";
import Form from "@components/Form";
import React, { ReactNode, Suspense, useState } from "react";

import Img from "gatsby-image";
import Section from "@components/Section";
import foodfactsImage from "../../images/foodfacts.png";
import nrlyzeImage from "../../images/nrlyze.png";
import CardGrid from "@components/CardGrids";
import City from "@components/City";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import useTranslation from "../../hooks/useTranslation";
import { graphql, useStaticQuery } from "gatsby";
import CityHead from "@components/CityHead";

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
      <Fade>
        <div className="mt-1">
          <cite>{author}</cite>
        </div>
      </Fade>
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

      cloud: file(relativePath: { eq: "images/backgrounds/cloud-app.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 600, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { t, languagePrefix } = useTranslation();
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
      <CityHead {...props} />

      {/* <div className={style.content}> */}
      <div
        style={{ backgroundColor: "white", zIndex: 1, position: "relative" }}
      >
        <Section
          bottomImage={
            <Img
              fixed={data.cloud.childImageSharp.fixed}
              imgStyle={{
                objectFit: "contain",
              }}
            ></Img>
          }
          position="center"
        >
          <div id="info">
            <div>
              <Fade>
                <p className="text-3xl mb-3 text-orange-400">
                  {t("Vad kan vi erbjuda dig?")}
                </p>
                <h1 className="text-6xl font-semibold">{titleDescription}</h1>
              </Fade>
              <Fade>
                <p className="py-10 text-lg">{inDepthDescription}</p>
              </Fade>
            </div>
          </div>
        </Section>

        <Section position="full">
          <div className="text-center w-10/12 m-auto">
            <Fade>
              <h1 className="text-6xl md:text-8xl max-w-4xl m-auto font-semibold">
                {t("Några project ")}
                <i className="text-blue-400">{t("som vi ")}</i>
                {t("har gjort ")}
              </h1>
            </Fade>
          </div>
          <div className="p-0 md:p-32 pt-20">
            <CardGrid
              animatedOnView
              cols={2}
              grid={[
                {
                  title: t("Mobilapp med cloud"),
                  description: t(
                    "Modern och skalbar app redo för framtiden. I sammarbete med ett offshore team ledde Altostruct utvecklingen. Byggd på AWS med React Native."
                  ),
                  link: "https://www.foodfacts.se/",
                  image: <img src={foodfactsImage} />,
                },
                {
                  title: "Datadriven platform",
                  description: t(
                    "Hemsida byggd med REST och Cloud. Design och utveckling gjordes hos oss. Byggd med React, AWS och Linode."
                  ),
                  link: "https://www.foodfacts.se/",
                  image: <img src={nrlyzeImage} />,
                },
                {
                  title: "SAAS på cloud",
                  description: t(
                    "Bigdata scraping sedan NLP integration. En helhetslösning på AWS med skalbarhet i tanke."
                  ),
                  link: "https://www.foodfacts.se/",
                  image: <img src={nrlyzeImage} />,
                },
                {
                  title: "Hälsoapp med GDPR",
                  description: t(
                    "Vi utvärderade olika svenska molnleverantörer för att bygga en GPDR säkrad cross-cloud lösning. Sedan byggde API och app"
                  ),
                  link: "https://www.saluto.se/",
                  image: <img src={nrlyzeImage} />,
                },
              ]}
            ></CardGrid>
          </div>
        </Section>

        <Section dark position="center">
          <div>
            <Fade>
              <h1 className="text-6xl font-bold mb-10">
                {t("Lyssna vad våra ")}
                <i className="text-green-500">{t("grymma kunder ")}</i>
                {t("har att säga")}
              </h1>
            </Fade>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "3em" }}
            >
              <Cite
                cite={
                  "Med hjälp av Altostruct har vi kunnat utveckla vår lösning baserat på en" +
                  " svensk molnleverantör med hög grad av säkerhet, tillförlitlighet och regelefterlydnad."
                }
                author={t("Peter Vesterberg - CEO Saluto AB")}
              ></Cite>
              <Cite
                cite={
                  "Vi har samarbetat med Altostruct i två år. De har hjälp oss med allting ifrån" +
                  "infrastruktur till apputveckling för att bygga en skalbar och modern lösning."
                }
                author={t("Erik Standin Pers - Founder Foodfacts")}
              ></Cite>
              <p className="text-xs">
                {t(
                  "* Många fler citat ifrån kunder till men det är för mycket att läsa. Vi är allvarliga," +
                    " 100% av våra tidigare kunder skulle rekomendera oss."
                )}
              </p>
              <div className="py-5">
                <Button link="#contact">{t("Bli vår nästa nöjda kund")}</Button>
              </div>
            </div>
          </div>
        </Section>

        <div id="contact">
          <Section position="full">
            {/* <Fade>
            <h3 style={{ textAlign: "center" }}>{t("Nyheter ifrån oss")}</h3>
            </Fade>
            <div className="mb-36">
            <Carousel></Carousel>
          </div> */}
            <div className="p-4 md:p-32">
              <Form />
            </div>
          </Section>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default DefaultPage;
