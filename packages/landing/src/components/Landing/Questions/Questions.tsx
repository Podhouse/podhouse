import React from "react";
import { Heading, Link } from "@chakra-ui/react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "../Landing.styles";

const CallToAction = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading color="#101010" as="h2" fontSize={36} letterSpacing="-0.03em" textAlign="center">
        Got more questions?
      </Heading>
      <Link
        href="mailto:leonardomso11@gmail.com"
        target="_blank"
        rel="noopener"
        variant="secondary"
        size="normal"
        fontWeight="500"
        color="#101010"
      >
        Reach out via email and I will be happy to help you.
      </Link>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default CallToAction;