import Script from "next/script";
import "../styles/globals.scss";
import 'dotenv/config'
// import { GoogleAnalytics } from '@next/third-parties/google'

import type { AppProps } from "next/app";
import CookieBanner from "@components/CookieBanner";
import NoSSR from "@components/NoSSR";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RS6NEMYS3W"
        strategy="afterInteractive"
      />
      {/* <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RS6NEMYS3W');
        `}
      </Script> */}
      <Script id="mailer-light">
        {`
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '691954');
        `}
      </Script>

      {/* google ads */}
      <GoogleAnalytics gaId="G-RS6NEMYS3W" />
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6T55W0J1S2"
        strategy="afterInteractive"
      /> */}
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
