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

import TextAnimation from "@components/TextAnimation/TextAnimation";
// import SEO from "../components/SEO/SEO";
// import useTranslation from "src/hooks/useTranslation";

function IndexPage<T>() {
  return (
    <main className="page">
      <Topbar></Topbar>

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

      <div className="content">
        <div className="center-content">
          <section>
            <h1>Hitta utvecklare har aldrig varit enklare</h1>
            <p>
              Altostruct är en konsultfirma som arbetar primärt med molntjänster
              och har ett särskilt fokus på startups. Sedan 2020 har vi arbetat
              med många olika företag och hjälpt dem skapa allt från mobilappar
              till AI-organisationsmodeller.
            </p>
            <Button type="shiny">Läs mer om vår vision</Button>
          </section>
        </div>
      </div>

      <div className="content half-screen">
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

      <div className="content" style={{ marginBottom: "4em" }}>
        <section>
          <h2 style={{ marginBottom: "1em" }}>Kontakta oss</h2>

          <form
            action="/contact"
            method="POST"
            className="content"
            style={{ padding: 0, gap: "4em" }}
          >
            <div>
              <label htmlFor="fullname">För- och efternamn</label>
              <input type="text" id="fullname" />
              <label htmlFor="companyname">Namn på företag</label>
              <input type="text" id="companyname" />
              <label htmlFor="">Mejladress</label>
              <input type="email" id="email" />
              <label htmlFor="phone">Telefonnummer</label>
              <input type="number" id="phone" />
              <br />
            </div>
            <div style={{ flexGrow: 1 }}>
              <label htmlFor="message">Meddelande</label>
              <textarea id="message" rows={10}></textarea>
              <div style={{ textAlign: "right" }}>
                <label
                  htmlFor="callme"
                  style={{
                    display: "inline-block",
                    marginRight: "1em",
                    cursor: "pointer",
                  }}
                >
                  Jag vill bli uppringd under vanliga arbetstider
                </label>
                <input type="checkbox" id="callme" />
                <br />
                <br />
                <Button type="primary" formAction="submit">
                  Skicka
                </Button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <Footer></Footer>
    </main>
  );
}

export default IndexPage;
