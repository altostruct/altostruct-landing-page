import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
