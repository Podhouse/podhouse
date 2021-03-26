import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "src/utils/gtag";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            sizes="192x192"
            type="image/png"
            href="/images/logo/icon-192x192.png"
          />
          <link
            rel="icon"
            sizes="256x256"
            type="image/png"
            href="/images/logo/icon-256x256.png"
          />
          <link
            rel="icon"
            sizes="384x384"
            type="image/png"
            href="/images/logo/icon-384x384.png"
          />
          <link
            rel="icon"
            sizes="512x512"
            type="image/png"
            href="/images/logo/icon-512x512.png"
          />
          <link rel="manifest" href="/manifest.json" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
