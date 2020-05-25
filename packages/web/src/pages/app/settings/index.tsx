import * as React from "react";
import Head from "next/head";

import App from "../../../components/App/App";
import Settings from "../../../components/Settings/Settings";

import Initial from "../../../modules/App/Settings/Initial/Initial";

import { AuthProvider } from "../../../context/Auth/Auth";
import { SettingsProvider } from "../../../context/Settings/Settings";

const Page = () => (
  <div className="container">
    <Head>
      <title>Settings — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AuthProvider>
      <SettingsProvider>
        <App>
          <Settings>
            <Initial />
          </Settings>
        </App>
      </SettingsProvider>
    </AuthProvider>
  </div>
);

export default Page;
