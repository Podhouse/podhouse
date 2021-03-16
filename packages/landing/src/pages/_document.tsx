import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";

import { GA_TRACKING_ID } from "../utils/gtag";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head>
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />

          <link
            rel="icon"
            sizes="192x192"
            type="image/png"
            href="/icon-192x192.png"
          />
          <link
            rel="icon"
            sizes="256x256"
            type="image/png"
            href="/icon-256x256.png"
          />
          <link
            rel="icon"
            sizes="384x384"
            type="image/png"
            href="/icon-384x384.png"
          />
          <link
            rel="icon"
            sizes="512x512"
            type="image/png"
            href="/icon-512x512.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <title>Podhouse</title>
          <meta
            name="description"
            content="The best podcast web app to listen to your favorite podcasts"
          />

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
      </html>
    );
  }
}

export default MyDocument;
