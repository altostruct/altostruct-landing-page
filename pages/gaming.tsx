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


function About(props: { code: string }) {
  const { t } = useTranslation();
  const lightBg = tailwindConfig.theme.light;

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
              <>
                {t("Hur")}{" "}
                <WordCircled borderCircle={true}>
                  {t("Livsmedel")}
                </WordCircled>{" "}
                {t("branchen är kopplad till molnet ")}
              </>
            }
            mainContent={<img
              src="/images/gaming-controller-neon.png"
              alt=""
            />}            
            cta={<div className="flex gap-2">
              <div className="hidden md:flex"><Button link="/contact">{t("Boka konsultation")}</Button></div>
              <div className="flex md:hidden"><Button link="/contact">{t("Boka konsultation")}</Button></div>
              <div className="flex md:hidden"><Button link="/contact">{t("Boka konsultation")}</Button></div>

            </div>}
            
          ></PageStart>

        </Content>

        <Content>
          <div className="pt-20">
            <p className="text-4xl text-[#c3eec3]">
              Livsmedel
            </p>
            <p className="text-xl md:w-4/5">
              Livsmedelsbranschen drar nytta av molntjänster genom att optimera verksamhetens agilitet, effektivisera lagerhantering och förbättra kundupplevelsen. Molntjänster möjliggör snabb skalbarhet, vilket är avgörande för att hantera varierande efterfrågan och säsongssvängningar. Data om försäljning, konsumentbeteenden och lagerstatus kan lagras och analyseras effektivt i molnet, vilket informerar smarta beslut.
            </p>
          </div>

          <div className=" pt-32 pb-10">
            <p className="text-left mb-12 text-3xl">{t("Fördelarna med livsmedel")}</p>
            <BigList
              items={[
                {
                  title: t("Skalbarhet och Flexibilitet"),
                  description: t(
                    "Cloudtjänster tillåter livsmedelsföretag att enkelt öka eller minska IT-resurser baserat på efterfrågan, vilket ger flexibilitet att hantera variationer i verksamheten."
                  ),
                  image: "/images/icons/Icon-52.svg",
                },
                {
                  title: t("Effektivitet i Datahantering"),
                  description: t(
                    "Genom att använda molntjänster kan branschen hantera och analysera stora mängder data för att dra insikter som förbättrar försäljning och lagerhantering."
                  ),
                  image: "/images/icons/Icon-52.svg",
                },
                {
                  title: t("Kostnad"),
                  description: t(
                    "Cloudtjänster minskar behovet av dyra infrastrukturinvesteringar och erbjuder istället betalning baserad på faktisk användning, vilket sparar kostnader över tiden."
                  ),
                  image: "/images/icons/Icon-52.svg",
                },
              ]}
            ></BigList>
          </div>
        </Content>
        
        <Content>
          <div className="md:flex pb-20">
          <div className="md:w-1/3 md:first:pl-0 md:px-6 md:last:pr-0 pb-10">
            <div className="flex justify-between">
              <div className="mb-3">
                <p className="text-2xl md:text-4xl mb-2">Saluto</p>
                <div className="text-xl flex gap-1">
                  <WordCircled borderCircle>Hälsa</WordCircled>
                  <WordCircled borderCircle>GDRP</WordCircled>
                  <WordCircled borderCircle>GDRP</WordCircled>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-8"><img width={100} height={100} alt="" src="/images/icons/aws.svg"></img></div>
                <div className="w-8"><img width={100} height={100} alt="" src="/images/icons/aws.svg"></img></div>
              </div>
            </div>
            <p className="text-xl">Saluto är en medtech startup. Altostruct samarbetade med Saluto för att bygga en app som ger användarna möjlighet att både ge och få information om deras nuvarande hälsotillstånd.
            </p>
          </div>
            <div className="md:w-1/3 md:first:pl-0 md:px-6 md:last:pr-0 pb-10">
              <div className="flex justify-between">
                <div className="mb-3">
                  <p className="text-2xl md:text-4xl mb-2">Saluto</p>
                  <div className="text-xl flex gap-1">
                    <WordCircled borderCircle>Hälsa</WordCircled>
                    <WordCircled borderCircle>GDRP</WordCircled>
                    <WordCircled borderCircle>GDRP</WordCircled>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8"><img width={100} height={100} alt="" src="/images/icons/aws.svg"></img></div>
                  <div className="w-8"><img width={100} height={100} alt="" src="/images/icons/aws.svg"></img></div>
                </div>
              </div>
              <p className="text-xl">Saluto är en medtech startup. Altostruct samarbetade med Saluto för att bygga en app som ger användarna möjlighet att både ge och få information om deras nuvarande hälsotillstånd.
              </p>
            </div>
            <div className="md:w-1/3 md:first:pl-0 md:px-6 md:last:pr-0">
              <div className="flex justify-between">
                <div className="mb-3">
                  <p className="text-2xl md:text-4xl mb-2">Saluto</p>
                  <div className="text-xl flex gap-1">
                    <WordCircled borderCircle>Hälsa</WordCircled>
                    <WordCircled borderCircle>GDRP</WordCircled>
                    <WordCircled borderCircle>GDRP</WordCircled>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8"><img width={100} height={100} alt="" src="/images/icons/aws.svg"></img></div>
                  <div className="w-8"><img width={100} height={100} alt="" src="/images/icons/aws.svg"></img></div>
                </div>
              </div>
              <p className="text-xl">Saluto är en medtech startup. Altostruct samarbetade med Saluto för att bygga en app som ger användarna möjlighet att både ge och få information om deras nuvarande hälsotillstånd.
              </p>
            </div>
          </div>
        </Content>
        
        <Content className="bg-[#1f1f1f]  border-gray-800 p-6 rounded-xl">
          <Carousel centerMode={false} showThumbs={false} showStatus={false} swipeable showArrows={false} autoPlay className="p-6">
            {new Array(2).fill(null).map((_, index) => {
              return <div key={index} className="text-left ">
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="flex w-fit gap-2">
                      <img alt="cite" className="w-6 h-6" src={"/images/icons/citat-icon-67.svg"} />
                      <img alt="cite" className="w-6 h-6" src={"/images/icons/citat-icon-67.svg"} />
                    </div>
                  </div>
                  <cite className="text-2xl md:text-4xl not-italic">
                    They truly showed us how we can use public cloud to reduce time-to-market as we develop our digital portfolio
                  </cite>
                  <div className="flex justify-between text-gray-200">
                    <div>
                      <p className="font-extrabold">Karl Ingestam</p>
                      <p>CTO @ Purply</p>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </Carousel>
        </Content>

        <Content>
          <div
            className="text-white md:pt-20 pt-20 md:w-4/5 mb-10"
            style={{ fontFamily: "KHTeka-Light" }}
          >
            <p className="md:text-6xl text-3xl" style={{ lineHeight: "1.4" }}>
              {t("Vill du veta mer om Altostruct?")}{" "}
              <WordCircled borderCircle={true} color="blue">
                {t("hör av dig")}
              </WordCircled>{" "}
              {t("till oss så berättar vi mer!")}
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
