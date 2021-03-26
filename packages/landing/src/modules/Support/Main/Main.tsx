import React from "react";
import { Heading, Text, Stack } from "@chakra-ui/react";

const Main = () => (
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
      as="h1"
      fontSize={64}
      letterSpacing="-0.03em"
      textAlign="center"
      fontWeight="600"
    >
      Support
    </Heading>

    <Text
      color="#6F6F6F"
      fontSize={16}
      lineHeight="30px"
      fontWeight="300"
      textAlign="center"
    >
      You can find all kind of questions that you have about us here
    </Text>
  </Stack>
);

export default Main;
