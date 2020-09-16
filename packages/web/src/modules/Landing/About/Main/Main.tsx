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
        About Podhouse
      </Heading>
      <Paragraph variant="secondary" size="normal">
        We aim to provide the best podcast experience, that's why we created
        Podhouse, from podcast listeners for podcast listeners
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
