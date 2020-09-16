import React from "react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingTitle,
} from "src/components/Landing/Landing.styles";

import Paragraph from "src/system/Paragraph/Paragraph";

const Main = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <LandingTitle>Our design assets</LandingTitle>
      <Paragraph variant="secondary" size="normal">
        We take our design experience very seriously, our main goal is to
        provide a clean, beautiful, and simple experience. You can download our
        design assets here
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
