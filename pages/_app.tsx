import "../styles/globals.scss";
import "@fontsource/poppins/600.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
