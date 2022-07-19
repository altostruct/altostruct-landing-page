import AnimatedLogo from "@components/AnimatedLogo";
import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Section from "@components/Section";
import Topbar from "@components/Topbar/Topbar";
import React, { Suspense } from "react";
import TeamMember, { Member } from "@components/TeamMember/TeamMember";
import useTranslation from "../../hooks/useTranslation";
import CardGrid from "@components/CardGrids";
import Fade from "react-reveal/Fade";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Button from "@components/Button/Button";
const Cube = React.lazy(() => import("@components/City"));

function CasePage() {
  const { t, setLanguage, language } = useTranslation();
  const isSSR = typeof globalThis.window === "undefined";

  const saluto = useStaticQuery(graphql`
    query {
      saluto: file(relativePath: { eq: "images/customers/saluto.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 120, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      nrlyze: file(relativePath: { eq: "images/customers/nrlyze.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 500, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <Topbar></Topbar>
      <div className="h-screen w-screen mt-16 bg-white ">
        <div className="w-full absolute h-screen overflow-hidden z-10">
          <div className="m-auto">
            {!isSSR && (
              <Suspense fallback={<></>}>
                <Cube />
              </Suspense>
            )}
          </div>
        </div>
        <div className="relative z-10 p-8 flex w-full  md:w-1/2 bg-white h-full">
          <div className="m-auto">
            <div className="md:p-10 w-full">
              <Fade>
                <h1 className="text-6xl ">
                  "Amaze the customer, like a startup"
                </h1>
              </Fade>
              <Fade delay={500}>
                <p className="pt-6 text-xl">
                  Altostruct är ett Stockholmsbaserat är ett konsultbolag inom
                  cloud- och webbtjänster. Sedan 2020 har vi arbetat med cloud,
                  mobilappar och webutveckling.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <Section position="center" dark>
        <div className="py-10">
          <h2 className="text-6xl">
            {t("Enkel och kundvänlig cloudbaserad webbportal")}
          </h2>

          <p className="mt-10">
            {t(
              "Att ändra vanor är svårt, men med Salutos skräddarsydda råd får du " +
                "en bättre grund för att veta vad just du ska fokusera på för en " +
                "långsiktigt god hälsa. Saluto samarbetar med andra hälsoaktörer som " +
                "kan hjälpa till med ytterligare tester, bedömningar och behandlingar."
            )}
          </p>
          <div className="my-16">
            <Img
              fixed={saluto.nrlyze.childImageSharp.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>

          <div className="my-3">
            <Button>{t("Länk till projekt")}</Button>
          </div>
        </div>
      </Section>

      <Section position="center">
        <div>
          <div className="my-10 -rotate-45">
            <Img
              fixed={saluto.saluto.childImageSharp.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
            ></Img>
          </div>
          <h2 className="text-6xl">{t("App & API på 4 månader")}</h2>
          <p className="pt-6">
            {t(
              "Att ändra vanor är svårt, men med Salutos skräddarsydda råd får du " +
                "en bättre grund för att veta vad just du ska fokusera på för en " +
                "långsiktigt god hälsa. Saluto samarbetar med andra hälsoaktörer som " +
                "kan hjälpa till med ytterligare tester, bedömningar och behandlingar."
            )}
          </p>
          <div className="my-10 rotate-12">
            <Img
              fixed={saluto.saluto.childImageSharp.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
            ></Img>
          </div>
          <h2 className="text-4xl">{t("Swedish Cloud + Flutter = true")}</h2>
          <p className="pt-6">
            {t(
              "Att ändra vanor är svårt, men med Salutos skräddarsydda råd får du " +
                "en bättre grund för att veta vad just du ska fokusera på för en " +
                "långsiktigt god hälsa. Saluto samarbetar med andra hälsoaktörer som " +
                "kan hjälpa till med ytterligare tester, bedömningar och behandlingar."
            )}
          </p>

          <div className="my-10">
            <Button>{t("Länk till projekt")}</Button>
          </div>
        </div>
      </Section>

      <Section position="center">
        <div>
          <div className="my-10 -rotate-45">
            <Img
              fixed={saluto.saluto.childImageSharp.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
            ></Img>
          </div>
          <h2 className="text-6xl">{t("App & API på 4 månader")}</h2>
          <p className="pt-6">
            {t(
              "Att ändra vanor är svårt, men med Salutos skräddarsydda råd får du " +
                "en bättre grund för att veta vad just du ska fokusera på för en " +
                "långsiktigt god hälsa. Saluto samarbetar med andra hälsoaktörer som " +
                "kan hjälpa till med ytterligare tester, bedömningar och behandlingar."
            )}
          </p>
          <div className="my-10 rotate-12">
            <Img
              fixed={saluto.saluto.childImageSharp.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
            ></Img>
          </div>
          <h2 className="text-4xl">{t("Swedish Cloud + Flutter = true")}</h2>
          <p className="pt-6">
            {t(
              "Att ändra vanor är svårt, men med Salutos skräddarsydda råd får du " +
                "en bättre grund för att veta vad just du ska fokusera på för en " +
                "långsiktigt god hälsa. Saluto samarbetar med andra hälsoaktörer som " +
                "kan hjälpa till med ytterligare tester, bedömningar och behandlingar."
            )}
          </p>

          <div className="my-10">
            <Button>{t("Länk till projekt")}</Button>
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

      <Footer></Footer>
    </>
  );
}

export default CasePage;
