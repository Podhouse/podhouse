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
      <Text color="#101010" lineHeight="30px" textAlign="center">
        We aim to provide the best podcast experience, that's why we created
        Podhouse, from podcast listeners for podcast listeners
      </Text>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
