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
      <LandingTitle>
        Our mission is to provide the best podcast experience
      </LandingTitle>
      <LandingParagraph>
        We aim to provide the best podcast experience, that's why we created
        Podhouse, from podcast listeners for podcast listeners
      </LandingParagraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
