import * as React from "react";
import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import Icon from "@components/Icon";
import "@styles/global.scss";
import "./index.scss";

import TeamMember, { Member } from "@components/TeamMember/TeamMember";

import AddFrontImage from "./assets/AddFrontImage.png";
import useTranslation from "../../hooks/useTranslation";

function AboutUs(props: any) {
  const { t, setLanguage, language } = useTranslation(props.location.pathname);
  const teamMembers: Member[] = [
    {
      name: "Erik Rehn",
      title: t("CEO & Cloud Consultant"),
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
          "och diskutera om livets alla håll och kanter"
      ),

      mail: "joakim.tornert@altostruct.se",
      id: 4,
    },
    {
      name: "Axel Hedengren",
      title: "Communications manager",
      presentation: t(
        "Kommunikatör vars fokus är att informera om händelser rörande företaget " +
          "samt om företagets många spännande projekt " +
          "Språkfantast som bara njuter av att få vara med på ett hörn av en innovativ startup." +
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
          "där anpassningsbarhet och kontakt med kund värdesätts högst." +
          'Kämpar med Gustav K om titeln "kontorets pingismästare"'
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
    <main className="page">
      <Topbar pathName={props.location.pathname}></Topbar>
      <Icon.Top className="top-icon" />
      <div className="background">
        <div className="title content screen-height">
          <div className="aboutus-content sm-screen-height">
            <div>
              <h3 className="aboutus-title secondary-title">{t("Om vårt")}</h3>
              <h1 className="aboutus-title primary-title">{t("Team")}</h1>
            </div>
            <div>
              {teamMembers.map((teamMember) => (
                <TeamMember
                  member={teamMember}
                  key={teamMember.id}
                ></TeamMember>
              ))}
              <TeamMember
                member={{
                  name: t("Lägg till person!"),
                  title: t(
                    "Är du näst på denna lista? Tveka inte på att skriva till oss!"
                  ),
                  mail: "info@altostruct.se",
                  id: 1,
                  frontImage: AddFrontImage,
                  link: "mailto:info@altostruct.se",
                }}
              ></TeamMember>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
export default AboutUs;
