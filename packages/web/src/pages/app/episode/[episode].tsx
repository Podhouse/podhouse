import * as React from "react";
import Head from "next/head";

import App from "../../../components/App/App";
import Episode from "../../../modules/App/Dashboard/Episode/Episode";

import { AuthProvider } from "../../../context/Auth/Auth";
import { SettingsProvider } from "../../../context/Settings/Settings";

const Page = () => (
  <div className="container">
    <Head>
      <title>Episode — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AuthProvider>
      <SettingsProvider>
        <App>
          <Episode />
        </App>
      </SettingsProvider>
    </AuthProvider>
  </div>
);

export default Page;
