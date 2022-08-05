import React, { ReactNode, useContext } from "react";

// TODO change to null
const LanguageContext = React.createContext("swe");
const LanguageProvider = (props: any) => {
  console.log("Context: ", props);
  return (
    <LanguageContext.Provider value={props.pageContext.lang ?? "---"}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const withLanguage = (El: (props: any) => JSX.Element) => {
  return (props: any) => {
    return (
      <LanguageProvider {...props}>
        <El {...props}></El>
      </LanguageProvider>
    );
  };
};
export default LanguageProvider;
