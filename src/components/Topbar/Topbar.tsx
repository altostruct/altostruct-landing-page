import * as React from "react";
import "./Topbar.scss";

import Brand from "../Brand/Brand";

const Topbar = () => {
  return (
    <header className="topbar">
      <nav>
        <a className="brand" href="/">
          <Brand></Brand>
        </a>
      </nav>
      <nav>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Topbar;
