import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

interface Props {
  monthAndYearDate: string;
  version: string;
  dayDate: string;
  text: string;
}

const ReleaseItem = ({ monthAndYearDate, version, dayDate, text }: Props) => {
  return (
    <Stack direction="column" spacing="10px">
      <Heading fontSize="24px">{monthAndYearDate}</Heading>

      <Stack direction="row" spacing="10px">
        <Text>Version {version}</Text>
        <Text>{dayDate}</Text>
      </Stack>

      <Text>{text}</Text>
    </Stack>
  );
};

export default ReleaseItem;
