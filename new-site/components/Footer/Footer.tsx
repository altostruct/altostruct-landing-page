import * as React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Copyright &copy; 2021 Altostruct AB</p>
        <p>
          Kontakt: <a href="mailto:info@altostruct.se">info@altostruct.se</a>
        </p>
        <p>Org nr: 559244-1561</p>
        <p>Address: Stockholmsvägen 18, 181 50 Lidingö</p>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
