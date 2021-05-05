import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

import ReleaseItem from "src/components/ReleaseItem/ReleaseItem";

const About = () => {
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
          About
        </Heading>

        <Text
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="300"
          textAlign="start"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Stack>

      <ReleaseItem
        monthAndYearDate="June 2021"
        version="1.0"
        dayDate="01th June, 2021"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus rutrum
        sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
        consectetur sed turpis urna."
      />
    </Stack>
  );
};

export default About;
