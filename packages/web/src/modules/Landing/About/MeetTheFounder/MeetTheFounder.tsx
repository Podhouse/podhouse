import React from "react";

import {
  LandingGridContainer,
  LandingSubTitle,
} from "src/components/Landing/Landing.styles";

import {
  MeetTheFounderContainer,
  MeetTheFounderImage,
  MeetTheFounderDetailsContainer,
  MeetTheFounderName,
  MeetTheFounderParagraph,
} from "./MeetTheFounder.styles";

const MeetTheFounder = () => (
  <LandingGridContainer>
    <LandingSubTitle>Meet the founder</LandingSubTitle>

    <MeetTheFounderContainer>
      <MeetTheFounderImage />

      <MeetTheFounderDetailsContainer>
        <MeetTheFounderName>Leonardo Maldonado</MeetTheFounderName>
        <MeetTheFounderParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
          consectetur sed turpis urna.
        </MeetTheFounderParagraph>
      </MeetTheFounderDetailsContainer>
    </MeetTheFounderContainer>
  </LandingGridContainer>
);

export default MeetTheFounder;
