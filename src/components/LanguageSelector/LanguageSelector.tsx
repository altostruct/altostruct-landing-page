import * as React from "react";
import "./LanguageSelector.scss";
import useTranslation from "../../hooks/useTranslation";
import swedishIcon from "./assets/sweden_icon.png";
import englishIcon from "./assets/usa_icon.png";

interface LanguageInterface {
  [key: string]: any;
}

const LanguageSelector = () => {
  const { t, setLanguage, language } = useTranslation();

  function clicked() {
    setLanguage(selectableLanguages[language].nextLanguage);
  }

  const selectableLanguages: LanguageInterface = {
    swe: {
      nextLanguage: "en",
      image: englishIcon,
    },
    en: {
      nextLanguage: "swe",
      image: swedishIcon,
    },
  };

  return (
    <img
      className="language-icon"
      src={selectableLanguages[language].image}
      onClick={clicked}
    ></img>
  );
};

export default LanguageSelector;
