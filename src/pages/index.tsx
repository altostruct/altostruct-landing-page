import Button from "@components/Button/Button";
import CityHead from "@components/CityHead";
import Content from "@components/Content";
import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import SEO from "@components/SEO/SEO";
import Topbar from "@components/Topbar/Topbar";
import classNames from "classnames";
import React from "react";
import { withLanguage } from "../contexts/LanguageContext";
import { Cite } from "../templates/_generic/BasePage";
import useTranslation from "../hooks/useTranslation";

function Page() {
  const { t } = useTranslation();
  const projects = [
    {
      img: (
        <img
          alt="Customer Foodfacts"
          className="max-h-56"
          src="/images/customers/foodfacts.png"
        ></img>
      ),
      title: "Foodfacts",
      description: t(
        "Modern och skalbar applikation redo för framtiden. Altostruct ledde utvecklingen i samarbete med ett offshoreteam. Applikationen är byggd i AWS med React Native."
      ),
    },
    {
      img: (
        <img
          alt="Customer Saluto"
          className="max-h-56"
          src="/images/customers/saluto.png"
        ></img>
      ),
      title: "Saluto",
      description: t(
        "En Medtech startup med målet att hjälpa sina kunder nå ett friskare liv. Altostruct hjälpte bygga en app som tillåter användarna att både ge och få information om deras nuvarande hälsa."
      ),
    },
    {
      img: null,
      title: "Tendium",
      description: t(
        "Hemsida som tillåter kunder att enkelt följa, hitta och ansöka till offentliga upphandlingar. Altostruct hjälpte lägga grunden till infrastruktur till deras microservice arkitektur."
      ),
    },
    {
      img: (
        <img
          alt="Customer Nrlyze"
          className="max-h-56"
          src="/images/customers/nrlyze.png"
        ></img>
      ),
      title: "Nrlyze",
      description: t(
        "Nrlyze har skapat ett system av trådlösa sensorer som kan optimera parametrar gällande värmesystem i byggnader. Altostruct hjälpte Nrlyze bygga en portal som tillåter de överse byggnaderna och få sin data presenterad i grafer."
      ),
    },
  ];
  const colors = ["green", "blue", "purple", "red"];

  return (
    <>
      <SEO
        title={"AWS consultants in Stockholm"}
        description="Senior AWS consultants located in Sweden"
        lang="en"
      />
      <SEO
        title="AWS konsulter i Stockholm"
        description="Seniora AWS konsulter i Sverige"
        lang="swe"
      />

      <Topbar pathName=""></Topbar>
      <div>
        <CityHead />
        <Content>
          <div className="mb-6 mt-24 items-center md:text-left text-center flex">
            <div className="flex-1">
              <p className="text-orange-300 text-xl md:text-2xl ">
                {t("Vad kan vi erbjuda dig?")}
              </p>
              <h2 className="font-bold text-4xl md:text-7xl mt-3">
                {t("Certifierade AWS specialister")}
              </h2>
              <p className="mt-3 text-lg">
                {t(
                  'Altostruct är en konsultbolag specialiserat inom AWS placerat i Stockholm. Vårt team av AWS konsulter är certifierade och har arbetat med allting ifrån "cloud migrations", AI, serverless och APIer. ' +
                    "Nedan kan du se några projekt gjort på cloud"
                )}
              </p>
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
                      "Vi har samarbetat med Altostruct i två år. De har hjälp oss med allting ifrån " +
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
      <Footer />
    </>
  );
}

export default withLanguage(Page);
