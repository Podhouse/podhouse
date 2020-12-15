import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import GoogleFonts from "next-google-fonts";
import GoogleAnalytics from "next-simple-google-analytics";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head>
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
          <title>Podhouse – The Best Podcast Player on the Web</title>
          <meta name="Description" content="Listen to your favorite podcasts" />
          <GoogleFonts href="https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap" />
          <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} />
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
