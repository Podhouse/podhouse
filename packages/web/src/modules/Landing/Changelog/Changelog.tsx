import React from "react";

import { ChangelogContainer, ChangelogItemContainer } from "./Changelog.styles";

import Main from "./Main/Main";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";

const Changelog = () => (
  <>
    <Main />
    <ChangelogContainer>
      <ChangelogItemContainer>
        <Heading variant="primary" size="normal" as="h2" fontSize={36}>
          September 2020
        </Heading>
        <Paragraph variant="secondary" size="normal" textAlign="start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
          consectetur sed turpis urna. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Rhoncus rutrum sollicitudin placerat id nisl, sed
          turpis. Viverra aliquam nibh consectetur sed turpis urna.
        </Paragraph>
      </ChangelogItemContainer>

      <ChangelogItemContainer>
        <Heading variant="primary" size="normal" as="h2" fontSize={36}>
          August 2020
        </Heading>
        <Paragraph variant="secondary" size="normal" textAlign="start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
          consectetur sed turpis urna. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Rhoncus rutrum sollicitudin placerat id nisl, sed
          turpis. Viverra aliquam nibh consectetur sed turpis urna.
        </Paragraph>
      </ChangelogItemContainer>

      <ChangelogItemContainer>
        <Heading variant="primary" size="normal" as="h2" fontSize={36}>
          July 2020
        </Heading>
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
