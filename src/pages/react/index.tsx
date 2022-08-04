import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import React from "react";
import useTranslation from "../../hooks/useTranslation";

import BasePage from "../../templates/_generic/BasePage";

function Index() {
  const { t } = useTranslation();
  return (
    <>
      <Topbar pathName=""></Topbar>
      <BasePage
        mainCategory={t("web")}
        techonology={t("react")}
        image={<p>asd</p>}
        h1={t("Vi <3 React")}
        h2={t(
          "Behöver du en vass react utvecklare? Då har du kommit till rätt plats. " +
            "Vi har seniora react konsulter placerade i stockholm som bygger " +
            "skalbara applikationer. Vi jobbar med TDD för att säkerställa att din " +
            "applikation fortsätter att fungerar för all framtid."
        )}
        projects={[
          {
            img: <img src="/images/customers/nrlyze.png"></img>,
            title: "Nrlyze",
            description: t(
              "Nrlyze har skapat ett system av trådlösa sensorer som kan optimera parametrar gällande värmesystem i byggnader. Altostruct hjälpte Nrlyze bygga en portal som tillåter de överse byggnaderna och få sin data presenterad i grafer."
            ),
          },
          {
            img: <img src=""></img>,
            title: "Tendium",
            description: t(
              "Hemsida som tillåter kunder att enkelt följa hitta och ansöka till offentliga upphandlingar. Altostruct hjälpte lägga grunden till infrastruktur till deras microservice arkitektur."
            ),
          },
        ]}
        certificate={false}
        title="REACT"
        titleDescription="React och webutvecklare "
      ></BasePage>
      <Footer />
    </>
  );
}

export default Index;
