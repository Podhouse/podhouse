import React from "react";
import { Heading, Text } from "@chakra-ui/react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

const Mission = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading
        color="#101010"
        as="h2"
        fontSize={36}
        letterSpacing="-0.03em"
        textAlign="center"
      >
        Mission
      </Heading>

      <Text color="#101010" lineHeight="30px" textAlign="center">
        One of the most awesome things about podcasts is that anyone can start
        to listen or create their own podcast. People can literally listen to
        podcasts in any specific situation in their daily-basis, and we have a
        mission to improve it. We believe that podcasts should be accessible to
        anyone anywhere, and our mission is to provide an app where people can
        discover what's a podcast and listen to the most amazing shows in the
        world.
      </Text>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Mission;
