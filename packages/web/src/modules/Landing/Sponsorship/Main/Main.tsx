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
      <LandingTitle>Reach highly engaged listeners</LandingTitle>
      <Paragraph variant="secondary" size="normal">
        Podcast listeners are very highly engaged, you can grow your audience by
        advertising with us
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
