import React from "react";
import {
  Stack,
  Heading,
  Text,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";

const Account = () => {
  return (
    <Stack direction="column" spacing="20px">
      <Stack direction="column" spacing="10px">
        <Heading as="h1" fontSize="24px">
          Account
        </Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Stack>

      <Stack direction="column" spacing="20px">
        <Editable defaultValue="Take some chakra">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Stack>
    </Stack>
  );
};

export default Account;
