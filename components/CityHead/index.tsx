import Button from "components/Button/Button";

//@ts-ignore
import Fade from "react-reveal/Fade";

import City from "components/3d/City";
import React from "react";

import NoSSR from "components/NoSSR";
import useTranslation from "hooks/useTranslation";
import Content from "@components/Content";

function CityHead() {
  const { t } = useTranslation();

  return (
    <>
      <div className=" bg-white border ">
        <div
          style={{
            width: "100vw",
            overflow: "hidden",
            height: "90vh",
          }}
        >
          <NoSSR>
            <City />{" "}
          </NoSSR>
        </div>
        <div className="p-0 flex absolute w-screen  top-1/2 -translate-y-1/2 ">
          <Content>
            <div className="m-auto">
              <h1 className="sm:text-5xl md:text-8xl text-5xl font-bold font-sans">
                <span className="text-gray-800">
                  <Fade delay={500}>
                    <span className="whitespace-nowrap">
                      {t("think inside ")}
                    </span>
                    <br></br>
                    <span>{t("the ")}</span>
                    <span className={"border-solid text-gradient-green"}>
                      {t("cloud")}
                    </span>
                  </Fade>
                </span>
              </h1>

              <Fade delay={800}>
                <p className="text-black pt-6 text-md md:text-xl">
                  {t("Konsultbolaget som brinner för AWS och cloud")}
                  <br></br>
                </p>
              </Fade>

              <Fade delay={1000}>
                <div className="flex mt-12">
                  <div className=" flex gap-8">
                    <Button type="primary" link="#contact" className="p-20 ">
                      {t("Kontakta oss")}
                    </Button>
                    <Button type="secondary" link="/about" className="p-20 ">
                      {t("Om oss")}
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          </Content>
        </div>
      </div>
    </>
  );
}

export default CityHead;
