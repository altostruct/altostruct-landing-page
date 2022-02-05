import { stringify } from "postcss";
import * as react from "react";

// perhaps nice to have a class which contains all the methods
// but it is really up to you Rasmus :)
class Translator {}

const translationConfig = require("../../i18next-parser.config.js");
const LANGUAGES = translationConfig.locales;

const DEFAULT_LANGUAGE = "swe";
/**
 *
 * Usage:
 *        without any replacements t("Hello")
 *        with replacements t("Hello {{name}}", {name: "Erik"})
 *
 * @returns a translated string
 */
const useTranslation = () => {
  const isBrowser = typeof window !== "undefined";

  //default fallback
  let language = DEFAULT_LANGUAGE;
  let currentPath: string;

  //get current language from URL
  if (isBrowser) {
    currentPath = window.location.pathname;
    console.log("Current path:" + currentPath); //debug
    for (const lang of LANGUAGES) {
      if (currentPath.startsWith("/" + lang) || currentPath == lang) {
        language = lang;
      }
      //used for testing on github domain
      if (currentPath.startsWith("/altostruct-landing-page/" + lang)) {
        language = lang;
      }
    }
  }
  console.log("Current language:" + language); //debug

  /**Returns a translated string with values of any existing variable.*/
  const t = (text: string, variables?: Record<string, any>): string => {
    const translations = zrequire("@locales/" + language + "/translation.json");

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
    if (!isBrowser) {
      return;
    }
    //remove the first element, allways starts with a dash
    let currentPathSplit = currentPath.split("/").slice(1);
    //fallback if set fails
    let newPath = "/" + DEFAULT_LANGUAGE;

    const isLanguageSet = LANGUAGES.includes(currentPathSplit[0]);
    const languagePrefix = language === DEFAULT_LANGUAGE ? null : language;

    if (isLanguageSet) {
      window.location.pathname = [languagePrefix, ...currentPathSplit.slice(1)]
        .filter((subPath) => subPath !== null)
        .join("/");
    } else {
      window.location.pathname = [languagePrefix, ...currentPathSplit]
        .filter((subPath) => subPath !== null)
        .join("/");
    }
  };
  //when no language is set
  return { t, language: language, setLanguage: setLanguage };
};

export default useTranslation;
