import React from "react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "../Landing.styles";

import Heading from "src/system/Heading/Heading";
import Link from "src/system/Link/Link";

const CallToAction = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading variant="primary" size="normal" as="h2" fontSize={36}>
        Got more questions?
      </Heading>
      <Link
        href="mailto:leonardomso11@gmail.com"
        target="_blank"
        rel="noopener"
        variant="secondary"
        size="normal"
      >
        Reach out via email and I will be happy to help you.
      </Link>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default CallToAction;
