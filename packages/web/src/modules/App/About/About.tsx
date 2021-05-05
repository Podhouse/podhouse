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
          Here you can learn more about our latest releases
        </Text>
      </Stack>

      <ReleaseItem
        monthAndYearDate="June 2021"
        version="1.0"
        dayDate="01th June, 2021"
        text="Podhouse aims to help people discover new podcasts and listen to their favorites. Built for people who want to listen to podcasts combining with a nice experience. The first stable version of Podhouse available. We brought to our users a lot of features such as new UI design, dark mode, queue episodes, favorite episodes. We fixed a lot of bugs that were on our beta release."
      />
    </Stack>
  );
};

export default About;
