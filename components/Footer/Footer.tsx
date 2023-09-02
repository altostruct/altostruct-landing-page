import * as React from "react";
import styles from "./Footer.module.scss";
import useTranslation from "hooks/useTranslation";
import tailwindConfig from "tailwind.config";
import TransitionSquares from "@components/TransistionSquares";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation();
  const lightBg = tailwindConfig.theme.light;

  return (
    <div className={lightBg}>
      <TransitionSquares></TransitionSquares>

      <div className="bg-[#292929] md:pt-[5%] md:px-[10%] md:pb-[2%] pt-[50%] pl-10 pb-4">
        <Link href={"/blog"}>
          <h1 className="text-[#f5f5f5] mb-4">{t("Senaste nyheter")}</h1>
        </Link>
        <a href="mailto:info@altostruct.se">
          <h1 className="text-[#f5f5f5] mb-4">{t("Kontakta oss")}</h1>
        </a>
      </div>

      <div className={styles.footer}>
        <div className="pb-10">
          <div className="text-white">
            <p>Copyright &copy; 2023 Altostruct AB</p>
            <p>
              Kontakt:{" "}
              <a className="text-white" href="mailto:info@altostruct.se">
                info@altostruct.se
              </a>
              <span>
                {", "}
                <a className="text-white" href="tel:0736453929">0736453929</a>
              </span>
            </p>
            <p>Org nr: 559244-1561</p>
            <p>Address: Stockholmsvägen 18, 181 50 Lidingö</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
