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
      <LandingTitle>About Podhouse</LandingTitle>
      <Paragraph variant="secondary" size="normal">
        We aim to provide the best podcast experience, that's why we created
        Podhouse, from podcast listeners for podcast listeners
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
