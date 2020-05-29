import * as React from "react";
import Head from "next/head";

import Provider from "../../provider/index";
import Settings from "../../modules/App/Dashboard/Settings/Settings";

const Page = () => (
  <div className="container">
    <Head>
      <title>Settings — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Provider>
      <Settings />
    </Provider>
  </div>
);

export default Page;
