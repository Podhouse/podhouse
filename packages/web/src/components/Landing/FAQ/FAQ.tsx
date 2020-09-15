import React from "react";

import {
  FAQItemsContainer,
  FAQItemContainer,
  FAQItemTitle,
  FAQItemBody,
} from "./FAQ.styles";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingSubTitle,
  LandingParagraph,
} from "../Landing.styles";

interface FAQItem {
  title: string;
  body: string;
}

interface FAQProps {
  description: string;
  items: Array<FAQItem>;
}

const FAQ = ({ description, items }: FAQProps) => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <LandingSubTitle>Frequently asked questions</LandingSubTitle>
      <LandingParagraph>{description}</LandingParagraph>
    </LandingGridContentContainer>

    <FAQItemsContainer>
      {items.map(({ title, body }: FAQItem) => (
        <FAQItemContainer key={title}>
          <FAQItemTitle>{title}</FAQItemTitle>
          <FAQItemBody>{body}</FAQItemBody>
        </FAQItemContainer>
      ))}
    </FAQItemsContainer>
  </LandingGridContainer>
);

export default FAQ;
