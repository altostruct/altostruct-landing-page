import * as React from "react";
import "./Topbar.scss";
import LanguageSelector from "@components/LanguageSelector/LanguageSelector";
import useTranslation, { DEFAULT_LANGUAGE } from "../../hooks/useTranslation";

import Brand from "../Brand/Brand";

interface TopbarProps {
  pathName: string;
}

const Topbar = (props: TopbarProps) => {
  const { t, setLanguage, language } = useTranslation(props.pathName);
  //language part of url, no language if default
  const languagePrefix =
    language == DEFAULT_LANGUAGE ? "/" : "/" + language + "/";
  return (
    <header className="topbar">
      <nav>
        <a className="brand" href="/">
          <Brand />
        </a>
      </nav>
      <nav>
        {/* Simulates css grids, since it is not supported ios */}
        <a className="button-spacing" href={languagePrefix + "#customers"}>
          {t("Kunder")}
        </a>
        <a className="button-spacing" href={languagePrefix + "aboutus"}>
          {t("Om oss")}
        </a>
        <a className="button-spacing" href={languagePrefix + "#contact"}>
          {t("Kontakta oss")}
        </a>
        <LanguageSelector pathName={props.pathName}></LanguageSelector>
      </nav>
    </header>
  );
};

export default Topbar;
