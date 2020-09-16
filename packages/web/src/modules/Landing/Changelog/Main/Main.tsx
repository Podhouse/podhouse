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
      <LandingTitle>Changelog</LandingTitle>
      <Paragraph variant="secondary" size="normal">
        A powerful, clean, and intuitive app for you to discover and explore
        podcasts everywhere, anytime with the best podcast experience.
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
