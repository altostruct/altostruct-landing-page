import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
import WordCircled from "components/Word-Circled/Word";
import tailwindConfig from "tailwind.config";
import PageStart from "@components/PageStart";
import Image from "next-image-export-optimizer";
import Button from "@components/Button/Button";
import Formshort from "@components/Form-short";
function About(props: { code: string }) {
  const { t } = useTranslation();
  const lightBg = tailwindConfig.theme.light;

  return (
    <>
      <SEO
        title={t("Altostruct | About")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>

      <div className="bg-[#161616] md:pb-20 pb-10">
        <Content>
          <PageStart
            title={
              <>
                Ta ditt företag till nya höjder med cloud.
              </>
            }
            // description={"Bygger skalbara lösningar sedan 2020"}
            mainContent={
              <Image className="scale-100 w-full" src="/images/team.png" height={1024} width={1024} alt=""></Image>
            }
            cta={<div className="flex gap-2">
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
        </Content >

        <Content className="bg-[#1f1f1f] p-6 md:p-16 mt-20 rounded-xl">
          <h1>Sedan 2020 har vi arbetat med senaste teknologin</h1>
          <div className="flex gap-8 mt-8 items-start flex-col md:flex-row">
            <p className="md:text-2xl md:w-1/2">
              Altoustruct AB är ett innovativt konsultbolag grundat 2020 och fokuserat på att leverera skräddarsydda lösningar inom Amazon Web Services (AWS)-ekosystemet.
              <br></br><br></br> Med en passion för teknologi och en djup förståelse för molninfrastruktur erbjuder vi expertis av högsta kvalitet för att stödja företag i deras digitala omvandlingsresa. Vår team av erfarna molntekniker och AWS-arkitekter är dedikerade till att optimera och modernisera företags IT-infrastruktur med hjälp av de senaste verktygen och tjänsterna som AWS-plattformen erbjuder.
            </p>
            <p className="md:text-2xl md:w-1/2">
              Från att designa skalbara och säkra molnarkitekturer till att implementera DevOps-principer och automatisering, är vår expertis mångsidig och anpassad för att passa dina unika behov.
              <br></br>
              <br></br>
              Har ni några frågor eller vill veta mer om oss. Tveka inte på att höra av dig!
              <br></br>
              <br></br>
            </p>
            <div className="text-sm" >
              <Button>Kontakta oss</Button>
            </div>
          </div>
          <div>

            <p className="mt-12">{"- Altostruct Teamet"}</p>
          </div>
        </Content>
        <Content className="mt-12 flex-wrap flex">
          <div className="w-1/2 mt-12 md:mt-48 md:p-6">
            <Image alt="" className="w-full h-full object-contain" src="/images/MISC/Altostruct_office-39.jpg" width={1024} height={1024} />
          </div>
          <div className="w-1/2 md:p-6">
            <Image alt="" className="w-full h-full object-contain" src="/images/MISC/Frame 1 (90).png" width={1024} height={1024} />
          </div>
          <div className="m-auto w-1/2 md:p-6">
            <Image alt="" className="w-full h-full object-contain" src="/images/MISC/Altostruct_office-34.jpg" width={1024} height={1024} />
          </div>

        </Content >







        <Content className="md:mt-10 mt-20">
          <div
            className="text-white md:pt-20 pt-10 md:w-4/5 mb-10"
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
            <Formshort></Formshort>
          </div>
        </Content>
      </div >
      <Footer />
    </>
  );
}

export default About;
