import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
