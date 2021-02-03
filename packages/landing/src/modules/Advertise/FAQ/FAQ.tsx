import React from "react";
import { Heading, Text } from "@chakra-ui/react";

import { FAQItemsContainer, FAQItemContainer } from "./FAQ.styles";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

const items = [
  {
    title: "Can I advertise my product/company?",
    body:
      "Yes, you can. Shoot us an email and we can discuss it, the price is the same for podcast owners and product/company owners.",
  },
  {
    title: "What are the terms of sale to advertise on Podhouse?",
    body:
      "After you purchase, it will be approved in 24 hours. Ad text and images must be appropriate for a general audience of all ages.",
  },
  {
    title: "What if my podcast was not approved?",
    body:
      "We reserve the right to reject an podcast for any reason, such as quality concerns, content, etc. If your podcast was not approved, your payment will be refunded.",
  },
  {
    title: "How long my podcast will be featured",
    body: "Your podcast will be featured for 30 days.",
  },
];

interface FAQItem {
  title: string;
  body: string;
}

const FAQ = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading
        color="#101010"
        as="h2"
        fontSize={36}
        letterSpacing="-0.03em"
        textAlign="center"
      >
        Frequently asked questions
      </Heading>
      <Text color="#101010" lineHeight="30px" textAlign="start">
        Here's some questions about advertising in Podhouse that you might have
      </Text>
    </LandingGridContentContainer>

    <FAQItemsContainer>
      {items.map(({ title, body }: FAQItem) => (
        <FAQItemContainer key={title}>
          <Heading
            color="#101010"
            as="h3"
            fontSize={16}
            lineHeight="30px"
            textAlign="start"
          >
            {title}
          </Heading>
          <Text color="#101010" lineHeight="30px" textAlign="start">
            {body}
          </Text>
        </FAQItemContainer>
      ))}
    </FAQItemsContainer>
  </LandingGridContainer>
);

export default FAQ;
