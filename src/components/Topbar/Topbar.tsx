import * as React from "react";
import "./Topbar.scss";
import LanguageSelector from "@components/LanguageSelector/LanguageSelector";
import useTranslation, { DEFAULT_LANGUAGE } from "../../hooks/useTranslation";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
import Reveal from "react-reveal/Reveal";

import Brand from "../Brand/Brand";
import classNames from "classnames";

const Topbar = (props: any) => {
  const { t, languagePrefix } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

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

  React.useEffect(() => {
    if (!ref.current) return;
    if (expanded) {
      ref.current.className = "expandedHambuger";
    } else {
      ref.current.className = "notExpandedHambuger";
    }
  }, [expanded]);

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

          <a className="button-spacing" href={"#contact"}>
            {t("Kontakta oss")}
          </a>
          {/* <a className="button-spacing" href={languagePrefix + "blog"}>
            {t("Kunskapsbas")}
          </a> */}
          {/* <a className="button-spacing" href={languagePrefix + "cases"}>
            {t("Cases")}
          </a> */}
          <a className="button-spacing" href={languagePrefix + "about"}>
            {t("Om oss")}
          </a>

          <a className="button-spacing" href={languagePrefix + "blog"}>
            {t("Kunskapsbas")}
          </a>

          <LanguageSelector></LanguageSelector>
        </nav>

        <nav
          className="flex md:hidden text-xl cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div ref={ref}>
            <svg viewBox="0 0 100 100" width="20" height="20">
              <rect y="0" width="100" height="20"></rect>
              <rect y="40" width="100" height="20"></rect>
              <rect y="80" width="100" height="20"></rect>
            </svg>
          </div>
        </nav>
      </header>

      {expanded && (
        <div className="md:hidden bg-white z-20 h-screen w-screen right-0 top-0 fixed flex">
          <div className="m-auto flex-col flex text-5xl">
            <Fade delay={0}>
              <a className="button-spacing" href={languagePrefix + "about"}>
                {t("Om oss")}
              </a>
            </Fade>
            <Fade delay={200}>
              <a className="button-spacing" href={languagePrefix + "blog"}>
                {t("Kunskapsbas")}
              </a>
            </Fade>
            <Fade delay={400}>
              <div className="border-b my-3"></div>
            </Fade>
            <Fade delay={600}>
              <a className="button-spacing" href={languagePrefix + "#contact"}>
                {t("Kontakta oss")}
              </a>
            </Fade>
            {/* <Fade delay={300}>
              <a className="button-spacing" href={languagePrefix + "cases"}>
                {t("Cases")}
              </a>
            </Fade> */}

            <Fade delay={800}>
              <div className="m-10">
                <LanguageSelector expanded></LanguageSelector>
              </div>
            </Fade>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
