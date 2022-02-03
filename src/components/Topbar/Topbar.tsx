import * as React from "react";
import "./Topbar.scss";
import LanguageSelector from "@components/LanguageSelector/LanguageSelector";

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
        {/* Simulates css grids, since it is not supported ios */}
        <a href="#customers" style={{ marginRight: "1em" }}>
          Kunder
        </a>
        <a href="#contact">Kontakta oss</a>
        <LanguageSelector></LanguageSelector>
      </nav>
    </header>
  );
};

export default Topbar;
