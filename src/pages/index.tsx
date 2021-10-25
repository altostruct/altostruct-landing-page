import * as React from "react";
import "@styles/global.scss";
import "./index.scss";

import Topbar from "@components/Topbar";
import Footer from "@components/Footer";
import Button from "@components/Button";

const IndexPage = () => {
  return (
    <main className="page">
      <Topbar></Topbar>
      <div className="content">
        <div className="presentation" id="about">
          <div className="text-content">
            <h1>
              Stockholm-based developers that tailor web and cloud solutions to
              startups
            </h1>
            <p>
              Vi finns här för att stötta er under er resa från startup och
              framåt! Vi är flexibla och redo att möta era startup-behov, stora
              eller små. Våra utvecklare är drivna och har fokus på att
              förverkliga er idé från början till slut.
            </p>
            <Button>Contact us</Button>
          </div>
          <div className="fakeimg"></div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;
