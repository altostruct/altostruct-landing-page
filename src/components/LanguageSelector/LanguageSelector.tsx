import * as React from "react";
import "./LanguageSelector.scss";
import useTranslation from "../../hooks/useTranslation";
import swedishIcon from "./assets/swedishFlag.png";
import englishIcon from "./assets/usFlag.png";

interface LanguageSelectorProps {
  expanded?: boolean;
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
  const { setLanguage, language } = useTranslation();
  let currentLanguage = language;
  const { expanded } = props;

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
    Object.assign(selectableLanguages, { ...allLanguages });
    delete selectableLanguages[currentLanguage];
    return selectableLanguages;
  }

  let selectableLanguages: LanguageInterface = withoutCurrentLang();

  if (expanded)
    return (
      <div className="flex justify-between gap-4">
        {Object.keys(allLanguages).map((selectableLanguage) => (
          <div className="w-12">
            <img
              src={allLanguages[selectableLanguage].image}
              alt="Language icon"
              onClick={() => clicked(selectableLanguage)}
              key={allLanguages[selectableLanguage].id}
            />
          </div>
        ))}
      </div>
    );

  return (
    <>
      <div className="dropdown">
        {!expanded && (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default LanguageSelector;
