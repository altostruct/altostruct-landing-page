import { stringify } from "postcss";
import * as react from "react";
import { useLanguage } from "../contexts/LanguageContext";
import useLocation from "./useLocation";

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
const useTranslation = () => {
  // const currentPath = useLocation();
  const language = useLanguage();

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
    let currentPathSplit = window.location.pathname.split("/").slice(1);

    const isLanguageSet = LANGUAGES.includes(currentPathSplit[0]);
    const languagePrefix = language === DEFAULT_LANGUAGE ? null : language;

    window.location.hash = "";

    if (isLanguageSet) {
      window.location.pathname = [languagePrefix, ...currentPathSplit.slice(1)]
        .filter((subPath) => subPath !== null && subPath != "")
        .join("/");
    } else {
      window.location.pathname = [languagePrefix, ...currentPathSplit]
        .filter((subPath) => subPath !== null && subPath != "")
        .join("/");
    }
  };

  //language part of url, no language if default
  const languagePrefix =
    language == DEFAULT_LANGUAGE ? "/" : "/" + language + "/";

  return { t, language: language, setLanguage: setLanguage, languagePrefix };
};

export default useTranslation;
