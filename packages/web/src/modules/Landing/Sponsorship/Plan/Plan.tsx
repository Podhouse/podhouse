import React from "react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

import {
  PlanContainer,
  PlanHeaderContainer,
  PlanPriceContainer,
} from "./Plan.styles";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";
import Button from "src/system/Button/Button";

const Plan = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading variant="primary" size="normal" as="h2" fontSize={36}>
        We have the right plan for you
      </Heading>
      <Paragraph variant="secondary" size="normal">
        Reach highly engaged listeners and start to grow your audience with us
      </Paragraph>
    </LandingGridContentContainer>

    <PlanContainer>
      <PlanHeaderContainer>
        <Heading as="h2" variant="primary" size="normal" textAlign="start">
          Premium Advertising
        </Heading>
        <Paragraph variant="secondary" size="normal" textAlign="start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet ut
          maecenas nunc arcu nisi, euismod placerat ac velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </Paragraph>
      </PlanHeaderContainer>

      <PlanPriceContainer>
        <Heading
          as="h3"
          variant="primary"
          size="normal"
          textAlign="start"
          fontSize={16}
        >
          Pay monthly only
        </Heading>

        <Heading
          as="h1"
          variant="primary"
          size="normal"
          textAlign="start"
          fontSize={64}
        >
          $299
        </Heading>

        <Button type="button" variant="primary" size="normal">
          Contact us
        </Button>
      </PlanPriceContainer>
    </PlanContainer>
  </LandingGridContainer>
);

export default Plan;
