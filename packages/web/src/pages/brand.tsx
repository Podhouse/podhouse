import * as React from "react";
import Head from "next/head";

import Landing from "../modules/Landing/Landing";
import Brand from "../modules/Landing/Brand/Brand";

const Page = () => (
  <div className="container">
    <Head>
      <title>Brand — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Landing>
      <Brand />
    </Landing>
  </div>
);

export default Page;
