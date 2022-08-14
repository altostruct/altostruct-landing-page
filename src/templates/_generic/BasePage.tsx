import Button from "@components/Button/Button";
import Form from "@components/Form";
import React, { ReactNode, Suspense, useState } from "react";

import Img from "gatsby-image";
import Section from "@components/Section";
import foodfactsImage from "../../images/foodfacts.png";
import nrlyzeImage from "../../images/nrlyze.png";
import CardGrid from "@components/CardGrids";
import City from "@components/3d/City";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import useTranslation from "../../hooks/useTranslation";
import { graphql, useStaticQuery } from "gatsby";
import CityHead from "@components/CityHead";
import Content from "@components/Content";
import classNames from "classnames";
import SmallCity from "@components/3d/SmallCity";
import Certification from "@components/Certification";

interface DefaultPageProps {
  title: string;
  titleDescription: string;
  image: ReactNode;
  mainCategory: string;
  techonology: string;

  certificate?: boolean;
  //
  h1: ReactNode;
  h2: ReactNode;
  projects?: ProjectProps[];
}

interface ProjectProps {
  title: string;
  description: string;
  img: ReactNode;
}
interface CiteProps {
  cite: string;
  author: string;
}

export function Cite(props: CiteProps) {
  const { author, cite } = props;
  return (
    <div>
      <Fade>
        <h3 className="text-lg md:text-2xl">"{cite}"</h3>
      </Fade>
      <Fade>
        <div className="mt-1">
          <cite>{author}</cite>
        </div>
      </Fade>
    </div>
  );
}

const Cube = React.lazy(() => import("@components/3d/City"));

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

      saluto: file(relativePath: { eq: "images/customers/saluto.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 38, quality: 100) {
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
    h1,
    h2,
    projects = [],
    certificate = true,
  } = props;
  const isSSR = typeof globalThis.window === "undefined";

  const colors = ["green", "blue", "purple", "red"];
  return (
    <div>
      <CityHead {...props} />
      {certificate && (
        <div className="absolute right-32 bottom-12">
          <Certification></Certification>
        </div>
      )}
      <Content>
        <div className="mb-6 mt-24 items-center md:text-left text-center flex">
          <div className="flex-1">
            <p className="text-orange-300 text-xl md:text-2xl ">
              {t("Vad kan vi erbjuda dig?")}
            </p>
            <h2 className="font-bold text-4xl md:text-7xl mt-3">{h1}</h2>
            <p className="mt-3 text-lg">{h2}</p>
          </div>
        </div>

        <div className="mb-12 grid md:text-left text-center grid-cols-5 gap-4">
          {projects.map((project, index) => {
            const isBig = index % 3;
            return (
              <div
                className={classNames(
                  "p-10 flex rounded-md col-span-5 ",
                  {
                    "lg:col-span-2": isBig,
                    "lg:col-span-3": !isBig,
                  },
                  "bg-gradient-" + colors[index % colors.length]
                )}
              >
                <div className="m-auto flex-col md:flex-row flex gap-3">
                  <div className="m-auto text-white flex-1">
                    <h3 className="font-bold">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className={classNames("flex-1 m-auto h-56 max-w-sm")}>
                    {project.img}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-dark-dotted mt-24 rounded-3xl">
          <div className="text-white p-10 py-32 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="m-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {t("Lyssna vad våra ")}
                  <i className="text-green-500">{t("grymma kunder ")}</i>
                  {t("har att säga")}
                </h1>
                <Button>{t("Bli vår nästa kund")}</Button>
              </div>
            </div>
            <div className="flex ">
              <div className="m-auto flex gap-12 flex-col">
                <Cite
                  cite={t(
                    "Med hjälp av Altostruct har vi kunnat utveckla vår lösning baserat på en" +
                      " svensk molnleverantör med hög grad av säkerhet, tillförlitlighet och regelefterlevnad."
                  )}
                  author={t("Peter Vesterberg - CEO Saluto AB")}
                ></Cite>
                <Cite
                  cite={t(
                    "Vi har samarbetat med Altostruct i två år. De har hjälp oss med allting ifrån" +
                      "infrastruktur till apputveckling för att bygga en skalbar och modern lösning."
                  )}
                  author={t("Erik Standin Pers - Founder Foodfacts")}
                ></Cite>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20" id="contact">
          <Form></Form>
        </div>
      </Content>
    </div>
  );
}

export default DefaultPage;
