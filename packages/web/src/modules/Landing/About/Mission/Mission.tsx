import React from "react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";

const Mission = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading variant="primary" size="normal" as="h2" fontSize={36}>
        Mission
      </Heading>

      <Paragraph variant="secondary" size="normal">
        One of the most awesome things about podcasts is that anyone can start
        to listen or create their own podcast. People can literally listen to
        podcasts in any specific situation in their daily-basis, and we have a
        mission to improve it. We believe that podcasts should be accessible to
        anyone anywhere, and our mission is to provide an app where people can
        discover what's a podcast and listen to the most amazing shows in the
        world.
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Mission;
