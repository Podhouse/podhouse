import * as React from "react";
import Head from "next/head";

import Provider from "../../../provider/index";
import Episode from "../../../modules/App/Dashboard/Episode/Episode";

const Page = () => (
  <div className="container">
    <Head>
      <title>Episode — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Provider>
      <Episode />
    </Provider>
  </div>
);

export default Page;
