import React, { Fragment } from "react";

import CallToAction from "../CallToAction/CallToAction";

import Main from "./Main/Main";
import Team from "./Team/Team";

const About = () => (
  <Fragment>
    <Main />
    <Team />
    <CallToAction />
  </Fragment>
);

export default About;
