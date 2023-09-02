import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import * as fs from "fs";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
import WordCircled from "components/Word-Circled/Word";
import TeamImage from "components/TeamImages/Image";
import TransitionSquares from "@components/TransistionSquares";
import tailwindConfig from "tailwind.config";
import PageStart from "@components/PageStart";
import BigList from "@components/BigList";
import StaticSidebar from "@components/StaticSidebar/StaticSidebar";
import BorderedPanel from "@components/BorderedPanel";
import CloudRain from "@components/CloudRain";
import SmallCity from "@components/3d/SmallCity";
import NoSSR from "@components/NoSSR";
import Button from "@components/Button/Button";
import Images from "@components/Images";
import { ContentfulPost, getContentfulPosts } from "utils/contentful";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Quotes from "@components/Quotes";
import Card from "@components/Card";
import { getContentfulProducts, getReferenceCases, getReferenceCasesFromProducts } from "utils/contentful";
import ReferenceCases from "@components/ReferenceCases";
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
                  {t("Underhållning & Gaming")}
                </WordCircled>{" "}
                {t("med molnet")}
              </div>
            }
            mainContent={<Image
              width={1024}
              height={1024}
              className="w-full"
              src="/images/gaming-controller-green.png"
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
          <div className="md:pt-40 pt-20 md:flex justify-center">
            <p className="md:text-4xl text-3xl">
              <span className="text-[#c3eec3]"></span>

              Molnspel erbjuder högkvalitativ <span className="text-[#c3eec3]">Spelupplevelse</span> på olika enheter genom <span className="text-[#c3eec3]">Avlägsna Servrar</span>, samtidigt som <span className="text-[#c3eec3]">Flexibel</span> och enkel åtkomst till spelet skapar smidighet. </p>
          </div>

          <div className=" pt-12 pb-10">
            <BigList
              items={[
                {
                  title: t("Spelupplevelse"),
                  description: t(
                    "Cloudtjänster tillåter livsmedelsföretag att enkelt öka eller minska IT-resurser baserat på efterfrågan."
                  ),
                  image: "/images/productivity-green.png",
                },
                {
                  title: t("Avlägsna Servrar"),
                  description: t(
                    "AWS minskar behovet av dyra infrastrukturinvesteringar och erbjuder istället betalning baserad på faktisk användning."
                  ),
                  image: "/images/cloudgaming.png",
                },
                {
                  title: t("Flexibel"),
                  description: t(
                    "Analysera i molnet av stora mängder data för att dra insikter som förbättrar försäljning och lagerhantering."
                  ),
                  image: "/images/analyze.png",
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
