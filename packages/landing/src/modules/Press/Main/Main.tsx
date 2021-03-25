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
        fontWeight="600"
      >
        Our design assets
      </Heading>
      <Text
        color="#6F6F6F"
        fontSize={16}
        lineHeight="30px"
        fontWeight="300"
        textAlign="center"
      >
        We aim for a very good design experience. Our goal is to provide the
        best clean, beautiful and simple experience possible. You can download
        our design assets here
      </Text>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;