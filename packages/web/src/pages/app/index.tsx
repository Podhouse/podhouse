import * as React from "react";
import Head from "next/head";

import Provider from "../../provider/index";
import Browse from "../../modules/App/Dashboard/Browse/Browse";

const Page = () => (
  <div className="container">
    <Head>
      <title>Browse — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Provider>
      <Browse />
    </Provider>
  </div>
);

export default Page;
