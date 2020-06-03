import * as React from "react";
import Head from "next/head";

import Provider from "../../provider/index";
import Search from "../../modules/App/Dashboard/Search/Search";

const Page = () => (
  <div className="container">
    <Head>
      <title>Search — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Provider>
      <Search />
    </Provider>
  </div>
);

export default Page;
