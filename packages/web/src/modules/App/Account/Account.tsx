import React from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";

import ReleaseItem from "src/components/ReleaseItem/ReleaseItem";

const Account = () => {
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
          Account
        </Heading>

        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Stack>

      <Stack direction="column" spacing="30px"></Stack>
    </Stack>
  );
};

export default Account;
