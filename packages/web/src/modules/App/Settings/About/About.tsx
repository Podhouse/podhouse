import React from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";

import ReleaseItem from "src/components/ReleaseItem/ReleaseItem";

const About = () => {
  return (
    <Box w="100%" h="100%" p="20px">
      <Stack
        direction="column"
        spacing="20px"
        w="100%"
        h="100%"
        maxW="500px"
        margin="0 auto"
      >
        <Stack direction="column" spacing="10px">
          <Heading fontSize="24px">About</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Stack>

        <Stack direction="column" spacing="30px">
          <ReleaseItem />
          <ReleaseItem />
          <ReleaseItem />
          <ReleaseItem />
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
