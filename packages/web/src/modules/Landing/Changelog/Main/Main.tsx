import React from "react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";

const Main = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading variant="primary" size="normal" as="h1" fontSize={64}>
        Changelog
      </Heading>
      <Paragraph variant="secondary" size="normal">
        A powerful, clean, and intuitive app for you to discover and explore
        podcasts everywhere, anytime with the best podcast experience.
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
