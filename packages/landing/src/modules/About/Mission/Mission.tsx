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
        to listen or create their podcast. People can listen to podcasts in any
        specific situation in their daily-basis. Podcasts should be accessible
        to anyone, and our mission is to provide the best web app where people
        can listen to their favorite podcasts.
      </Text>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Mission;
