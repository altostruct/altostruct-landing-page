import * as React from "react";
import "./LanguageSelector.scss";
import useTranslation from "../../hooks/useTranslation";
import swedishIcon from "/Users/rasmusholmgren/Downloads/sweden_icon.png";

const LanguageSelector = () => {
  const { t, setLanguage, language } = useTranslation();

  const languages = {
    swe: {
      language: "swe",
      image: swedishIcon,
    },
    en: {
      language: "en",
      image: swedishIcon,
    },
  };

  return <img className="language-icon" src={languages.swe.image}></img>;
};

export default LanguageSelector;
