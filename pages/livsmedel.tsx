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
  const industry = require(".data/contentful/industry/all.json")
  const livsmedel = industry[0]


  return (
    <>
      <SEO
        title={t("Altostruct | AWS Services & Support")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>

      <div className="bg-[#161616] md:pb-20 pb-10">
        <Content>
          <PageStart
            title={
              <div>
                {livsmedel.fields.textTitleStart}
                {" "}
                <WordCircled borderCircle={true}>
                  {livsmedel.fields.titleWordCirled}
                </WordCircled>{" "}
                {livsmedel.fields.textTitleEnd}
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
          <div className="md:pt-40 pt-24 md:pb-0 pb-10 md:flex">
            <p className="md:text-3xl text-3xl">
              {livsmedel.fields.beforeFirstKeyword} <span className="text-[#c3eec3]"> {livsmedel.fields.textFirstKeyword} </span>
              {livsmedel.fields.beforeSecondKeyword} <span className="text-[#c3eec3]"> {livsmedel.fields.textSecondKeyword} </span>
              {livsmedel.fields.beforeThirdKeyword} <span className="text-[#c3eec3]"> {livsmedel.fields.thirdKeyWord} </span>{livsmedel.fields.afterThirdKeyword}
            </p>
          </div>

          <div className="md:pt-32 pt-12 md:pb-10">
            <BigList
              items={[
                {
                  title: `${livsmedel.fields.keyword1}`,
                  description: `${livsmedel.fields.textKeyword1}`,
                  image: "/images/productivity-green.png",
                },
                {
                  title: `${livsmedel.fields.keyword2}`,
                  description: `${livsmedel.fields.textKeyword2}`,
                  image: "/images/scale-green.png",
                },
                {
                  title: `${livsmedel.fields.keyword3}`,
                  description: `${livsmedel.fields.textKeyword3}`,
                  image: "/images/analysis-green.png",
                },
              ]}
            ></BigList>
          </div>
        </Content>

        <Content>
          <div
            className="text-white md:pt-20 pt-10 md:w-4/5 mb-10"
            style={{ fontFamily: "KHTeka-Light" }}
          >
            <p className="md:text-3xl text-3xl">
              Vill du veta mer om hur vi jobbar med livsmedel?
              <br />
              Hör av dig till oss så berättar vi mer!

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
