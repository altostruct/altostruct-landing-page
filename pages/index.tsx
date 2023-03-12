/* eslint-disable @next/next/no-img-element */
import SEO from "@components/SEO";
import classNames from "classnames";
import Button from "components/Button/Button";
import Cite from "components/Cite";
import Content from "components/Content";
import Footer from "components/Footer/Footer";
import Form from "components/Form";
import Topbar from "components/Topbar/Topbar";
import useTranslation from "hooks/useTranslation";
import WordCircled from "components/Word-Circled/Word";
import WordSquare from "components/Word-Square/Word"

export default function Home() {
  const { t } = useTranslation();
  const colors = ["green", "blue", "purple", "red"];

  const projects = [
    {
      img: (
        <img
          alt="Customer Foodfacts"
          className="max-h-56"
          src="/images/customers/foodfacts.png"
        ></img>
      ),
      title: "Foodfacts",
      description: t(
        "Foodfacts hjälper dig göra medvetna val gällande mat och hälsa.  Altostruct ledde utvecklingen av en mobilapplikation i samarbete med ett offshoreteam. Applikationen är byggd på AWS med React Native."
      ),
    },
    {
      img: (
        <img
          alt="Customer Saluto"
          className="max-h-56"
          src="/images/customers/saluto.png"
        ></img>
      ),
      title: "Saluto",
      description: t(
        "En Medtech startup med målet att hjälpa sina kunder nå ett friskare liv. Altostruct hjälpte till att bygga en app som tillåter användarna att både ge och få information om deras nuvarande hälsa."
      ),
    },
    {
      img: null,
      title: "Tendium",
      description: t(
        "Hemsida som tillåter kunder att enkelt följa, hitta och ansöka till offentliga upphandlingar. Altostruct la grunden för infrastrukturen till deras microservice arkitektur."
      ),
    },
    {
      img: (
        <img
          alt="Customer Nrlyze"
          className="max-h-56"
          src="/images/customers/nrlyze.png"
        ></img>
      ),
      title: "Nrlyze",
      description: t(
        "Nrlyze har skapat ett system av trådlösa sensorer som kan optimera parametrar gällande värmesystem i byggnader. Altostruct hjälpte Nrlyze bygga en portal som presenterar datan i grafer för att ge dem en överblick över värmesystemet."
      ),
    },
  ];

  return (
    <>
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>
      <div className="bg-[#161616]">
        <Content>
          <div className="mb-6 items-center md:text-left text-center text-white">
            <p className="pt-20 md:pt-48 mt-9 text-3xl md:text-6xl text-left md:w-3/4">Lorem <WordCircled>{t("Lorem")}</WordCircled> dolor sit amet adipisicing elit lorem <WordSquare>{t("Lorem")}</WordSquare> dolor sit amet <WordSquare>{t("Lorem")}</WordSquare></p>
            <p className="mt-5 mb-72 text-left">{t("Lorem ipsum dolor sit amet consectetur adipisicing elit/consectetur adipisicing elit.")}</p>
            <div className="rotate-90 text-white text-xs origin-top-right flex absolute md:bottom-80 bottom-72 right-5">
              <img src="/images/icons/arrow-icon.svg" width="20" decoding="async" loading="lazy"></img>
              <p className="pl-2 text-right">Är du vår nästa kollega?</p>
            </div>
          </div>
          </Content>

          <div className="items-center text-white bg-[#292929]">
              <div className="flex place-content-end">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
              <div className="flex place-content-end md:pr-28 pr-14">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
              <div className="flex place-content-end">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
              <div className="flex place-content-center">
              <img className="flex place-content-center w-20" src="/images/icons/arrow-icon.svg" decoding="async" loading="lazy"></img>
              </div>
              <div className="flex place-content-center text-center">
                <p className="font-bold">
                This should be a small text
                </p>
              </div>
              <div className="grid grid-cols-12">
                <div className="md:col-start-4 md:col-span-6 col-start-2 col-span-10 mt-4 text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam libero deserunt, architecto consequuntur sint maiores officia praesentium cum ipsam in dignissimos quod corporis odit, facere numquam repudiandae illum est
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum fugiat sint nobis, rem ipsa officiis. Placeat est quas vero nobis. Repudiandae fuga voluptatem nostrum, ipsa laborum quidem ratione accusantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta, quo enim magni quidem velit ex repudiandae sed, nam similique ea eaque vel perspiciatis suscipit voluptatibus ducimus rem corporis nobis.
                </div>
              </div>

              <div className="grid grid-cols-1 mt-36 w-11/12 md:w-11/12 m-auto">
                <div className="col-start-1 text-xl">Våra startpaket</div>
                <div className="col-start-1 text-sm">Våra startpaket/Våra Våra Våra Våra Vår aVåra Vår aVå ra </div>
              </div>

              <div>
                
              </div>


          </div>
          
         

          <Content>
          <div className="mb-12 mt-96 grid md:text-left text-center grid-cols-5 gap-4">
            {projects.map((project, index) => {
              const isBig = index % 3;
              return (
                <div
                  key={index}
                  className={classNames(
                    "p-10 flex rounded-md col-span-5 ",
                    {
                      "lg:col-span-2": isBig,
                      "lg:col-span-3": !isBig,
                    },
                    "bg-gradient-" + colors[index % colors.length]
                  )}
                >
                  <div className="m-auto flex-col md:flex-row flex gap-3">
                    <div className="m-auto text-white flex-1">
                      <h3 className="font-bold">{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className={classNames("flex-1 m-auto h-56 max-w-sm")}>
                      {project.img}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-dark-dotted mt-24 rounded-3xl">
            <div className="text-white p-10 py-32 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex">
                <div className="m-auto">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {t("Se vad våra ")}
                    <i className="text-green-500">{t("grymma kunder ")}</i>
                    {t("har att säga")}
                  </h1>
                  <Button>{t("Bli vår nästa kund")}</Button>
                </div>
              </div>
              <div className="flex ">
                <div className="m-auto flex gap-12 flex-col">
                  <Cite
                    cite={t(
                      "Med hjälp av Altostruct har vi kunnat utveckla vår lösning baserat på en" +
                        " svensk molnleverantör med hög grad av säkerhet, tillförlitlighet och regelefterlevnad."
                    )}
                    author={t("Peter Vesterberg - CEO Saluto AB")}
                  ></Cite>
                  <Cite
                    cite={t(
                      "Vi har samarbetat med Altostruct i två år. De har hjälp oss med allting ifrån " +
                        "infrastruktur till apputveckling för att bygga en skalbar och modern lösning."
                    )}
                    author={t("Erik Standin Pers - Founder Foodfacts")}
                  ></Cite>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20" id="contact">
            <Form></Form>
          </div>
        </Content>
      </div>
      <Footer />
    </>
  );
}
