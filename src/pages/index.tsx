import * as React from "react";
import "@styles/global.scss";
import "./index.scss";

import Topbar from "@components/Topbar";
import Footer from "@components/Footer";

const IndexPage = () => {
  return (
    <main className="page">
      <Topbar></Topbar>
      <div className="content">
        <div className="presentation" id="about">
          <div className="text-content">
            <h1>
              Stockholm-based developers that tailor solutions to startups
            </h1>
            <p>We build your ideas from the ground up.</p>
          </div>
          <div className="fakeimg"></div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;
