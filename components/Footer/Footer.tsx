import * as React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className="bg-[#161616]">
      <div className="flex place-content-end bg-[#292929]">
        <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
        </div>
      </div>
      <div className="flex place-content-end md:pr-28 pr-14 bg-[#292929]">
        <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
        </div>
      </div>
      <div className="flex place-content-end bg-[#292929]">
        <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
        </div>
      </div>

      <div className={styles.footerContent}>
        <h1 className="text-[#707070] mb-4">Senaste nyheter</h1>
          <a href="mailto:info@altostruct.se">
            <h1 className="text-[#f5f5f5] mb-4">Kontakta oss</h1>
          </a>
          <a href="mailto:info@altostruct.se">
          <div className="flex text-white">
            <img className="md:w-14 w-9 mr-4" src="/images/icons/arrow-icon.svg"></img>
          <h1>Jobba med oss</h1>
        </div>
        </a>
      </div>

    <footer className={styles.footer}>
      <div>
        <div className="text-white">
        <p>Copyright &copy; 2021 Altostruct AB</p>
        <p>
          Kontakt: <a className="text-white" href="mailto:info@altostruct.se">info@altostruct.se</a>
        </p>
        <p>Org nr: 559244-1561</p>
        <p>Address: Stockholmsvägen 18, 181 50 Lidingö</p>
      </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
