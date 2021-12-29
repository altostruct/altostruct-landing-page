import * as React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>Copyright &copy; 2021 Altostruct AB</p>
        <p>
          Kontakt: <a href="mailto:info@altostruct.se">info@altostruct.se</a>
        </p>
        <p>Org nr: 559244-1561</p>
        <p>Address: Tegelbacken 4A, 111 52 Stockholm</p>
        <p>
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
        </p>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
