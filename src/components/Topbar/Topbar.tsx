import * as React from "react";
import "./Topbar.scss";
import LanguageSelector from "@components/LanguageSelector/LanguageSelector";
import useTranslation, { DEFAULT_LANGUAGE } from "../../hooks/useTranslation";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import Brand from "../Brand/Brand";
import classNames from "classnames";

const Topbar = (props: TopbarProps) => {
  const { t, setLanguage, language } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);

  //language part of url, no language if default
  const languagePrefix =
    language == DEFAULT_LANGUAGE ? "/" : "/" + language + "/";

  const threshold = 100;
  const [isAtTop, setIsAtTop] = React.useState(true);

  React.useEffect(() => {
    const onScoll = () => {
      if (window.scrollY > threshold) setIsAtTop(false);
      if (window.scrollY < threshold) setIsAtTop(true);
    };

    if (window.scrollY > threshold) setIsAtTop(false);

    window.addEventListener("scroll", () => {
      onScoll();
    });

    return window.removeEventListener("scroll", onScoll);
  }, []);

  return (
    <>
      <header
        className={classNames("topbar", {
          "bg-white": true,
          border: !isAtTop,
        })}
      >
        <nav>
          <a className="brand" href="/">
            <Brand />
          </a>
        </nav>
        <nav className="hidden md:flex invisible md:visible">
          {/* Simulates css grids, since it is not supported ios */}

          <a className="button-spacing" href={languagePrefix + "react"}>
            {t("React")}
          </a>

          <a className="button-spacing" href={languagePrefix + "aws"}>
            {t("AWS")}
          </a>
          <div className="button-spacing">I</div>

          <a className="button-spacing" href={languagePrefix + "#contact"}>
            {t("Kontakta oss")}
          </a>
          <a className="button-spacing" href={languagePrefix + "#contact"}>
            {t("Cases")}
          </a>
          <a className="button-spacing" href={languagePrefix + "about"}>
            {t("Om oss")}
          </a>

          <LanguageSelector pathName={props.pathName}></LanguageSelector>
        </nav>

        <nav
          className="flex md:hidden text-xl cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          ☰
        </nav>
      </header>

      {expanded && (
        <div className=" bg-white z-20 h-screen w-screen right-0 top-0 fixed flex">
          <div className="m-auto flex-col flex text-5xl">
            <Fade delay={0}>
              <a className="button-spacing" href={languagePrefix + "aws"}>
                {t("AWS")}
              </a>
            </Fade>
            <Fade delay={100}>
              <a className="button-spacing" href={languagePrefix + "react"}>
                {t("REACT")}
              </a>
            </Fade>
            <Fade delay={600}>
              <div className="border-b my-3"></div>
            </Fade>
            <Fade delay={200}>
              <a className="button-spacing" href={languagePrefix + "#contact"}>
                {t("Kontakta oss")}
              </a>
            </Fade>
            <Fade delay={300}>
              <a className="button-spacing" href={languagePrefix + "#contact"}>
                {t("Cases")}
              </a>
            </Fade>
            <Fade delay={400}>
              <a className="button-spacing" href={languagePrefix + "about"}>
                {t("Om oss")}
              </a>
            </Fade>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
