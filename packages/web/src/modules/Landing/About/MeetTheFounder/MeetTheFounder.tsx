import React from "react";

import { LandingGridContainer } from "src/components/Landing/Landing.styles";

import {
  MeetTheFounderContainer,
  MeetTheFounderImage,
  MeetTheFounderDetailsContainer,
} from "./MeetTheFounder.styles";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";

const MeetTheFounder = () => (
  <LandingGridContainer>
    <Heading variant="primary" size="normal" as="h2" fontSize={36}>
      Meet the founder
    </Heading>

    <MeetTheFounderContainer>
      <MeetTheFounderImage>
        <source srcSet="/images/leo.webp" type="image/webp" />
        <source srcSet="/images/leo.jpg" type="image/jpeg" />
        <img
          src="/images/leo.jpg"
          alt="Leonardo Maldonado founder of Podhouse"
        />
      </MeetTheFounderImage>

      <MeetTheFounderDetailsContainer>
        <Heading variant="primary" size="small" as="h3" fontSize={24}>
          Leonardo Maldonado
        </Heading>
        <Paragraph variant="secondary" size="normal" textAlign="start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
          consectetur sed turpis urna.
        </Paragraph>
      </MeetTheFounderDetailsContainer>
    </MeetTheFounderContainer>
  </LandingGridContainer>
);

export default MeetTheFounder;
