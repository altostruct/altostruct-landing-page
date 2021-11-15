import * as React from "react";
import "./Topbar.scss";

import Brand from "../Brand/Brand";

const Topbar = () => {
  return (
    <header className="topbar">
      <nav>
        <a className="brand" href="/">
          <Brand />
        </a>
      </nav>
      <nav>
        <a href="#customers" style={{ marginRight: "1em" }}>
          Kunder
        </a>
        <a href="#contact">Kontakta oss</a>
      </nav>
    </header>
  );
};

export default Topbar;
