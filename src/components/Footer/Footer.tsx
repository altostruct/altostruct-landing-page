import * as React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; 2021 Altostruct AB</p>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/dreamstale"
          title="Dreamstale"
        >
          Dreamstale
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
