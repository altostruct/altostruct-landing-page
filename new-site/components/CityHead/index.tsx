import Button from "components/Button/Button";

//@ts-ignore
import Fade from "react-reveal/Fade";

import City from "components/3d/City";
import React from "react";

import NoSSR from "components/NoSSR";
import useTranslation from "contexts/useTranslation";

function CityHead() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div
          style={{
            width: "100vw",
            overflow: "hidden",
            height: "100vh",
          }}
        >
          <NoSSR>
            <City />
          </NoSSR>
        </div>
        <div className="p-0 flex absolute left-1/2 text-center -translate-x-1/2 -translate-y-1/2 top-1/2">
          <div className="m-auto">
            <h1 className="sm:text-5xl md:text-8xl text-5xl font-bold font-sans">
              <span className="text-gray-800">
                <Fade delay={500}>
                  <span className="whitespace-nowrap">
                    {t("Think inside the ")}
                  </span>
                  <br></br>
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
                <div className="m-auto flex gap-8">
                  <Button type="secondary" link="#contact" className="p-20 ">
                    {t("Om oss")}
                  </Button>
                  <Button type="secondary" link="#contact" className="p-20 ">
                    {t("Kontakta oss")}
                  </Button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default CityHead;
