import * as React from "react";
import Head from "next/head";

import App from "../../components/App/App";
import Subscriptions from "../../modules/App/Subscriptions/Subscriptions";

import { AuthProvider } from "../../context/Auth/Auth";
import { SettingsProvider } from "../../context/Settings/Settings";

const Page = () => (
  <div className="container">
    <Head>
      <title>Subscriptions — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AuthProvider>
      <SettingsProvider>
        <App>
          <Subscriptions />
        </App>
      </SettingsProvider>
    </AuthProvider>
  </div>
);

export default Page;
