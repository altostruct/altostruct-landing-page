import * as React from "react";
import "@styles/global.scss";
import "./index.scss";

import Topbar from "@components/Topbar/Topbar";
import Footer from "@components/Footer/Footer";
import CardStack from "@components/CardStack/CardStack";
import Button from "@components/Button/Button";
import Carousel from "@components/Carousel/Carousel";
import CardWithHoverInfo from "@components/CardWithHoverInfo/CardWithHoverInfo";
// import CountUp from "@components/CountUp/CountUp";
import TeamImage from "../images/team.png";
import NrlyzeImage from "../images/nrlyze.png";
import FoodfactsImage from "../images/foodfacts.png";
import InfernceImage from "../images/inference.png";
import emailjs from "emailjs-com";

import EndImage from "../images/end.svg";
import Icon from "@components/Icon";

import TextAnimation from "@components/TextAnimation/TextAnimation";
import { useRef } from "react";
import SEO from "@components/SEO/SEO";
// import SEO from "../components/SEO/SEO";
import useTranslation from "../hooks/useTranslation";

interface FormInput {
  fullName?: string;
  email?: string;
  companyName?: string;
  phone?: string;
  message?: string;
  call_me?: string;
}

function IndexPage<T>(props: any) {
  const form = useRef<HTMLFormElement | null>(null);
  const { t, setLanguage, language } = useTranslation(props.location.pathname);
  const sendEmail = async (event: any) => {
    // Pervents a default post request associated with the form
    event.preventDefault();
    // if no form exist in the ref something went very wrong
    if (!form.current) {
      console.error("Something must have gone wrong...");
      return false;
    }

    const validateInput = (input: FormInput) => {
      const errors: string[] = [];

      //TODO: The push errors needs to be more beautiful

      // if (!input.fullName) errors.push("Provide a name!");
      if (!input.email) errors.push("Provide an email!");
      // if (!input.companyName) errors.push("Provide a company name!");
      // if (!input.phone) errors.push("Provide a phone nr!");
      // if (!input.message) errors.push("Provide a message!");

      if (errors.length === 0) return null;
      return errors;
    };

    const values: FormInput = {
      companyName: form.current.companyName.value,
      email: form.current.email.value,
      message: form.current.message.value,
      fullName: form.current.fullName.value,
      phone: form.current.phone.value,
      call_me: (form.current.call_me.value === true).toString(),
    };

    const errors = validateInput(values);

    if (errors !== null) {
      alert(errors.join("\n"));
      return;
    }

    try {
      await emailjs.sendForm(
        "service_xf3l6xg",
        "template_sjt8u7f",
        form.current,
        "user_k0ZJNxep5Jd9wlP37YY93"
      );

      alert(
        t(
          "Tack för ditt meddelande! Vi svarar till din mejladress ({{email}}) så snart vi kan. 🎈",
          { email: values.email }
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="page">
      <SEO
        title="Startup consulting for cloud and web"
        description="Stockholm based cloud and web consulting for startups"
        lang="en"
      />
      <SEO
        title="Startup consulting for cloud and web"
        description="Webbutvecklare i Stockholm med skräddarsydda lösningar för startups."
        lang="swe"
      />
      <Topbar pathName={props.location.pathname}></Topbar>

      <div className="content screen-height title">
        <Icon.Square className="top-image" />
        <div className="split-content sm-screen-height">
          <section>
            <h1 style={{ whiteSpace: "nowrap" }}>
              <TextAnimation>
                {[
                  // Keep best one on top
                  // since that is the one used when
                  // no javascript is enabled
                  t("Webbutvecklare."),
                  t("Flexibla tider."),
                  t("IOS Appar."),
                  t("Fasta priser."),
                  t("Designers."),
                  t("Börjar imorgon."),
                  t("Molnarkitekter."),
                  t("I Stockholm."),
                  t("Noll bindningstid."),
                ]}
              </TextAnimation>
              <span className="primary">{t("För startups")}.</span>
            </h1>
            <p className="subtitle">
              <span className="white-bg-text subtitle">
                {t(
                  "Webbutvecklare i Stockholm med skräddarsydda lösningar för startups."
                )}
              </span>
            </p>
            <Button className="space-right" link="#contact">
              {t("Kontakta oss")}
            </Button>
            <Button type="secondary" link="#about">
              {t("Se våra projekt")}
            </Button>
          </section>
        </div>
        <div className="split-content">
          <CardStack
            className="center"
            cards={[
              {
                description: t("Och mycket mer!"),
                image:
                  "https://as1.ftcdn.net/v2/jpg/02/63/40/02/1000_F_263400204_7k7rh0GjnWUYGEpLuyMu2E6dlywln34k.jpg",
                title: "Node.js",
              },
              {
                description: t("Bygga nytt frontend med ReactJS"),
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU",
                title: "React",
              },
              {
                description: t("Framtidssäkra med ett modernt ramverk"),
                image:
                  "https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png",
                title: "Node.js",
              },
              {
                description: t(
                  "Bygg din plattform med senaste cloudteknologin"
                ),
                image:
                  "data:image/png;base64,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",
                title: "Node.js",
              },
            ]}
          ></CardStack>
        </div>
      </div>

      <div
        style={{
          // Adding some extra padding due to the shadow for the card
          // since it on small screen takes up more than the whole screen.
          // Better solutions might exists but this works for now :)
          marginTop: "4em",
        }}
        className="content"
        id="about"
      >
        <div className="center-content">
          <section>
            <h1>
              <span className="white-bg-text">
                {t("Cloud- och webbkonsulter för startups")}
              </span>
            </h1>
            <p>
              <span className="white-bg-text">
                {t(
                  "Altostruct är en konsultfirma som arbetar primärt med " +
                    "molntjänster och har ett särskilt fokus på startups. Sedan 2020 " +
                    "har vi arbetat med många olika företag och hjälpt dem skapa allt " +
                    "från mobilappar till AI-organisationsmodeller."
                )}
              </span>
            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "2em 0" }}>Några fler projekt</h1>

        <Carousel>
          <CardWithHoverInfo
            img="https://www.altostruct.com/static/nrlyze-65e8c54783aba0c7ca352ea5fe471e7a.png"
            description="Nrlyze"
          />
          <CardWithHoverInfo
            img="http://www.altostruct.com/static/inference-64d54896a64b38e86bed0b8351caebea.png"
            description="Inference Labs"
          />
          <CardWithHoverInfo
            img="https://www.altostruct.com/static/foodfacts-3cb07a82dbc3f4de6cd53a383c88ac7b.png"
            description="Foodfacts"
          />
          <CardWithHoverInfo
            img="https://www.altostruct.com/static/foodfacts-3cb07a82dbc3f4de6cd53a383c88ac7b.png"
            description="Foodfacts"
          />
          <CardWithHoverInfo
            img="https://www.altostruct.com/static/foodfacts-3cb07a82dbc3f4de6cd53a383c88ac7b.png"
            description="Foodfacts"
          />
          <CardWithHoverInfo
            img="https://www.altostruct.com/static/foodfacts-3cb07a82dbc3f4de6cd53a383c88ac7b.png"
            description="Foodfacts"
          />
          <CardWithHoverInfo
            img="https://www.altostruct.com/static/foodfacts-3cb07a82dbc3f4de6cd53a383c88ac7b.png"
            description="Foodfacts"
          />
        </Carousel>
      </div>

      <div
        className="content showcase half-screen sm-flex-reverse"
        id="customers"
      >
        <div className="split-content">
          <section>
            <label>{t("Showcase")}</label>
            <h2>
              <span className="primary">{t("Mitt Nrlyze")}</span>
            </h2>
            <p>
              <span className="white-bg-text">
                {t(
                  "Nrlyze har skapat ett system av trådlösa sensorer som kan " +
                    "optimera parametrar gällande värmesystem i byggnader. Altostruct " +
                    "hjälpte Nrlyze bygga en portal som tillåter dem att överse " +
                    "byggnaderna och få sin data presenterad i grafer."
                )}
              </span>
            </p>
            <Button openNewTab link="https://www.nrlyze.se/" type="primary">
              {t("Se projekt")}
            </Button>
          </section>
        </div>
        <div className="split-content">
          <img src={NrlyzeImage}></img>
        </div>
      </div>

      <div className="content showcase half-screen">
        <div className="split-content">
          <img src={InfernceImage} />
        </div>
        <div className="split-content">
          <section>
            <label>{t("Showcase")}</label>
            <h2>
              <span className="primary">{t("Inference Labs")}</span>
            </h2>
            <p>
              {t(
                "En Medtech startup med målet att hjälpa sina kunder nå ett " +
                  "friskare liv. Altostruct hjälpte bygga en webbapplikation som " +
                  "läkarna kan använda som supportverktyg vid beslutsfattning."
              )}
            </p>
          </section>
        </div>
      </div>

      <div className="content showcase half-screen sm-flex-reverse">
        <div className="split-content">
          <section>
            <label>{t("Showcase")}</label>
            <h2>
              <span className="primary">{t("Foodfacts")}</span>
            </h2>
            <p>
              {t(
                "Foodfacts skapar digitala lösningar som med hjälp av AI vilket gör " +
                  "information om livsmedel lättillgängligt och transparent. " +
                  "Altostruct hjälpte till att bygga deras AWS molninfrastruktur och " +
                  "deras IOS/Android applikation."
              )}
            </p>
            <Button openNewTab link="https://www.foodfacts.se/" type="primary">
              {t("Se projekt")}
            </Button>
          </section>
        </div>
        <div className="split-content">
          <img src={FoodfactsImage}></img>
        </div>
      </div>

      <div className="image-right">
        <img src={EndImage} />
      </div>

      <div
        className="content"
        style={{ paddingBottom: "6em", paddingTop: "6em" }}
      >
        <div className="center-content cols mark">
          <div>
            <p className="no-break">{t("Använda teknologier")}</p>
            <h1 className="super-title">32</h1>
          </div>
          <div>
            <p className="no-break">{t("Antal projekt")}</p>
            <h1 className="super-title">25+</h1>
          </div>

          <div>
            <p className="no-break">{t("Startat")}</p>
            <h1 className="super-title">2020</h1>
          </div>
        </div>
      </div>
      <div className="image-left">
        <img src={EndImage} />
      </div>

      <div className="content screen-height">
        <div className="center-content">
          <h2>{t("Ansiktena bakom Altostruct")}</h2>
          <img
            className="shadow"
            src={TeamImage}
            style={{
              marginTop: "4vh",
              maxHeight: "70vh",
            }}
          />
        </div>
      </div>

      <div className="content" style={{ marginBottom: "4em" }} id="contact">
        <section>
          <h2 style={{ marginBottom: "1em" }}>{t("Kontakta oss")}</h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="content"
            style={{ padding: 0, gap: "4em" }}
          >
            <div className="contact-form" style={{ flexGrow: 1, width: "50%" }}>
              <label htmlFor="fullName">{t("För- och efternamn")}</label>
              <input type="text" id="fullName" name="from_name" />
              <label htmlFor="companyName">{t("Företag")}</label>
              <input type="text" id="companyName" name="company" />
              <label htmlFor="email">{t("Mejladress")}</label>
              <input type="email" id="email" name="reply_to" />
              <label htmlFor="phone">{t("Telefonnummer")}</label>
              <input type="number" id="phone" name="phone" />
              <br />
            </div>
            <div style={{ flexGrow: 1 }}>
              <label htmlFor="message">{t("Meddelande")}</label>
              <textarea id="message" name="message" rows={10}></textarea>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  marginBottom: "1em",
                }}
              >
                <label
                  htmlFor="callMe"
                  style={{
                    display: "inline-block",
                    marginRight: "1em",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "right",
                  }}
                >
                  {t("Jag gillar att prata i telefon, ring mig!")}
                </label>
                <input type="checkbox" id="callMe" name="call_me" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Button type="primary" formAction="submit">
                  {t("Skicka")}
                </Button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div className="end-image">
        <img src={EndImage} />
      </div>

      <Footer></Footer>
    </main>
  );
}

export default IndexPage;
