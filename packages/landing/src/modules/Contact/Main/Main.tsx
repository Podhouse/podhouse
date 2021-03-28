import React from "react";
import { Heading, Box, Link, Stack } from "@chakra-ui/react";

const Main = () => (
  <Stack
    direction="column"
    spacing="20px"
    maxW="800px"
    h="fit-content"
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
      Get in touch
    </Heading>

    <Box
      color="#6F6F6F"
      fontSize={16}
      lineHeight="30px"
      fontWeight="300"
      textAlign="center"
    >
      We're very open to feedbacks, get in touch with us and tell us anything.
      Send us any message at
      <Link
        ml={1}
        mr={1}
        href="mailto:podhouse@podhouse.app?subject=About%20Podhouse"
        aria-label="Blog"
        color="#6F6F6F"
        fontSize={16}
        lineHeight="30px"
        fontWeight="400"
        isExternal
      >
        podhouse@podhouse.app
      </Link>
      and we'll reply within 24 hours.
    </Box>
  </Stack>
);

export default Main;
