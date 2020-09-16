import React from "react";

import {
  FAQItemsContainer,
  FAQItemContainer,
  FAQItemTitle,
} from "./FAQ.styles";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingSubTitle,
} from "../Landing.styles";

import Paragraph from "src/system/Paragraph/Paragraph";

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
      <Paragraph variant="secondary" size="normal">
        {description}
      </Paragraph>
    </LandingGridContentContainer>

    <FAQItemsContainer>
      {items.map(({ title, body }: FAQItem) => (
        <FAQItemContainer key={title}>
          <FAQItemTitle>{title}</FAQItemTitle>
          <Paragraph variant="secondary" size="normal" textAlign="start">
            {body}
          </Paragraph>
        </FAQItemContainer>
      ))}
    </FAQItemsContainer>
  </LandingGridContainer>
);

export default FAQ;
