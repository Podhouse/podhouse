import * as React from "react";
import Head from "next/head";

import Landing from "../modules/Landing/Landing";
import Home from "../modules/Landing/Home/Home";

const Page = () => (
  <div className="container">
    <Head>
      <title>Podhouse — The best way to listen to your favorite podcasts</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Landing>
      <Home />
    </Landing>
  </div>
);

export default Page;
