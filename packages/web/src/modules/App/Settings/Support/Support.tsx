import React from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";

const Support = () => {
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
          <Heading fontSize="24px">Support</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Support;
