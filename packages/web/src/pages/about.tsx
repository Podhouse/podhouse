import * as React from "react";
import Head from "next/head";

import Landing from "../modules/Landing/Landing";
import About from "../modules/Landing/About/About";

const Page = () => (
  <div className="container">
    <Head>
      <title>About — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Landing>
      <About />
    </Landing>
  </div>
);

export default Page;
