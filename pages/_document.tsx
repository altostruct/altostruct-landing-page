import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-RS6NEMYS3W"
          async
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RS6NEMYS3W');
        `,
          }}
        ></script>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
