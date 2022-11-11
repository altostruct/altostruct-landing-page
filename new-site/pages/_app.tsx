import "../styles/globals.scss";
import "@fontsource/poppins/600.css";
import type { AppProps } from "next/app";
import { LanguageContextProvider } from "contexts/useTranslation";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <LanguageContextProvider {...pageProps}>
      <Component {...pageProps} />
    </LanguageContextProvider>
  );
}

export async function getStaticProps(context: any) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "swe" } }],
    fallback: false, // can also be true or 'blocking'
  };
}
