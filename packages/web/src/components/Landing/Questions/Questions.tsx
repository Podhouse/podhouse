import React from "react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "../Landing.styles";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";

const CallToAction = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading variant="primary" size="normal" as="h2" fontSize={36}>
        Got more questions?
      </Heading>
      <Paragraph variant="secondary" size="normal">
        Reach out via email and I will be happy to help you.
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default CallToAction;
