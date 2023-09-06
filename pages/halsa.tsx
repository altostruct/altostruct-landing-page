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

function About(props: { code: string }) {
  const { t } = useTranslation();
  const lightBg = tailwindConfig.theme.light;
  const quotes = require(".data/contentful/customerQuote/all.json")


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
                {t("Effektivisera ditt företag inom")}{" "}
                <WordCircled borderCircle={true}>
                  {t("Livsmedel")}
                </WordCircled>{" "}
                {t("med molnet")}
              </div>
            }
            mainContent={<Image
              height={1024}
              width={1024}
              src="/images/green-clock.png"
              alt=""
            />}
            cta={<div className="flex gap-2 md:justify-start justify-center">
              <div className="hidden md:flex"><Button link="/contact">{t("Boka konsultation")}</Button></div>
              <div className="md:hidden"><Button link="/contact">{t("Boka konsultation")}</Button></div>
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
          <div className="md:pt-40 pt-20 md:flex">
            <p className="md:text-4xl text-3xl">
              <span className="text-[#c3eec3]"></span>

              Molnet <span className="text-[#c3eec3]">Effektiviserar</span> hälsobranschen genom att möjliggöra snabb och säker åtkomst till patientdata, <span className="text-[#c3eec3]">Automatisering</span> av administrativa uppgifter och avancerad  <span className="text-[#c3eec3]">Dataanalys</span> ger smarta beslut.
            </p>
          </div>

          <div className=" pt-12 pb-10">
            <BigList
              items={[
                {
                  title: t("Effektivisera"),
                  description: t(
                    "Cloudtjänster tillåter livsmedelsföretag att enkelt öka eller minska IT-resurser baserat på efterfrågan som behövs."
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
                    "Molnbaserad dataanalys inom hälsobranschen ger insikter som förbättrar vårdkvaliteten och patientresultaten."
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
            <Form></Form>
          </div>
        </Content>
      </div>
      <Footer />
    </>
  );
}

export default About;
