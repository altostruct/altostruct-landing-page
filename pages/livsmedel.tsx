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
            mainContent={<img
              src="/images/livsmedel-green.png"
              alt=""
            />}
            cta={<div className="flex gap-2 md:justify-start justify-center">
              <div className="hidden md:flex"><Button link="/contact">{t("Boka konsultation")}</Button></div>
              <div className="md:hidden"><Button link="/contact">{t("Boka konsultation")}</Button></div>
            </div>}

          ></PageStart>

        </Content>

        <Content className="mt-20">
          <Quotes data={quotes.map((item: any) => ({
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
          <div className="md:pt-40 pt-20 md:flex justify-center text-center">
            <p className="md:text-4xl text-3xl text-center">
              <span className="text-[#c3eec3]"></span>

              Molntjänster <span className="text-[#c3eec3]">optimerar</span> agilitet, lagerhantering och kundupplevelse. <span className="text-[#c3eec3]">Skalbarheten</span> hanterar efterfrågan, <span className="text-[#c3eec3]">dataanalys</span> ger smarta beslut.
            </p>
          </div>

          <div className=" pt-12 pb-10">
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
                    "AWS minskar behovet av dyra infrastrukturinvesteringar och erbjuder istället betalning baserad på faktisk användning."
                  ),
                  image: "/images/scale-green.png",
                },
                {
                  title: t("Analysera"),
                  description: t(
                    "Analysera i molnet av stora mängder data för att dra insikter som förbättrar försäljning och lagerhantering."
                  ),
                  image: "/images/analysis-green.png",
                },
              ]}
            ></BigList>
          </div>
        </Content>

        <Content className="mt-10">
          <Card title={"Våra framgångar inom branchen"}>
            <div className="flex flex-col md:h-96 md:flex-row gap-24 md:gap-3 mt-4 divide-gray-800 divide-2">
              {getReferenceCases().slice(3, 5).map((item: any, index: number) => {
                return <div className="md:w-1/3  text-gray-300 flex flex-col md:first:pl-0 md:px-6 md:last:pr-0" key={index}>
                  <div className="flex justify-between">
                    <div className="mb-3">
                      <p className="text-2xl md:text-3xl mb-3">{item.fields.title}</p>
                      <div className="text-xl flex gap-1">
                        {item.fields.tags?.slice(0, 5).map((tag: string, index: number) => {
                          return <WordCircled key={index} borderCircle>{tag}</WordCircled>
                        })}
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-ellipsis overflow-hidden flex-grow">{item.fields.shortDescription} </p>
                  <Button type="secondary" link={"/cases/" + item.fields.slug} className="mt-4 ml-auto align-bottom">Läs mer</Button>
                </div>
              })}
            </div>
          </Card>
        </Content >

       

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
