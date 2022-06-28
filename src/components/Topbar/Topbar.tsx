import * as React from "react";
import "./Topbar.scss";
import LanguageSelector from "@components/LanguageSelector/LanguageSelector";
import useTranslation, { DEFAULT_LANGUAGE } from "../../hooks/useTranslation";

import Brand from "../Brand/Brand";
import classNames from "classnames";

interface TopbarProps {
  pathName: string;
}

const Topbar = (props: TopbarProps) => {
  const { t, setLanguage, language } = useTranslation();
  //language part of url, no language if default
  const languagePrefix =
    language == DEFAULT_LANGUAGE ? "/" : "/" + language + "/";

  const threshold = 100;
  const [isAtTop, setIsAtTop] = React.useState(window.scrollY < threshold);

  React.useEffect(() => {
    const onScoll = () => {
      if (window.scrollY > threshold) setIsAtTop(false);
      if (window.scrollY < threshold) setIsAtTop(true);
    };

    window.addEventListener("scroll", () => {
      onScoll();
    });

    return window.removeEventListener("scroll", onScoll);
  }, []);

  return (
    <header
      className={classNames("topbar", {
        "bg-white": !isAtTop,
        border: !isAtTop,
      })}
    >
      <nav>
        <a className="brand" href="/">
          <Brand />
        </a>
      </nav>
      <nav>
        {/* Simulates css grids, since it is not supported ios */}

        <a className="button-spacing" href={languagePrefix + "react"}>
          {t("React")}
        </a>

        <a className="button-spacing" href={languagePrefix + "kubernetes"}>
          {t("Kubernetes")}
        </a>

        <a className="button-spacing" href={languagePrefix + "aws"}>
          {t("AWS")}
        </a>
        <div className="button-spacing">I</div>

        <a className="button-spacing" href={languagePrefix + "#contact"}>
          {t("Kontakta oss")}
        </a>
        <a className="button-spacing" href={languagePrefix + "#contact"}>
          {t("Om oss")}
        </a>
        <LanguageSelector pathName={props.pathName}></LanguageSelector>
      </nav>
    </header>
  );
};

export default Topbar;
