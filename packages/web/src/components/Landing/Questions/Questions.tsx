import React from "react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingSubTitle,
} from "../Landing.styles";

import Paragraph from "src/system/Paragraph/Paragraph";

const Questions = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <LandingSubTitle>Got more questions?</LandingSubTitle>
      <Paragraph variant="secondary" size="normal" textAlign="center">
        Reach out via email and we will be happy to help you.
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Questions;
