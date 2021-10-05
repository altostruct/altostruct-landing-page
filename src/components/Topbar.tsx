import * as React from "react";
import "./Topbar.scss";

import Brand from "./Brand";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="content">
        <a className="brand" href="/">
          <Brand></Brand>
        </a>
        <nav>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
