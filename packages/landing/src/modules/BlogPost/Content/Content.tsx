import React from "react";
import { Stack } from "@chakra-ui/react";

interface Props {
  content: React.ReactNode;
}

const Content = ({ content }: Props) => (
  <Stack
    color="#6F6F6F"
    fontSize={16}
    lineHeight="30px"
    fontWeight="300"
    textAlign="start"
    direction="column"
    spacing="20px"
  >
    {content}
  </Stack>
);

export default Content;
