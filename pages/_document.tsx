import Document, { Html, Head, Main, NextScript } from "next/document";
import dotenv from "dotenv";
import { useEffect } from "react";
import TagManager from 'react-gtm-module'

export default class MyDocument extends Document {

  render() {
    const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string;
    /*useEffect(() => {
      const tagManagerArgs = {
        gtmId: GTM_ID
      }

      TagManager.initialize(tagManagerArgs)
    }, [])*/
    dotenv.config()
    return (
      <Html>
        <Head>

          { /*Global Site Tag (gtag.js) - Google Analytics 
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                  });
              `,
            }}
            
          />
          */}

        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
        </body>
      </Html>
    );
  }
}
