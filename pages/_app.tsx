import Script from "next/script";
import "../styles/globals.scss";
import 'dotenv/config'

import type { AppProps } from "next/app";
import CookieBanner from "@components/CookieBanner";
import NoSSR from "@components/NoSSR";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RS6NEMYS3W"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RS6NEMYS3W');
        `}
      </Script>

      {/* google ads */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6T55W0J1S2"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6T55W0J1S2');
        `}
      </Script>
      <NoSSR>
        <CookieBanner />
      </NoSSR>
      <div className="w-screen overflow-hidden">
        <Component {...pageProps} />
      </div>
    </>
  );
}
