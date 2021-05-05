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

      <Stack direction="column" spacing="30px">
        <ReleaseItem />
        <ReleaseItem />
        <ReleaseItem />
        <ReleaseItem />
      </Stack>
    </Stack>
  );
};

export default About;
