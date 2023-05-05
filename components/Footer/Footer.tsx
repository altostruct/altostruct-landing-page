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

    <div className="bg-[#292929] md:pt-[20%] md:px-[10%] md:pb-[2%] pt-[50%] pl-10 pb-4">
      <Link href={"/blog"}>
      <h1 className="text-[#707070] mb-4">{t("Senaste nyheter")}</h1>
      </Link>
        <a href="mailto:info@altostruct.se">
          <h1 className="text-[#f5f5f5] mb-4">{t("Kontakta oss")}</h1>
        </a>
        <Link href="/career">
          <div className="flex text-white">
            <img
              className="md:w-14 w-9 mr-4"
              src="/images/icons/arrow-icon.svg"
            ></img>
            <h1>{t("Jobba med oss")}</h1>
          </div>
        </Link>
      </div>

    <div className={styles.footer}>
      <div className="pb-10">
        <div className="text-white">
        <p>Copyright &copy; 2021 Altostruct AB</p>
        <p>
          Kontakt: <a className="text-white" href="mailto:info@altostruct.se">info@altostruct.se</a>
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
