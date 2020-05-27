import * as React from "react";
import Head from "next/head";

import Provider from "../../provider/index";
import Podcasts from "../../modules/App/Dashboard/Podcasts/Podcasts";

const Page = () => (
  <div className="container">
    <Head>
      <title>Podcasts — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Provider>
      <Podcasts />
    </Provider>
  </div>
);

export default Page;
