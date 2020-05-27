import * as React from "react";
import Head from "next/head";

import Provider from "../../../provider/index";
import Podcast from "../../../modules/App/Dashboard/Podcast/Podcast";

const Page = () => (
  <div className="container">
    <Head>
      <title>Podcast — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Provider>
      <Podcast />
    </Provider>
  </div>
);

export default Page;
