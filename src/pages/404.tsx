import * as React from "react";
import { Link } from "gatsby";
import Button from "@components/Button/Button";
import Topbar from "@components/Topbar/Topbar";
import Icon from "@components/Icon";

const NotFoundPage = () => {
  return (
    <main className="page">
      <Topbar></Topbar>
      <div className="content screen-height title">
        <Icon.Square className="top-image" />
        <div className="split-content sm-screen-height">
          <section>
            <h1 style={{ whiteSpace: "nowrap" }}>
              404 <br />
              Not found
            </h1>
            <p>
              <span className="white-bg-text">
                Kunde tyvärr inte hitta din sida.
              </span>
            </p>
            <Button className="space-right" link="/">
              Tillbaka
            </Button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
