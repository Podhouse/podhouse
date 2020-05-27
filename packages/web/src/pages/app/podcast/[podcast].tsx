import * as React from "react";
import Head from "next/head";

import App from "../../../components/App/App";
import Podcast from "../../../modules/App/Dashboard/Podcast/Podcast";

import { AuthProvider } from "../../../context/Auth/Auth";
import { SettingsProvider } from "../../../context/Settings/Settings";

const Page = () => (
  <div className="container">
    <Head>
      <title>Podcast — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AuthProvider>
      <SettingsProvider>
        <App>
          <Podcast />
        </App>
      </SettingsProvider>
    </AuthProvider>
  </div>
);

export default Page;
