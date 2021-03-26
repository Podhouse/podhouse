import React from "react";
import { Heading, Stack } from "@chakra-ui/react";

const Info = () => (
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
      Info
    </Heading>
  </Stack>
);

export default Info;
