import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { Stack, Heading, Divider } from "@chakra-ui/react";

const Subscriptions = () => {
  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <Stack
        direction="column"
        spacing="20px"
        w="100%"
        maxW="1000px"
        p="20px"
        margin="0 auto"
      >
        <Stack direction="column" spacing="5px">
          <Heading
            as="h1"
            fontSize={16}
            fontWeight="600"
            letterSpacing="-0.03em"
            lineHeight="30px"
            textAlign="start"
          >
            Subscriptions
          </Heading>

          <Divider orientation="horizontal" />
        </Stack>

        <Stack direction="column" spacing="20px"></Stack>
      </Stack>
    </Scrollbars>
  );
};

export default Subscriptions;
