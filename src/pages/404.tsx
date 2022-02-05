import * as React from "react";
import { Link } from "gatsby";
import Button from "@components/Button/Button";
import Topbar from "@components/Topbar/Topbar";
import Icon from "@components/Icon";
import useTranslation from "../hooks/useTranslation";

const NotFoundPage = (props: any) => {
  const { t, setLanguage, language } = useTranslation(props.location.pathname);
  return (
    <main className="page">
      <Topbar pathName={props.location.pathname}></Topbar>
      <div className="content screen-height title">
        <Icon.Square className="top-image" />
        <div className="split-content sm-screen-height">
          <section>
            <h1 style={{ whiteSpace: "nowrap" }}>
              {t("404")} <br />
              {t("Not found")}
            </h1>
            <p>
              <span className="white-bg-text">
                {t("Kunde tyvärr inte hitta din sida.")}
              </span>
            </p>
            <Button className="space-right" link="/">
              {t("Tillbaka")}
            </Button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
