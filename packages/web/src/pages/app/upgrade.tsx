import * as React from "react";
import Head from "next/head";

import App from "../../components/App/App";
import Upgrade from "../../modules/App/Upgrade/Upgrade";

import { AuthProvider } from "../../context/Auth/Auth";
import { SettingsProvider } from "../../context/Settings/Settings";

const Page = () => (
  <div className="container">
    <Head>
      <title>Upgrade — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AuthProvider>
      <SettingsProvider>
        <App>
          <Upgrade />
        </App>
      </SettingsProvider>
    </AuthProvider>
  </div>
);

export default Page;
