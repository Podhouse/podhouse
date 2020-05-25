import * as React from "react";
import Head from "next/head";

import ErrorPage from "../components/ErrorPage/ErrorPage";

const Home = () => (
  <div className="container">
    <Head>
      <title>404 — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ErrorPage title="404" description="We think you're in the wrong place" />
  </div>
);

export default Home;
