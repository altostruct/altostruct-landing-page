import * as React from "react";
import "./LanguageSelector.scss";
import useTranslation from "../../hooks/useTranslation";
import swedishIcon from "./assets/swedishFlag.png";
import englishIcon from "./assets/usFlag.png";

interface LanguageSelectorProps {
  pathName: string;
}

interface Language {
  language: string;
  image: string;
  id: string;
}

interface LanguageInterface {
  [key: string]: Language;
}

const LanguageSelector = (props: LanguageSelectorProps) => {
  const { t, setLanguage, language } = useTranslation();
  let currentLanguage = language;

  function clicked(selectedLanguage: string) {
    setLanguage(selectedLanguage);
  }

  const allLanguages: { [key: string]: Language } = {
    swe: {
      language: "swe",
      image: swedishIcon,
      id: "swe",
    },
    en: {
      language: "en",
      image: englishIcon,
      id: "en",
    },
  };

  function withoutCurrentLang() {
    let selectableLanguages: { [key: string]: Language } = {};
    Object.assign(selectableLanguages, allLanguages);
    delete selectableLanguages[currentLanguage];
    return selectableLanguages;
  }

  let selectableLanguages: LanguageInterface = withoutCurrentLang();

  return (
    <div className="dropdown">
      <img
        className="front-icon"
        alt="Selected language"
        src={allLanguages[currentLanguage].image}
      ></img>
      <div className="dropdown-content">
        {Object.keys(selectableLanguages).map((selectableLanguage) => (
          <img
            className="language-icon"
            src={selectableLanguages[selectableLanguage].image}
            alt="Language icon"
            onClick={() => clicked(selectableLanguage)}
            key={selectableLanguages[selectableLanguage].id}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
