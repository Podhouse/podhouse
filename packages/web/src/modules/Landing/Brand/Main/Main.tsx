import React from "react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingTitle,
  LandingParagraph,
} from "src/components/Landing/Landing.styles";

const Main = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <LandingTitle>Here you can find the Podhouse design assets</LandingTitle>
      <LandingParagraph>
        We take our design experience very seriously, our idea is to be a
        podcast app with a clean, beautiful, and simple experience. You can
        download our logo and badges here
      </LandingParagraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
