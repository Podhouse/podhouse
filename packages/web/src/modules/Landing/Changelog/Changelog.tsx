import React from "react";

import Main from "./Main/Main";

import { LandingSubTitle } from "src/components/Landing/Landing.styles";

import Paragraph from "src/system/Paragraph/Paragraph";

import { ChangelogContainer, ChangelogItemContainer } from "./Changelog.styles";

const Changelog = () => (
  <>
    <Main />
    <ChangelogContainer>
      <ChangelogItemContainer>
        <LandingSubTitle>September 2020</LandingSubTitle>
        <Paragraph variant="secondary" size="normal" textAlign="start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
          consectetur sed turpis urna. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Rhoncus rutrum sollicitudin placerat id nisl, sed
          turpis. Viverra aliquam nibh consectetur sed turpis urna.
        </Paragraph>
      </ChangelogItemContainer>

      <ChangelogItemContainer>
        <LandingSubTitle>August 2020</LandingSubTitle>
        <Paragraph variant="secondary" size="normal" textAlign="start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
          consectetur sed turpis urna. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Rhoncus rutrum sollicitudin placerat id nisl, sed
          turpis. Viverra aliquam nibh consectetur sed turpis urna.
        </Paragraph>
      </ChangelogItemContainer>

      <ChangelogItemContainer>
        <LandingSubTitle>July 2020</LandingSubTitle>
        <Paragraph variant="secondary" size="normal" textAlign="start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
          consectetur sed turpis urna. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Rhoncus rutrum sollicitudin placerat id nisl, sed
          turpis. Viverra aliquam nibh consectetur sed turpis urna.
        </Paragraph>
      </ChangelogItemContainer>
    </ChangelogContainer>
  </>
);

export default Changelog;
