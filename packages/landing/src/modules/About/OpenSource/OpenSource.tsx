import React from "react";
import { Heading, Text, Stack } from "@chakra-ui/react";

const OpenSource = () => (
  <Stack
    direction="column"
    spacing="20px"
    maxW="800px"
    justifySelf="center"
    alignItems="center"
    justifyItems="center"
  >
    <Heading
      color="#101010"
      as="h2"
      fontSize={36}
      letterSpacing="-0.03em"
      textAlign="center"
      fontWeight="600"
    >
      Open source
    </Heading>

    <Text
      color="#6F6F6F"
      fontSize={16}
      lineHeight="30px"
      fontWeight="300"
      textAlign="center"
    >
      People love to know how their favorite products are built. Our code is
      open source so anyone can check it out, give comments, make suggestions
      and feedbacks, and even help us build the next podcast app for listening
      to podcasts.
    </Text>
  </Stack>
);

export default OpenSource;
