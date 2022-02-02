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
  const isBrowser = typeof window !== "undefined"
 
  //default fallback
  let language = DEFAULT_LANGUAGE;
  let currentPath : string;
  
  //get current language from URL
  if(isBrowser){
  currentPath = window.location.pathname
  console.log("Current path:" + currentPath)//debug
  for (const lang of LANGUAGES) {
     if(currentPath.startsWith("/" + lang) || (currentPath == lang)){
      language = lang;
     }
     //used for testing on github domain
     if(currentPath.startsWith("/altostruct-landing-page/" + lang)){
      language = lang;
     }
   }
  }
  console.log("Current language:" + language);//debug
 

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

  /**Returns a translated string with values of any existing variable.*/
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

  /**Sets the URL to the correct language.*/
  const setLanguage = (language: string) => {
    if(!isBrowser){
      return;
    }
    let currentPathSplit = currentPath.split("/");
    //fallback if set fails
    let newPath = "/" + DEFAULT_LANGUAGE;
    
    let isLangSet = false;
    
    for (const lang of LANGUAGES) {
    //when a language is set
    if(currentPath.includes(lang)){
      //replace current language with new
      currentPathSplit[currentPathSplit.indexOf(lang)] = language;
      newPath = currentPathSplit.join("/");
      console.log("New path:" + newPath) //debug
      window.location.pathname = newPath;
      isLangSet = true;
      break;
    }
  }
  //when no language is set
  if(!isLangSet){
      //insert language in the URL
      currentPathSplit.splice(1, 0, language);
      newPath = currentPathSplit.join("/");
      window.location.pathname = newPath;
    } 
}
  return { t, language: language, setLanguage: setLanguage };
};

export default useTranslation;

