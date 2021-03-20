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
        About Podhouse
      </Heading>
      <Text color="#6F6F6F" fontSize={16} lineHeight="30px" fontWeight="400" textAlign="center">
        Our goal is to have the best podcast experience. From podcast listeners
        to podcast listeners
      </Text>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
