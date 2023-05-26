import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
import WordCircled from "components/Word-Circled/Word";
import Package from "@components/JobPackege/JobPackege";
import { useRef } from "react";
import React, { useState } from "react";
import Link from "next/link";
import TransitionSquares from "@components/TransistionSquares";
import tailwindConfig from "tailwind.config";
import PageStart from "@components/PageStart";
import { ContentfulPosition, getContentfulPositions } from "utils/contentful";
import { useRouter } from "next/router";

function Carrer() {
  const { t } = useTranslation();
  const refPackages: (React.RefObject<HTMLDivElement>)[] = [];
  const [visiblePackage, setVisiblePackage] = useState(0);
  const lightBg = tailwindConfig.theme.light;
  const allPositions = getContentfulPositions();
  const positions: ContentfulPosition[] = [];

  //Filter by language

  const { locale, locales } = useRouter();

  allPositions.forEach(pos => {
    if (pos.sys.locale === locale) {
      positions.push(pos);
      refPackages.push(useRef<HTMLDivElement>(null));
    }
  })



  return (
    <>
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>
      <div className="bg-[#161616] md:pb-52 pb-20">
        <Content>
          <PageStart
            title={
              <>
                {t("Jobba med banbrytande")}{" "}
                <WordCircled borderCircle={true}>{t("teknologi")}</WordCircled>{" "}
                {t("tillsammans med de främsta inom ")}{" "}
                <WordCircled>{t("AWS och molnet")}</WordCircled>
              </>
            }
          ></PageStart>
        </Content>

        <div className={lightBg}>
          <TransitionSquares></TransitionSquares>

          <div className="place-content-center text-white text-center pt-72">
            <p className="md:text-4xl text-2xl">
              {t("Lediga tjänster hos Altostruct")}
            </p>
          </div>
          <div
            className="flex md:grid md:grid-cols-2 overflow-x-auto md:gap-4 place-items-center mt-10 w-11/12 m-auto md:mb-10"
            onScroll={(e) => {
              const centerOffset = window.innerWidth / 2; // Center offset of the viewport
              let mostCenteredIndex = -1; // Initialize with an invalid index
              let smallestOffset = Infinity; // Initialize with a large value

              refPackages.forEach((refPackage, index) => {
                const boundingRect = refPackage.current?.getBoundingClientRect();
                if (boundingRect) {
                  const itemCenter = boundingRect.x + boundingRect.width / 2;
                  const offset = Math.abs(itemCenter - centerOffset);
                  if (offset < smallestOffset) {
                    smallestOffset = offset;
                    mostCenteredIndex = index;
                  }
                }
              });
              setVisiblePackage(mostCenteredIndex);
            }}
          >
            {positions.map((position, index) => (
              <Link href="/jobopportunity">
                <span ref={refPackages[index]}>
                  <Package
                    title={position.fields.position}
                    iconPath="/images/icons/Icon-51.svg"
                  ></Package>
                </span>
              </Link>))}
          </div>



          <div className="flex md:hidden justify-center">
            {refPackages.map((refPackage, index) =>
              <div style={{cursor: "pointer"}}
                onClick={() => {
                  refPackage["current"]?.scrollIntoView({
                    block: "nearest",
                    behavior: "smooth",
                  })
                }}
                className="flex-none pr-2 snap-center"
              >
                <div
                  className={`h-3 w-3 ${visiblePackage === index ? "bg-green-300" : "bg-white"
                    }`}
                ></div>
              </div>)}

          </div>

          <div className="flex place-content-start md:pl-28 pl-14 md:pt-28 pt-36">
            <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]"></div>
          </div>
          <div className="flex place-content-start">
            <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]"></div>
          </div>
        </div>

        <Content>
          <div className="bg-[#161616] md:pt-52 pt-20 text-white">
            <h1>{t("Varför jobba hos Altostruct?")}</h1>
          </div>

          <div className="md:grid md:grid-cols-2 grid-cols-1 md:pb-40 pb-40 place-items-center text-white">
            <div className="relative">
              <p className="relative pt-5 z-10 md:text-2xl text-xl pr-5">
                {" "}
                {t(
                  "Någon som älskar det de gör kommer alltid utföra sitt jobb bättre än någon som inte gör det. På grund av detta lägger vi stor vikt vid att para ihop rätt person med rätt projekt. Hos oss får du mycket individuellt ansvar och självständighet men också mycket stöd för att säkerställa att du utvecklas, både som utvecklare och person. Vi erbjuder kontinuerlig utbildning och kompetensutveckling. Vi strävar efter att hela tiden utmana traditionella arbetssätt för att på bästa sätt främja vår vision och se till att våra kunder får ta del av allt molnet har att erbjuda."
                )}
              </p>
              <div className="absolute top-10 left-96 md:w-40 md:h-40 rotate-45 opacity-40 bg-[#6024ff]"></div>
              <div className="absolute top-20 left-10 rotate-12 md:w-40 md:h-40 opacity-40 bg-[#6024ff]"></div>
            </div>

            <div className="pl-2">
              <div className="md:mt-5 mt-20">
                <div className="flex">
                  <p className="mb-2 mr-auto">Onboarding</p>
                  <p className="place-content-end">Erik Rehn </p>
                </div>
                <hr />
                <p className="mt-2">
                  {t(
                    "Vi tar hand om dig internt så du kan ta hand om våra kunder på bästa sätt"
                  )}
                  .
                </p>
              </div>

              <div className="md:mt-20 mt-5">
                <div className="flex">
                  <p className="mb-2 mr-auto">{t("Balans")}</p>
                  <p className="place-content-end">Mustafa Ali</p>
                </div>
                <hr />
                <p className="mt-2">
                  {t(
                    "Det är viktigt för oss att man kan skapa en balans mellan jobb och fritid för att leverera de bästa resultaten"
                  )}
                  .
                </p>
              </div>

              <div className="md:mt-20 mt-5">
                <div className="flex">
                  <p className="mb-2 mr-auto">{t("Samhörighet")}</p>
                  <p className="place-content-end">Joakim Tornert</p>
                </div>
                <hr />
                <p className="mt-2">
                  {t(
                    "Hos oss har du möjlighet att föra fram egna idéer och hjälpa andra medarbetare utvecklas i deras kompetens"
                  )}
                  .
                </p>
              </div>
            </div>
          </div>

          <Form></Form>
        </Content>
      </div>
      <Footer />
    </>
  );
}

export default Carrer;
