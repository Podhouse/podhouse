import React from "react";

import Main from "./Main/Main";
import Mission from "./Mission/Mission";
import Independent from "./Independent/Independent";
import OpenSource from "./OpenSource/OpenSource";

import CallToAction from "src/components/Landing/CallToAction/CallToAction";

const About = () => (
  <>
    <Main />
    <Mission />
    <Independent />
    <OpenSource />
    <CallToAction />
  </>
);

export default About;
