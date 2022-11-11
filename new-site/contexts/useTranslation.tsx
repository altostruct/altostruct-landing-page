import React, { createContext, PropsWithChildren, useContext } from "react";

interface LanguageContextInterface {
  t: (v: string, params?: any[]) => string;
  locales: string[];
  locale: string;
}

const LanguageContext = createContext<LanguageContextInterface>(null as any);

export function LanguageContextProvider(
  props: PropsWithChildren & LanguageContextInterface
) {
  const { children, locale = "sv", locales = [] } = props;

  const t = () => {
    return "ABC";
  };

  return (
    <LanguageContext.Provider value={{ locale, locales, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const useTranslation = () => {
  return useContext(LanguageContext);
};

export default useTranslation;
