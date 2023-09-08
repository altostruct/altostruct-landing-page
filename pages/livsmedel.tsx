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
  const referenceCases = require(".data/contentful/referenceCases/all.json")


  return (
    <>
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>

      <div className="bg-[#161616] md:pb-20 pb-10">
        <Content>
          <PageStart
            title={
              <div>
                {t("Det är dags att effektivisera ditt företag inom")}{" "}
                <WordCircled borderCircle={true}>
                  {t("Livsmedel")}
                </WordCircled>{" "}
                {t("med AWS")}
              </div>
            }
            mainContent={<Image
              width={1024}
              height={1024}
              src="/images/livsmedel-green.png"
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

        <Content className="mt-20">
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
          <div className="md:pt-40 pt-20 pb-20 md:flex">
            <p className="md:text-3xl text-3xl">
              Molntjänster <span className="text-[#c3eec3]">optimerar</span> agilitet, lagerhantering och kundupplevelse. 
              Låt inte brist på kunskap inom AWS, tidspress eller stora mängder komplex data stå i er väg för att sänka kostnader och öka nöjdhet hos kunder och personal. 
              Kort sagt, <span className="text-[#c3eec3]">skalbarheten</span> hanterar efterfrågan, <span className="text-[#c3eec3]">dataanalys</span> ger smarta beslut.
            </p>
          </div>

          <div className="md:pt-32 pt-12 pb-10">
            <BigList
              items={[
                {
                  title: t("Optimera"),
                  description: t(
                    "Cloudtjänster tillåter livsmedelsföretag att enkelt öka eller minska IT-resurser baserat på efterfrågan."
                  ),
                  image: "/images/productivity-green.png",
                },
                {
                  title: t("Skala"),
                  description: t(
                    "AWS låter dig skala upp och ner beroende på mängden traffik. Strunta i dyra investeringar i infrastruktur och hårdvara och betala bara för det du faktiskt använder."
                  ),
                  image: "/images/scale-green.png",
                },
                {
                  title: t("Analysera"),
                  description: t(
                    "Processa och analysera stora mängder data för att dra insikter som förbättrar försäljning och lagerhantering."
                  ),
                  image: "/images/analysis-green.png",
                },
              ]}
            ></BigList>
          </div>
        </Content>




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
