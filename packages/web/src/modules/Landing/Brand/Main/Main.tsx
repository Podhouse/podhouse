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
      <LandingTitle>Here you can find the Podhouse design assets</LandingTitle>
      <Paragraph variant="secondary" size="normal">
        We take our design experience very seriously, our idea is to be a
        podcast app with a clean, beautiful, and simple experience. You can
        download our logo and badges here
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
