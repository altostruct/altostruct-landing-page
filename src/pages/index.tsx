import Footer from "@components/Footer/Footer";
import Topbar from "@components/Topbar/Topbar";
import React from "react";
import useTranslation from "../hooks/useTranslation";

import BasePage from "../templates/_generic/BasePage";

function Index() {
  const { t } = useTranslation();
  return (
    <>
      <Topbar pathName=""></Topbar>

      <BasePage
        mainCategory={t("cloud")}
        techonology={t("aws")}
        image={<p>asd</p>}
        inDepthDescription={t(
          "Letar ni efter Seniora AWS konsulter i Stockholm? Då har ni kommit helt rätt. " +
            "Vi har arbetat med AWS ända sedan början och brinner helhjärtat för att bygga lösningar på cloud. " +
            "Med våra seniora AWS konsulter får ni allting ni behöver för att ta er produkt till nästa nivå."
        )}
        title=""
        titleDescription="Seniora AWS arkitekter"
      ></BasePage>
      <Footer />
    </>
  );
}

export default Index;
