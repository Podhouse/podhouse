import React from "react";
import { Heading, Text, Stack } from "@chakra-ui/react";

import { FAQItemsContainer, FAQItemContainer } from "./FAQ.styles";

const items = [
  {
    title: "Can I advertise my product/company?",
    body:
      "Yes, you can. Shoot us an email and we can discuss it, the price is the same for podcast owners and product/company owners.",
  },
  {
    title: "What are the terms of sale to advertise on Podhouse?",
    body:
      "After you buy, it will be approved in 24 hours. Ad text and images must be appropriate for a general audience of all ages.",
  },
  {
    title: "What if my podcast was not approved?",
    body:
      "We reserve the right to reject an podcast for any reason, such as quality concerns, content. If your podcast was not approved, your payment will be refunded.",
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
  <Stack
    direction="column"
    spacing="20px"
    maxW="800px"
    justifySelf="center"
    alignItems="center"
    justifyItems="center"
  >
    <Stack direction="column" spacing="20px">
      <Heading
        color="#101010"
        as="h2"
        fontSize={36}
        letterSpacing="-0.03em"
        textAlign="center"
        fontWeight="600"
      >
        Frequently asked questions
      </Heading>
      <Text
        color="#6F6F6F"
        fontSize={16}
        lineHeight="30px"
        fontWeight="300"
        textAlign="center"
      >
        Here's some questions about advertising in Podhouse that you might have
      </Text>
    </Stack>

    <FAQItemsContainer>
      {items.map(({ title, body }: FAQItem) => (
        <FAQItemContainer key={title}>
          <Heading
            as="h3"
            color="#101010"
            fontSize={16}
            lineHeight="30px"
            fontWeight="500"
            textAlign="start"
          >
            {title}
          </Heading>
          <Text
            color="#6F6F6F"
            fontSize={16}
            lineHeight="30px"
            fontWeight="300"
            textAlign="start"
          >
            {body}
          </Text>
        </FAQItemContainer>
      ))}
    </FAQItemsContainer>
  </Stack>
);

export default FAQ;
