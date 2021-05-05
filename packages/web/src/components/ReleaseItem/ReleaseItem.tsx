import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

const ReleaseItem = () => {
  return (
    <Stack direction="column" spacing="10px">
      <Heading fontSize="24px">January 2021</Heading>

      <Stack direction="row" spacing="10px">
        <Text>Version 2.4</Text>
        <Text>29th January, 2021</Text>
      </Stack>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus rutrum
        sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
        consectetur sed turpis urna.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus rutrum
        sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
        consectetur sed turpis urna.
      </Text>
    </Stack>
  );
};

export default ReleaseItem;
