import * as React from "react";
import Head from "next/head";

import App from "../../components/App/App";
import Browse from "../../modules/App/Browse/Browse";

import { AuthProvider } from "../../context/Auth/Auth";
import { SettingsProvider } from "../../context/Settings/Settings";

const Page = () => (
  <div className="container">
    <Head>
      <title>Browse — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AuthProvider>
      <SettingsProvider>
        <App>
          <Browse />
        </App>
      </SettingsProvider>
    </AuthProvider>
  </div>
);

export default Page;
