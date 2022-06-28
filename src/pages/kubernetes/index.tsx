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
        mainCategory={t("CLOUD")}
        techonology={t("K8")}
        image={<p>asd</p>}
        inDepthDescription={t(
          "En person som älskar det den gör kommer alltid utföra sina uppgifter bättre och mer effektivt än någon som inte gör det. " +
            "Detta kan visserligen låta uppenbart, men kan vara svårt att realisera i praktiken. Men vi kan garantera att detta hittills" +
            " stämt in bra på oss. Vi har, sedan starten av företaget, alltid erbjudit våra kunder konsulter som brinner för sitt arbete och som därför gör allt för att skapa en så bra produkt som möjligt. "
        )}
        title="Amazon web services"
        titleDescription="Amazon web services"
      ></BasePage>
      <Footer />
    </>
  );
}

export default Index;
