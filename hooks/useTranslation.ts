import { useRouter } from "next/router";
import { stringify } from "postcss";
import * as react from "react";

const translationConfig = require("../i18next-parser.config.js");
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
  const { locale, locales } = useRouter();

  /**Returns a translated string with values of any existing variable.*/
  const t = (text: string, variables?: Record<string, any>): string => {
    return text
    const translations = require("i18n/" + locale + "/translation.json");

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
  const languagePrefix = locale == DEFAULT_LANGUAGE ? "/" : "/" + locale + "/";

  return { t, locale, locales };
};

export default useTranslation;
