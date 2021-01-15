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
        Our design assets
      </Heading>
      <Text color="#101010" lineHeight="25px" textAlign="center">
        We take our design experience very seriously, our main goal is to
        provide a clean, beautiful, and simple experience. You can download our
        design assets here
      </Text>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
