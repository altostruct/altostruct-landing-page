import * as React from "react";
import "@styles/global.scss";
import "./index.scss";

import Topbar from "@components/Topbar/Topbar";
import Footer from "@components/Footer/Footer";
import CardStack from "@components/CardStack/CardStack";
import Button from "@components/Button/Button";
import Carousel from "@components/Carousel/Carousel";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TeamImage from "../images/team.jpeg";
// import SEO from "../components/SEO/SEO";
// import useTranslation from "src/hooks/useTranslation";

const IndexPage = () => {
  return (
    <main className="page">
      <Topbar></Topbar>

      <div className="content screen-height">
        <div className="split-content">
          <section>
            <h1>
              Flexibla utvecklare.
              <br />
              <span className="primary">För startups.</span>
            </h1>
            <p>
              Stockholms-baserade utvecklare med skräddarsydda lösningar för
              startups. Vi finns här för att stötta er under er resa från
              startup och framåt!
            </p>
            <Button className="space-right">Kontakta oss</Button>
            <Button type="secondary">See våra projekt</Button>
          </section>
        </div>
        <div className="split-content">
          <CardStack
            className="center"
            cards={[
              {
                description: "",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU",
                title: "asd",
              },
              {
                description: "",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU",
                title: "asd",
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
              med många olika företag och hjälpt dem skapa allt ifrån mobilappar
              till AI organisationsmodeller.
            </p>
            <Button type="shiny">Läs mer om våran vision</Button>
          </section>
        </div>
      </div>

      <div className="content half-screen">
        <div className="split-content">
          <section>
            <h2>
              Showcase
              <span className="primary"> Mitt Nrlyze.</span>
            </h2>
            <p>
              Stockholms-baserade utvecklare med skräddarsydda lösningar för
              startups. Vi finns här för att stötta er under er resa från
              startup och framåt!
            </p>
          </section>
        </div>
        <div className="split-content"></div>
      </div>

      <div className="content half-screen">
        <div className="split-content"></div>
        <div className="split-content">
          <section>
            <h2>
              Showcase
              <span className="primary"> Saluto.</span>
            </h2>
            <p>
              En Medtech startup med målet att hjälpa sina kunder nå ett
              friskare liv. Genom att logga sina måltider och vanor ska de kunna
              få rekommendationer på hur de kan förbättra sin hälsa och sitt
              allmänna välmående.
            </p>
          </section>
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
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;
