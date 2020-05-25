import * as React from "react";
import Head from "next/head";

import Landing from "../modules/Landing/Landing";

const Brand = () => (
  <div className="container">
    <Head>
      <title>Brand — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Landing />
  </div>
);

export default Brand;
