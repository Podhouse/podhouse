import * as React from "react";
import Head from "next/head";

import Landing from "../modules/Landing/Landing";
import Advertisers from "../modules/Landing/Advertisers/Advertisers";

const Page = () => (
  <div className="container">
    <Head>
      <title>Advertisers — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Landing>
      <Advertisers />
    </Landing>
  </div>
);

export default Page;
