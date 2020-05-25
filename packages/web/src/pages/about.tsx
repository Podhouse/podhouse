import * as React from "react";
import Head from "next/head";

import Landing from "../modules/Landing/Landing";

const About = () => (
  <div className="container">
    <Head>
      <title>About — Podhouse</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Landing />
  </div>
);

export default About;
