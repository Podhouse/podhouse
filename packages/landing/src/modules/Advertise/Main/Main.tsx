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
      <Text color="#101010" lineHeight="25px" textAlign="center">
        Podcast listeners are very highly engaged, you can grow your audience by
        advertising with us
      </Text>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
