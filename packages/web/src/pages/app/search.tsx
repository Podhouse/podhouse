import * as React from "react";
import Head from "next/head";

import App from "../../components/App/App";
import Search from "../../modules/App/Search/Search";

import { AuthProvider } from "../../context/Auth/Auth";
import { SettingsProvider } from "../../context/Settings/Settings";

const Page = () => (
  <div className="container">
    <Head>
      <title>Search — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AuthProvider>
      <SettingsProvider>
        <App>
          <Search />
        </App>
      </SettingsProvider>
    </AuthProvider>
  </div>
);

export default Page;
