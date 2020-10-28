import React from "react";

import Main from "./Main/Main";
import Screen from "./Screen/Screen";
import Features from "./Features/Features";
import Podcasts from "./Podcasts/Podcasts";

import CallToAction from "src/components/Landing/CallToAction/CallToAction";

const Home = () => (
  <>
    <Main />
    <Screen />
    <Features />
    <Podcasts />
    <CallToAction />
  </>
);

export default Home;
