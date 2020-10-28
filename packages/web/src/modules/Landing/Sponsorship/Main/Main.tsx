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
        Reach highly engaged listeners
      </Heading>
      <Paragraph variant="secondary" size="normal">
        Podcast listeners are very highly engaged, you can grow your audience by
        advertising with us
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
