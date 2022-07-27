import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import React, { Suspense } from "react";
import TeamMember, { Member } from "@components/TeamMember/TeamMember";
import useTranslation from "../../hooks/useTranslation";
import SmallCity from "@components/3d/SmallCity";
import Content from "@components/Content";
import CardStack from "@components/CardStack";
import { Cite } from "../../templates/_generic/BasePage";
import Button from "@components/Button/Button";

function ImageSlider() {
  return (
    <div className="image-slider">
      <img src="/images/customers/foodfacts.png"></img>
      <img src="/images/customers/foodfacts.png"></img>
      <img src="/images/customers/foodfacts.png"></img>
      <img src="/images/customers/foodfacts.png"></img>
      <img src="/images/customers/foodfacts.png"></img>
      <img src="/images/customers/foodfacts.png"></img>
    </div>
  );
}

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
      {/* <Topbar></Topbar> */}
      <div className="scroll-snap">
        <div className="h-screen">
          <Content>
            <div className="mt-12 grid grid-cols-2">
              <div className="flex">
                <div className="m-auto">
                  <h1 className="text-6xl font-normal">cases</h1>
                  <p className="mt-4">
                    Vi har två enkla motto. Have fun and “amaze the customer”.
                    Ända sedan dag ett har vi trott att enda vägen frammåt är
                    göra saker så bra
                  </p>
                  <div className="grid grid-cols-2 mt-4">
                    <div>
                      <p className="font-extrabold">Lyckade project</p>
                      <h1 className="text-gradient-green text-6xl font-extrabold">
                        20+
                      </h1>
                    </div>
                    <div>
                      <p className="font-extrabold">Kunder</p>
                      <h1 className="text-gradient-green text-6xl font-extrabold">
                        13
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-screen p-12">
                <Suspense fallback={<></>}>
                  <SmallCity />
                </Suspense>
              </div>
            </div>
          </Content>
        </div>
        <div className="flex min-h-screen bg-gradient-green">
          <Content>
            <div className="m-auto grid grid-cols-2">
              <div className="m-auto text-white">
                <h1 className="font-bold text-5xl">
                  Modern web app <br></br>{" "}
                  <span className="text-gradient-blue">på cloud</span>
                </h1>
                <p className="mt-6">
                  Foodfacts skapar digitala lösningar som med hjälp av AI vilket
                  gör information om livsmedel lättillgängligt och transparent.
                  Altostruct hjälpte till att bygga deras AWS molninfrastruktur
                  och deras IOS/Android applikation.
                </p>
              </div>
              <div>
                <img src="/images/customers/foodfacts.png" alt="" />
              </div>

              {/* <div className="h-96">
                <ImageSlider />
              </div> */}
            </div>
          </Content>
        </div>
        <div className="h-screen flex bg-gradient-blue">
          <Content>
            <div className="m-auto grid grid-cols-2">
              <div className="m-auto text-white">
                <h1 className="font-bold text-5xl">
                  Modern web app <br></br>{" "}
                  <span className="text-gradient-blue">på cloud</span>
                </h1>
                <p className="mt-6">
                  Foodfacts skapar digitala lösningar som med hjälp av AI vilket
                  gör information om livsmedel lättillgängligt och transparent.
                  Altostruct hjälpte till att bygga deras AWS molninfrastruktur
                  och deras IOS/Android applikation.
                </p>
              </div>
              <div className="max-h-96 ml-auto">
                <img src="/images/customers/saluto.png" alt="" />
              </div>

              {/* <div className="h-96">
                <ImageSlider />
              </div> */}
            </div>
          </Content>
        </div>
        <div className="h-screen flex bg-gradient-red">
          <Content>
            <div className="m-auto grid grid-cols-2">
              <div className="m-auto text-white">
                <h1 className="font-bold text-5xl">
                  Modern web app <br></br>{" "}
                  <span className="text-gradient-blue">på cloud</span>
                </h1>
                <p className="mt-6">
                  Foodfacts skapar digitala lösningar som med hjälp av AI vilket
                  gör information om livsmedel lättillgängligt och transparent.
                  Altostruct hjälpte till att bygga deras AWS molninfrastruktur
                  och deras IOS/Android applikation.
                </p>
              </div>
              <div className="max-h-96 ml-auto">
                <img src="/images/customers/nrlyze.png" alt="" />
              </div>

              {/* <div className="h-96">
                <ImageSlider />
              </div> */}
            </div>
          </Content>
        </div>
        <div className="h-screen ">
          <div></div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
