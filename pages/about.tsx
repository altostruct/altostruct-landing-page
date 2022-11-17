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

function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("Altostruct - Om oss")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>
      <Content>
        <div className="md:w-2/3  text-center m-auto mt-32 md:mt-48">
          <h1 className="text-6xl">
            {t("Varför ")}
            <span className="text-gradient-blue font-bold">
              {t("välja oss?")}
            </span>
          </h1>
          <p className="mt-6">
            {t(
              "En person som älskar det den gör kommer alltid utföra sina uppgifter " +
                "bättre och mer effektivt än någon som inte gör det, och för oss är " +
                "det av yttersta vikt att våra utvecklare är entusiastiska och hela " +
                "tiden strävar efter att utvecklas. För att säkerställa detta strävar " +
                "vi alltid efter att para ihop rätt person med rätt projekt. Detta " +
                "leder till att våra kunder får utvecklare som verkligen brinner för " +
                "sina projekt."
            )}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-16 md:p-12 m-10 md:m-auto md:w-2/3 h-fit">
          <Image
            alt="AWS"
            height={100}
            width={100}
            className="w-full"
            src="/images/technologies/aws.png"
          />
          <Image
            alt="GCP"
            className="w-full"
            height={100}
            width={100}
            src="/images/technologies/gcp.png"
          />
          <Image
            alt="Javascript Image"
            height={100}
            width={100}
            className="w-full"
            src="/images/technologies/javascript.png"
          />
        </div>

        <div className="w-4/5 text-center md:text-left m-auto md:mt-40 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h1 className="text-6xl">
              {t("Våran")} <br></br>
              <span className="text-gradient-green font-bold">
                {t("techstack")}
              </span>
            </h1>
            <p className="mt-4 mb-4">
              {t(
                "På Altostruct arbetar vi med många olika cloud tjänster, " +
                  "allt ifrån serverless till datamigrering. Här ser ni några exempel " +
                  "på olika teknologier vi tidigare har arbetat med."
              )}
            </p>
          </div>
          <div>
            <div className=" flex w-full float-right">
              <div className="m-auto">
                <NoSSR>
                  <CardStack
                    cards={[
                      {
                        description: t("Och mycket mer!"),
                        image:
                          "https://as1.ftcdn.net/v2/jpg/02/63/40/02/1000_F_263400204_7k7rh0GjnWUYGEpLuyMu2E6dlywln34k.jpg",
                        title: "Node.js",
                      },
                      {
                        description: t("Bygga nytt frontend med ReactJS"),
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU",
                        title: "React",
                      },
                      {
                        description: t("Framtidssäkra med ett modernt ramverk"),
                        image:
                          "https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png",
                        title: "Node.js",
                      },
                      {
                        description: t(
                          "Bygg din plattform med senaste cloudteknologin"
                        ),
                        image:
                          "data:image/png;base64,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",
                        title: "Node.js",
                      },
                    ]}
                  ></CardStack>
                </NoSSR>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-dotted mt-24 rounded-3xl">
          <div className="text-white p-10 py-32 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="m-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {t("Se vad våra ")}
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

        <Form></Form>
      </Content>

      <div id="contact">
        <Footer></Footer>
      </div>
    </>
  );
}

export default AboutPage;
