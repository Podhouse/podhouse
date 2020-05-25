import * as React from "react";
import Head from "next/head";

import Landing from "../modules/Landing/Landing";

const Home = () => (
  <div className="container">
    <Head>
      <title>Podhouse — The best way to listen to your favorite podcasts</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Landing />
  </div>
);

export default Home;
