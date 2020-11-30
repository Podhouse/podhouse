import React from "react";

import Main from "./Main/Main";
import Features from "./Features/Features";
import Podcasts from "./Podcasts/Podcasts";

import CallToAction from "src/components/Landing/CallToAction/CallToAction";

const Home = () => (
  <>
    <Main />
    <Features />
    <Podcasts />
    <CallToAction />
  </>
);

export default Home;