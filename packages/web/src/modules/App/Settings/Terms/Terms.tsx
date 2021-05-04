import React from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";

const Terms = () => {
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
          <Heading fontSize="24px">Terms</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Stack>

        <Stack direction="column" spacing="30px">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam
            nibh consectetur sed turpis urna.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam
            nibh consectetur sed turpis urna.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam
            nibh consectetur sed turpis urna.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam
            nibh consectetur sed turpis urna.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam
            nibh consectetur sed turpis urna.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            rutrum sollicitudin placerat id nisl, sed turpis. Viverra aliquam
            nibh consectetur sed turpis urna.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Terms;
