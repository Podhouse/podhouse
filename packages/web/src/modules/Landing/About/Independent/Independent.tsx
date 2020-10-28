import React from "react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";

const Independent = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading variant="primary" size="normal" as="h2" fontSize={36}>
        Independent
      </Heading>

      <Paragraph variant="secondary" size="normal">
        Podhouse has a mission to deliver podcasts for everyone, and a part of
        this goal is that we are not currently interested in raising funds or
        taking any investment. We believe that an independent startup can grow
        faster and focused in the long-time. Working independently, we can be a
        more open startup in the future, share our revenue, talk more with users
        about what should be improved, and to our advertisers as how we can
        deliver more targeted-ads.
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Independent;
