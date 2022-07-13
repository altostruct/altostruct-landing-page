import Button from "@components/Button/Button";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import City from "@components/City";
import React from "react";
import useTranslation from "../../hooks/useTranslation";

interface DefaultPageProps {
  mainCategory: string;
  techonology: string;
}

function CityHead(props: DefaultPageProps) {
  const { mainCategory, techonology } = props;
  const isSSR = typeof globalThis.window === "undefined";
  const { t, languagePrefix } = useTranslation();

  return (
    <>
      <div
        className="h-screen"
        style={{
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100vw",
            zIndex: 0,
            height: "140vh",
          }}
        >
          {!isSSR && <City />}
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <h1 className="md:text-8xl text-center text-6xl font-bold uppercase">
          <Fade>
            <span className="text-xl md:text-3xl font-light">
              {t("KONSULTER I STOCKHOLM INOM")}
            </span>
          </Fade>

          <div className="flex">
            <span className="text-black flex m-auto gap-2">
              <Fade delay={500}>
                <span>{mainCategory}</span>
                <span> / </span>
                <span className="overflow-hidden border-solid">
                  <Slide delay={700} left>
                    {techonology}
                  </Slide>
                </span>
              </Fade>
            </span>
          </div>
        </h1>
        <Fade delay={800}>
          <p className="text-black text-center py-2 text-lg md:text-xl">
            {t("Konsultbolaget som älskar cloud och webben")}
            <br></br>
          </p>
        </Fade>
        <Fade delay={1000}>
          <div className="flex pt-2">
            <div className="flex m-auto gap-2">
              <Button
                type="secondary"
                link={languagePrefix + "about"}
                className="p-20 "
              >
                {t("Om oss")}
              </Button>
              <Button link="#contact" className="p-20 ">
                {t("Kontakta oss")}
              </Button>
              {/* <Button type="secondary">{t("Om oss")}</Button> */}
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default CityHead;
