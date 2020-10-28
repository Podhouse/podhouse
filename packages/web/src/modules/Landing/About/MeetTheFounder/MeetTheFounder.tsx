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
          A software engineer living in Brazil, currently building the best app
          for you to listen your podcasts. When discovered that are not too many
          good apps to listen to podcasts on the Web, started to build Podhouse.
        </Paragraph>
      </MeetTheFounderDetailsContainer>
    </MeetTheFounderContainer>
  </LandingGridContainer>
);

export default MeetTheFounder;
