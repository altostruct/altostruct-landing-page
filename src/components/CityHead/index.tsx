import Button from "@components/Button/Button";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import City from "@components/3d/City";
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

  function Card(props: { color: string; title: string; description: string }) {
    const { title, description, color } = props;

    return (
      <div className="flex border-gray-400 p-8">
        <div className="m-auto">
          <h3 className={"text-6xl font-extrabold text-gradient-" + color}>
            {title}
          </h3>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    );
  }

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
          {!isSSR && <City />}
          {/* <div
            className="absolute bottom-0 overflow-hidden grid grid-cols-4"
            style={{ width: "100%" }}
          >
            <Card
              title="20+"
              color="blue"
              description="Successful Projects"
            ></Card>
            <Card
              title="12+"
              color="red"
              description="Dedicated Developers"
            ></Card>
            <Card
              title="15+"
              color="green"
              description="Successful Projects"
            ></Card>
            <Card
              title="10+"
              color="purple"
              description="Happy Customers"
            ></Card>
          </div> */}
        </div>
        <div
          // style={{ width: "80%", left: "10%" }}
          className="p-20 absolute left-1/2 text-center -translate-x-1/2 top-1/4"
        >
          <h1 className="md:text-8xl text-6xl font-bold">
            <div className="flex">
              <span className="text-gray-800 flex gap-2 ">
                <Fade delay={500}>
                  <span className="text-gray-800">{mainCategory}</span>
                  <span> / </span>
                  <span
                    className={
                      "overflow-hidden border-solid text-gradient-blue"
                    }
                  >
                    {/* <Slide delay={700} left> */}
                    {techonology}
                    {/* </Slide> */}
                  </span>
                </Fade>
              </span>
            </div>
          </h1>

          <Fade delay={800}>
            <p className="text-black py-2 text-md md:text-xl">
              {t("Konsultbolaget som älskar cloud och webben")}
              <br></br>
            </p>
          </Fade>
          <Fade delay={1000}>
            <div className="flex pt-2">
              <div className="m-auto flex gap-2">
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
    </>
  );
}

export default CityHead;