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
  // How do we get this one??
  const isBrowser = typeof window !== "undefined"
 
  let language = DEFAULT_LANGUAGE;
  let currentPath : string;
  
  if(isBrowser){
  currentPath = window.location.pathname
  console.log("Current path:" + currentPath)
  for (const lang of LANGUAGES) {
     if(currentPath.startsWith("/" + lang) || (currentPath == lang)){
      language = lang;
     }
     //used for testing
     if(currentPath.startsWith("/altostruct-landing-page/" + lang)){
      language = lang;
     }
   }
  }
  console.log("Current language:" + language);
 

  // TODO
  // 1. read in file from locales folder
  // 2. Figure which language we are current using
  //    by looking at the url.
  // 3. a)
  //    replace the text based on the locales folder.
  //    for example if text = "Hej" and and it exists
  //    ...
  //    "Hej": "Hello"
  //    ...
  //    in the file we want to replace "Hej" with "Hello"
  //    b)
  //    If the text does not exists in the translations folder
  //    output a warning to the log and the use the text. For
  //    example text = "Hej" and no translation exists then just
  //    output "Hej" again
  // 4. If the text containes "replacement values" replace the
  //    value with the varible.

  const t = (text: string, variables?: Record<string, any>): string => {
    const translations = require("@locales/" + language + "/translation.json");
   
    if(!translations.hasOwnProperty(text)){
      console.warn("No translation for: '" + text + "'");
    }
    else{
      text = translations[text];
    }

    if(variables){
      // replace each variable with its value
      for(const variableKey in variables){
        let regex = new RegExp(`{{${variableKey}}}`, "g");
        text = text.replace(regex, variables[variableKey]);
      }
    }
    return text
  };

  const setLanguage = (language: string) => {
    if(!isBrowser){
      return;
    }
    let currentPathSplit = currentPath.split("/");
    let newPath;
    let isLangSet = false;
    
    for (const lang of LANGUAGES) {
    //when a language is set
    if(currentPath.includes(lang)){
      currentPathSplit[currentPathSplit.indexOf(lang)] = language;
      newPath = currentPathSplit.join("/");
      console.log("New path:" + newPath)
      window.location.pathname = newPath;
      isLangSet = true;
      break;
    }
  }
  //when no language is set
  if(!isLangSet){
    if(currentPath == "/"){
      window.location.pathname = "/" + language;
    }
    else{
      currentPathSplit.splice(0, 0, language);
      newPath = currentPathSplit.join("/");
      window.location.pathname = newPath;
    }
    } 
}
  return { t, language: language, setLanguage: setLanguage };
};

export default useTranslation;

