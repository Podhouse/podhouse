import React from "react";
import { Heading, Text, Stack } from "@chakra-ui/react";

const Independent = () => (
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
      Independent
    </Heading>

    <Text
      color="#6F6F6F"
      fontSize={16}
      lineHeight="30px"
      fontWeight="300"
      textAlign="center"
    >
      Our mission is to spread podcasts for everyone. We are not currently
      interested in raising funds or taking any investment. We believe that an
      independent startup can grow faster and focused in the long-time. We plan
      to be more open as possible, share our revenue, talk more with users and
      advertisers, etc.
    </Text>
  </Stack>
);

export default Independent;
