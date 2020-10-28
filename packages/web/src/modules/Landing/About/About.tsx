import React from "react";

import Main from "./Main/Main";
import MeetTheFounder from "./MeetTheFounder/MeetTheFounder";
import Mission from "./Mission/Mission";
import Independent from "./Independent/Independent";

import CallToAction from "src/components/Landing/CallToAction/CallToAction";
import Questions from "src/components/Landing/Questions/Questions";

const About = () => (
  <>
    <Main />
    <MeetTheFounder />
    <Mission />
    <Independent />
    <CallToAction />
    <Questions />
  </>
);

export default About;
