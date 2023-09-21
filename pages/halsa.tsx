import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
import WordCircled from "components/Word-Circled/Word";
import tailwindConfig from "tailwind.config";
import PageStart from "@components/PageStart";
import BigList from "@components/BigList";
import Button from "@components/Button/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Quotes from "@components/Quotes";
import Image from "next-image-export-optimizer";
import Formshort from "@components/Form-short";

function About(props: { code: string }) {
  const { t } = useTranslation();
  const lightBg = tailwindConfig.theme.light;
  const quotes = require(".data/contentful/customerQuote/all.json")


  return (
    <>
      <SEO
        title={t("Altostruct | AWS Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>

      <div className="bg-[#161616] md:pb-20 pb-10">
        <Content>
          <PageStart
            title={
              <div>
                {t("Det är dags att")}{" "}
                <WordCircled borderCircle={true}>
                  {t("effektivisera")}
                </WordCircled>{" "}
                {t("ditt företag inom hälsa med AWS")}
              </div>
            }
            mainContent={<Image
              height={1024}
              width={1024}
              src="/images/green-clock.png"
              alt=""
            />}
            cta={<div className="flex gap-2 md:justify-start justify-center">
              <Button className="group" icon={
                <div className="group-hover:translate-x-1 transition-all">
                  <svg height={"1.2em"} id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                    <path
                      fill="#c3eec3"
                      d="m138.08,71.7v16.59h-16.59v16.59h-16.59v-16.59H21.92v-16.59h82.97v-16.59h16.59v16.59h16.59Zm-33.19-33.19v16.59h-16.59v-16.59h16.59Zm-16.59,66.37h16.59v16.59h-16.59v-16.59Z" />
                  </svg>
                </div>
              }
                link="/contact">{t("Kontakta oss")}</Button>
            </div>}

          ></PageStart>

        </Content>

        <Content className="mt-40 md:mt-0">
          <Quotes counter={3} data={quotes.map((item: any) => ({
            quote: item.fields.quote,
            author: item.fields.author,
            role: item.fields.authorsRole,
            company: {
              name: item.fields.customer.fields.name,
              url: item.fields.customer.fields.link,
            }
          }))}></Quotes>
        </Content>

        <Content>
          <div className="md:pt-40 pt-20 md:flex">
            <p className="md:text-4xl text-3xl">
              <span className="text-[#c3eec3]"></span>
              AWS <span className="text-[#c3eec3]">Optimerar</span> hälsobranschen genom att möjliggöra snabb och säker åtkomst till patientdata, <span className="text-[#c3eec3]">Automatiserar </span>
              administrativa uppgifter och leder till en mer avancerad  <span className="text-[#c3eec3]">Dataanalys</span> som genererar mer välgrundade beslut. Detta sänker kostnader samtidigt som det ökar pålitligheten.
            </p>
          </div>

          <div className="md:pt-32 pt-12 pb-10">
            <BigList
              items={[
                {
                  title: t("Effektivisera"),
                  description: t(
                    "AWS tillåter hälsoföretag och sjukhus att implementera nya funktioner snabbare samt underlättar datahantering."
                  ),
                  image: "/images/productivity-green.png",
                },
                {
                  title: t("Automatisera"),
                  description: t(
                    "Automatisering i molnet frigör vårdpersonal från repetitiva uppgifter, vilket möjliggör bättre fokus på patientvård och beslutsfattande."
                  ),
                  image: "/images/automate.png",
                },
                {
                  title: t("Analysera"),
                  description: t(
                    "En mer avancerad dataanalys genererar insikter som förbättrar vårdkvaliteten och därmed patientresultaten."
                  ),
                  image: "/images/analyze2.0.png",
                },
              ]}
            ></BigList>
          </div>
        </Content>

        {/* <Content className="md:mt-20 mt-40">
          <ReferenceCases data={getReferenceCases()} start={0} end={3}></ReferenceCases>
        </Content > */}




        <Content>
          <div
            className="text-white md:pt-20 pt-20 md:w-4/5 mb-10"
            style={{ fontFamily: "KHTeka-Light" }}
          >
            <p className="md:text-4xl text-4xl" style={{ lineHeight: "1.4" }}>
              {t("Vill du veta mer om Altostruct?")}{" "}
              <br />

              {t("Hör av dig till oss så ")}
              <WordCircled borderCircle> Berättar </WordCircled>
              {t(" vi mer!")}

            </p>
          </div>
          <div id="#contact">
            <Formshort></Formshort>
          </div>
        </Content>
      </div>
      <Footer />
    </>
  );
}

export default About;
