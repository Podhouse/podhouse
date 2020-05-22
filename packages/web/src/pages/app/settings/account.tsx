import * as React from "react";
import Head from "next/head";

import App from "../../../components/App/App";
import Settings from "../../../components/Settings/Settings";

import Account from "../../../modules/App/Settings/Account/Account";

import { AuthProvider } from "../../../context/Auth/Auth";
import { SettingsProvider } from "../../../context/Settings/Settings";

const Page = () => (
  <div className="container">
    <Head>
      <title>Account — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AuthProvider>
      <SettingsProvider>
        <App>
          <Settings>
            <Account />
          </Settings>
        </App>
      </SettingsProvider>
    </AuthProvider>
  </div>
);

export default Page;
