import * as React from "react";
import "@styles/global.scss";
import "./index.scss";

import Topbar from "@components/Topbar/Topbar";
import Footer from "@components/Footer/Footer";
import CardStack from "@components/CardStack/CardStack";
import Button from "@components/Button/Button";
import TeamImage from "../images/team.jpeg";
import NrlyzeImage from "../images/nrlyze.png";
import FoodfactsImage from "../images/foodfacts.png";
import InfernceImage from "../images/inference.jpeg";
import emailjs from "emailjs-com";

import TextAnimation from "@components/TextAnimation/TextAnimation";
import { useRef } from "react";
// import SEO from "../components/SEO/SEO";
// import useTranslation from "src/hooks/useTranslation";

function IndexPage<T>() {
  const form = useRef();
  const email: React.MutableRefObject<HTMLInputElement> = useRef();
  const callMe: React.MutableRefObject<HTMLInputElement> = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    if (callMe.current.checked) {
      callMe.current.value = "Please call me!";
    }

    emailjs
      .sendForm(
        "service_xf3l6xg",
        "template_sjt8u7f",
        form.current,
        "user_k0ZJNxep5Jd9wlP37YY93"
      )
      .then(
        (result) => {
          alert(
            `Tack för ditt meddelande! Vi svarar till din mejladress (${email.current.value}) så snart vi kan. 🎈`
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="page">
      <Topbar />

      <div className="content screen-height title">
        <div className="split-content">
          <section>
            <h1 style={{ whiteSpace: "nowrap" }}>
              <TextAnimation>
                {[
                  "Flexibla utvecklare.",
                  "Utvecklare i Stockholm.",
                  "Webbutvecklare.",
                  "Solutions architects.",
                ]}
              </TextAnimation>
              <span className="primary">För startups.</span>
            </h1>
            <p>
              Stockholms-baserade utvecklare med skräddarsydda lösningar för
              startups. Vi finns här för att stötta er under er resa från
              startup och framåt!
            </p>
            <Button className="space-right">Kontakta oss</Button>
            <Button type="secondary">Se våra projekt</Button>
          </section>
        </div>
        <div className="split-content ">
          <CardStack
            className="center"
            cards={[
              {
                description: "Så himla nice.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU",
                title: "React",
              },
              {
                description: "Jomen absolut.",
                image:
                  "https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png",
                title: "Node.js",
              },
            ]}
          ></CardStack>
        </div>
      </div>

      <div className="content" id="about">
        <div className="center-content">
          <section>
            <h1>Hitta utvecklare har aldrig varit enklare</h1>
            <p>
              Altostruct är en konsultfirma som arbetar primärt med molntjänster
              och har ett särskilt fokus på startups. Sedan 2020 har vi arbetat
              med många olika företag och hjälpt dem skapa allt från mobilappar
              till AI-organisationsmodeller.
            </p>
          </section>
        </div>
      </div>

      <div className="content half-screen" id="customers">
        <div className="split-content">
          <section>
            <label>Showcase</label>
            <h2>
              <span className="primary">Mitt Nrlyze</span>
            </h2>
            <p>
              Stockholms-baserade utvecklare med skräddarsydda lösningar för
              startups. Vi finns här för att stötta er under er resa från
              startup och framåt!
            </p>
            <Button type="primary">Se projekt</Button>
          </section>
        </div>
        <div className="split-content">
          <img src={NrlyzeImage}></img>
        </div>
      </div>

      <div className="content half-screen">
        <div className="split-content">
          <img src={InfernceImage} />
        </div>
        <div className="split-content">
          <section>
            <label>Showcase</label>
            <h2>
              <span className="primary">Inference Labs</span>
            </h2>
            <p>
              En Medtech startup med målet att hjälpa sina kunder nå ett
              friskare liv. Genom att logga sina måltider och vanor ska de kunna
              få rekommendationer på hur de kan förbättra sin hälsa och sitt
              allmänna välmående.
            </p>
            <Button type="primary">Se projekt</Button>
          </section>
        </div>
      </div>

      <div className="content half-screen">
        <div className="split-content">
          <section>
            <label>Showcase</label>
            <h2>
              <span className="primary">Foodfacts</span>
            </h2>
            <p>
              Stockholms-baserade utvecklare med skräddarsydda lösningar för
              startups. Vi finns här för att stötta er under er resa från
              startup och framåt!
            </p>
            <Button type="primary">Se projekt</Button>
          </section>
        </div>
        <div className="split-content">
          <img src={FoodfactsImage}></img>
        </div>
      </div>

      <div className="content">
        <div className="center-content cols mark">
          <div>
            <p>Antal projekt</p>
            <h1>25 +</h1>
          </div>
          <div>
            <p>Antal utvecklare</p>
            <h1>10+</h1>
          </div>
          <div>
            <p>Startat</p>
            <h1>2020</h1>
          </div>
        </div>
      </div>

      {/* <div className="content">
        <div className="center-content">
          <p>
            Klick här för att läsa mer om om våran resa med våra grymma kunder
          </p>
          <Button type="secondary">Läs mer</Button>
        </div>
      </div> */}
      <div className="content screen-height">
        <div className="center-content">
          <h2>Ansikterna bakom Altostruct</h2>
          <img
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
          <h2 style={{ marginBottom: "1em" }}>Kontakta oss</h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="content"
            style={{ padding: 0, gap: "4em" }}
          >
            <div>
              <label htmlFor="fullName">För- och efternamn</label>
              <input type="text" id="fullName" name="from_name" />
              <label htmlFor="companyName">Namn på företag</label>
              <input type="text" id="companyName" name="company" />
              <label htmlFor="">Mejladress</label>
              <input type="email" id="email" name="reply_to" ref={email} />
              <label htmlFor="phone">Telefonnummer</label>
              <input type="number" id="phone" name="phone" />
              <br />
            </div>
            <div style={{ flexGrow: 1 }}>
              <label htmlFor="message">Meddelande</label>
              <textarea id="message" name="message" rows={10}></textarea>
              <div style={{ textAlign: "right" }}>
                <label
                  htmlFor="callMe"
                  style={{
                    display: "inline-block",
                    marginRight: "1em",
                    cursor: "pointer",
                  }}
                >
                  Jag vill bli uppringd under vanliga arbetstider
                </label>
                <input
                  ref={callMe}
                  type="checkbox"
                  id="callMe"
                  name="call_me"
                  style={{ marginRight: "2em" }}
                />
                <Button type="primary" formAction="submit">
                  Skicka
                </Button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </main>
  );
}

export default IndexPage;
