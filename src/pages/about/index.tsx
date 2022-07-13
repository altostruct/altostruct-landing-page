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

const Cube = React.lazy(() => import("@components/City"));

function AboutPage() {
  const { t, setLanguage, language } = useTranslation();
  const isSSR = typeof globalThis.window === "undefined";

  const teamMembers: Member[] = [
    {
      name: "Erik Rehn",
      title: "CEO & Cloud Consultant",
      presentation: t(
        "Cloudkonsult med fokus på applikationer. " +
          "Mer specifikt uppskalningsprocessen av en applikation där det läggs stor vikt vid att vara innovativ och effektiv. " +
          "En riktig GraphQL- och Typescriptfantast som brinner för startup livet och allt som kommer med det. " +
          "Dricker troligtvis mer kaffe än vad någon borde."
      ),
      mail: "erik.rehn@altostruct.se",
      id: 1,
    },
    {
      name: "Emilio Gustavsson",
      title: "Solutions architect & backend developer",
      presentation: t(
        "Python-utvecklare med fokus på molntjänster. " +
          "Har erfarenhet av Java men det är inte längre relevant. " +
          "Mycket av min tid går åt till att utveckla backend av applikationer, databaser och API-integrationer. " +
          "Resten av min tid går åt till löpande bokföringen. " +
          "Är från Uruguay men kan inte spela fotboll."
      ),
      mail: "emilio.gustavsson@altostruct.se",
      id: 2,
    },
    {
      name: "Gustav Kasche",
      title: "Lead UX/Frontend developer",
      presentation: t(
        "Utvecklare som älskar att lära sig nya teknologier. " +
          "Kontorets pingismästare och amatörtennisens McEnroe."
      ),
      mail: "gustav.kasche@altostruct.se",
      id: 3,
    },
    {
      name: "Joakim Tornert",
      title: "Webb developer",
      presentation: t(
        "Mjukvarunörd och Clean Coding-predikant som gärna lägger fokus på säkerhet och användarupplevelser. " +
          "Helt enkelt en väldigt nyfiken person som älskar att lära sig nya saker " +
          "och diskutera om livets alla håll och kanter."
      ),

      mail: "joakim.tornert@altostruct.se",
      id: 4,
    },
    {
      name: "Axel Hedengren",
      title: "Communications manager",
      presentation: t(
        "Kommunikatör vars fokus är att informera om händelser rörande företaget " +
          "samt om företagets många spännande projekt. " +
          "Språkfantast som bara njuter av att få vara med på ett hörn av en innovativ startup. " +
          "Korrekturläste denna beskrivning fler gånger än vill erkännas."
      ),
      mail: "axelhedengren@gmail.com",
      id: 5,
    },
    {
      name: "Alrik Jonek",
      title: "Backend developer",
      presentation: t(
        "Utvecklare med stor passion för teknik och mjukvaruutveckling. " +
          "Erfarenhet inom utveckling och underhåll av webbapplikationer med hjälp av en agil arbetsprocess " +
          "där anpassningsbarhet och kontakt med kund värdesätts högst. " +
          'Kämpar med Gustav K om titeln "kontorets pingismästare".'
      ),

      mail: "alrik.jonek@altostruct.se",
      id: 6,
    },
    {
      name: "Gustav Rubbestad",
      title: "Fullstack developer",
      presentation: t(
        "Fullstack-utvecklare med en udda dubbelspecialisering inom cybersäkerhet och UX. " +
          "Kreativ problemlösare och etisk hackare, amatörmusiker på fritiden."
      ),
      mail: "gustav.rubbestad@altostruct.se",
      id: 7,
    },
    {
      name: "Rasmus Holmgren",
      title: "Fullstack developer",
      presentation: t(
        "Brinner för allt som har med teknik att göra men speciellt för mjukvara. " +
          "Intresserad av hur saker och ting fungerar och är alltid öppen för att lära mig nya saker."
      ),
      mail: "rasmus.holmgren@altostruct.se",
      id: 8,
    },
  ];

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
                  mobilappar,
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <Section position="center" className="py-60" dark>
        <div className="p-0 md:p-10">
          <h3 className="pt-10 pb-10 text-6xl">Allt på molnet</h3>
          <CardGrid
            animatedOnView
            cols={2}
            grid={[
              {
                title: t("GDPR + cloud"),
                description: t(
                  "Med hjälp av den senaste teknologin kan du se till att ditt moln följer GDPR."
                ),
                backgroundColor: "var(--bg-dark)",
              },
              {
                title: t("Skalbar mobilapp"),
                description:
                  "Bygg din mobilapp redo för allt. Genom Flutter kan du bygga din mobilapp",
                backgroundColor: "var(--bg-dark)",
              },
              {
                title: t("ELT & datamining"),
                description: "We are currentl",
                backgroundColor: "var(--bg-dark)",
              },
              {
                title: t("Egetbyggt API"),
                description: "Vi har byggt vårt eget API",
                backgroundColor: "var(--bg-dark)",
              },
            ]}
          ></CardGrid>
        </div>

        <div className="p-10 pt-48">
          <h2 className="text-6xl">
            Love your work and the rest solves itself
          </h2>
          <p className="pt-6">
            Dessa två koncept är något vi på Altostruct tror starkt på. Vi anser
            att en av de viktigaste faktorerna för framgång är att våra
            utvecklare brinner för sina projekt. Varje vecka
          </p>
        </div>
      </Section>
      {/* <div>
        <h1>Vårt grymma team</h1>
        <div className="flex w-full ">
          <div className="m-auto w-2/5">
            {teamMembers.map((teamMember) => (
              <TeamMember member={teamMember} key={teamMember.id}></TeamMember>
            ))}
          </div>
        </div>
      </div> */}
      <Section position="full">
        <Form></Form>
      </Section>
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
