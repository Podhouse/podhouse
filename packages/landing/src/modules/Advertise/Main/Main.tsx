import React from "react";
import { Heading, Text } from "@chakra-ui/react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

const Main = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading
        color="#101010"
        as="h1"
        fontSize={64}
        letterSpacing="-0.03em"
        textAlign="center"
      >
        Reach highly engaged listeners
      </Heading>
      <Text color="#101010" lineHeight="30px" textAlign="center">
        Reach engaged users by advertising with us and grow your audience
      </Text>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
