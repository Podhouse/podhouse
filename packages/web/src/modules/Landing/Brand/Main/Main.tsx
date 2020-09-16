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
        Our design assets
      </Heading>
      <Paragraph variant="secondary" size="normal">
        We take our design experience very seriously, our main goal is to
        provide a clean, beautiful, and simple experience. You can download our
        design assets here
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
