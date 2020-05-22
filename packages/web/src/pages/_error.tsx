import * as React from "react";
import Head from "next/head";

import ErrorPage from "../components/ErrorPage/ErrorPage";

const Home = () => (
  <div className="container">
    <Head>
      <title>Error — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ErrorPage title="Ops" description="Something went wrong" />
  </div>
);

export default Home;
