import { stringify } from "postcss";
import * as react from "react";

const translationConfig = require("../../i18next-parser.config.js");
const LANGUAGES = translationConfig.locales;

export const DEFAULT_LANGUAGE = "swe";
/**
 *
 * Usage:
 *        without any replacements "t("Hello")"
 *        with replacements "t("Hello {{name}}""", {name: "Erik"})
 *
 * @returns a translated string
 * @param currentPath the current path as a string
 */
const useTranslation = (currentPath: string) => {
  //default fallback
  let language = DEFAULT_LANGUAGE;

  //get current language from URL
  for (const lang of LANGUAGES) {
    if (currentPath.startsWith("/" + lang) || currentPath == lang) {
      language = lang;
    }
    //used for testing on github domain
    if (currentPath.startsWith("/altostruct-landing-page/" + lang)) {
      language = lang;
    }
  }

  /**Returns a translated string with values of any existing variable.*/
  const t = (text: string, variables?: Record<string, any>): string => {
    const translations = require("@locales/" + language + "/translation.json");

    if (!translations.hasOwnProperty(text)) {
      console.warn("No translation for: '" + text + "'");
    } else {
      text = translations[text];
    }

    if (variables) {
      // replace each variable with its value
      for (const variableKey in variables) {
        let regex = new RegExp(`{{${variableKey}}}`, "g");
        text = text.replace(regex, variables[variableKey]);
      }
    }
    return text;
  };

  /**Sets the URL to the correct language.*/
  const setLanguage = (language: string) => {
    //remove the first element, allways starts with a dash
    let currentPathSplit = currentPath.split("/").slice(1);

    const isLanguageSet = LANGUAGES.includes(currentPathSplit[0]);

    const languagePrefix = language === DEFAULT_LANGUAGE ? null : language;

    if (isLanguageSet) {
      window.location.pathname =
        [languagePrefix, ...currentPathSplit.slice(1)]
          .filter((subPath) => subPath !== null)
          .join("/") + "index.html";
    } else {
      window.location.pathname =
        [languagePrefix, ...currentPathSplit]
          .filter((subPath) => subPath !== null)
          .join("/") + "index.html";
    }
  };
  return { t, language: language, setLanguage: setLanguage };
};

export default useTranslation;
