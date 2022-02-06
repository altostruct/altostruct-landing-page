import * as React from "react";
import "./Topbar.scss";
import LanguageSelector from "@components/LanguageSelector/LanguageSelector";
import useTranslation from "../../hooks/useTranslation";

import Brand from "../Brand/Brand";

interface TopbarProps {
  pathName: string;
}

const Topbar = (props: TopbarProps) => {
  const { t, setLanguage, language } = useTranslation(props.pathName);
  return (
    <header className="topbar">
      <nav>
        <a className="brand" href="/">
          <Brand />
        </a>
      </nav>
      <nav>
        {/* Simulates css grids, since it is not supported ios */}
        <a href="#customers" style={{ marginRight: "1em" }}>
          {t("Kunder")}
        </a>
        <a href="#contact">{t("Kontakta oss")}</a>
        <LanguageSelector pathName={props.pathName}></LanguageSelector>
      </nav>
    </header>
  );
};

export default Topbar;
