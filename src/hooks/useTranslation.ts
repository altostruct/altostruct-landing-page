import * as react from "react";

// perhaps nice to have a class which contains all the methods
// but it is really up to you Rasmus :)
class Translator {}

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
  const language = DEFAULT_LANGUAGE;

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

  const t = (text: string, varibles?: Record<string, any>): string => {
    const translations = require("@locales/en/translation.json");

    return translations[text] || text;
  };

  const setLanguge = (language: string) => {};

  return { t, language, setLanguge };
};

export default useTranslation;
