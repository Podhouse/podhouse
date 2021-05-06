import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

import General from "./General/General";
import Podcasters from "./Podcasters/Podcasters";

const FAQ = () => {
  return (
    <Stack
      direction="column"
      spacing="20px"
      p="20px"
      w="100%"
      h="100%"
      maxW="500px"
      margin="0 auto"
    >
      <Stack direction="column" spacing="10px">
        <Heading as="h1" fontSize={36} textAlign="start">
          Frequently Asked Questions
        </Heading>

        <Text>Find all the questions you might have about us here</Text>
      </Stack>

      <General />
      <Podcasters />
    </Stack>
  );
};

export default FAQ;
