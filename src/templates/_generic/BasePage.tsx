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

interface DefaultPageProps {
  title: string;
  titleDescription: string;
  inDepthDescription: string;
  image: ReactNode;
  mainCategory: string;
  techonology: string;

  //
  h1?: ReactNode;
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
    h1 = <>Certifierade solution architects</>,
    projects = [
      {
        img: <img src="/images/customers/foodfacts.png"></img>,
        title: "Foodfacts",
        description:
          "Modern och skalbar app redo för framtiden. I sammarbete med ett offshore team ledde Altostruct utvecklingen. Byggd på AWS med React Native",
      },
      {
        img: <img src="/images/customers/saluto.png"></img>,
        title: "Saluto",
        description:
          "En Medtech startup med målet att hjälpa sina kunder nå ett friskare liv. Altostruct hjälpte bygga en webbapplikation som läkarna kan använda som supportverktyg vid beslutsfattning.",
      },
      {
        img: <img src=""></img>,
        title: "Tendium",
        description:
          "Modern och skalbar app redo för framtiden. I sammarbete med ett offshore team ledde Altostruct utvecklingen. Byggd på AWS med React Native",
      },
      {
        img: <img src="/images/customers/nrlyze.png"></img>,
        title: "Nrlyze",
        description:
          "Nrlyze har skapat ett system av trådlösa sensorer som kan optimera parametrar gällande värmesystem i byggnader. Altostruct hjälpte Nrlyze bygga en portal som tillåter dem att överse byggnaderna och få sin data presenterad i grafer.",
      },
    ],
    techonology,
    titleDescription,
    inDepthDescription,
    image,
  } = props;
  const isSSR = typeof globalThis.window === "undefined";

  const colors = ["green", "blue", "purple", "red"];
  return (
    <div>
      <CityHead {...props} />
      <Content>
        <div className="mb-12 mt-12 items-baseline flex">
          <div className="flex-1">
            <p className="text-orange-300 text-xl">Vad kan vi erbjuda dig?</p>
            <h2 className="font-light text-6xl">{h1}</h2>
            <p className="mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>

          {/* <div className="h-48 flex-0">
            <SmallCity></SmallCity>
          </div> */}
        </div>

        <div className="mb-12 grid grid-cols-5 gap-4">
          {projects.map((project, index) => {
            const isBig = index % 3;
            return (
              <div
                className={classNames(
                  "p-10 flex rounded-md",
                  {
                    "col-span-2": isBig,
                    "col-span-3": !isBig,
                  },
                  "bg-gradient-" + colors[index % colors.length]
                )}
              >
                <div className="m-auto flex gap-3">
                  <div className="m-auto text-white flex-1">
                    <h3 className="font-bold">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className={classNames("flex-0 h-56 max-w-sm")}>
                    {project.img}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-dark-dotted mb-24 rounded-3xl">
          <div className="text-white p-10 py-32 grid grid-cols-2 gap-12">
            <div className="flex">
              <div className="m-auto">
                <h1 className="text-6xl font-bold mb-4">
                  Lyssna vad våra{" "}
                  <i className="text-green-500">grymma kunder </i>
                  har att säga
                </h1>
                <p className="text-xs mb-4">
                  {t(
                    "* Många fler citat ifrån kunder till men det är för mycket att läsa. Vi är allvarliga," +
                      " 100% av våra tidigare kunder skulle rekomendera oss."
                  )}
                </p>
                <Button>Bli vår nästa kund</Button>
              </div>
            </div>
            <div className="flex">
              <div className="m-auto flex gap-12 flex-col">
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
              </div>
            </div>
          </div>
        </div>
        <Form></Form>
      </Content>
    </div>
  );
}

export default DefaultPage;
