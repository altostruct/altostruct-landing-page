import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import React from "react";
import LanguageProvider, {
  useLanguage,
  withLanguage,
} from "../../contexts/LanguageContext";
import useLocation from "../../hooks/useLocation";
import useTranslation from "../../hooks/useTranslation";

import BasePage from "../../templates/_generic/BasePage";

function Index() {
  const { t } = useTranslation();

  return (
    <>
      <Topbar pathName=""></Topbar>
      <BasePage
        mainCategory={t("cloud")}
        techonology={t("aws")}
        image={<p>asd</p>}
        h1={t("Certifierade solution architects")}
        h2={t(
          "Vi erbjuder utvecklare specialiserade i AWS. Vårt team av AWS konsulter är certifierade och placerade i Stockholm. " +
            "Detta ger er möjligheten att snabbt utveckla mot cloud på era vilkor. Nedan kan du se några projekt gjorde på cloud"
        )}
        projects={[
          {
            img: (
              <img
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
            img: <img src=""></img>,
            title: "Tendium",
            description: t(
              "Hemsida som tillåter kunder att enkelt följa hitta och ansöka till offentliga upphandlingar. Altostruct hjälpte lägga grunden till infrastruktur till deras microservice arkitektur."
            ),
          },
          {
            img: (
              <img
                className="max-h-56"
                src="/images/customers/nrlyze.png"
              ></img>
            ),
            title: "Nrlyze",
            description: t(
              "Nrlyze har skapat ett system av trådlösa sensorer som kan optimera parametrar gällande värmesystem i byggnader. Altostruct hjälpte Nrlyze bygga en portal som tillåter de överse byggnaderna och få sin data presenterad i grafer."
            ),
          },
        ]}
        title="HUR KAN VI HJÄLPA DIG?"
        titleDescription={t("Solution architects")}
      ></BasePage>
      <Footer />
    </>
  );
}

export default withLanguage(Index);
