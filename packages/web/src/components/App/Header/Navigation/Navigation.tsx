import React from "react";
import { Stack, IconButton } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Navigation = () => {
  return (
    <Stack
      direction="row"
      spacing="5px"
      w="fit-content"
      h="100%"
      alignItems="center"
    >
      <IconButton
        w="fit-content"
        variant="ghost"
        aria-label="Go backward"
        icon={<BsChevronLeft size={16} />}
      />
      <IconButton
        w="fit-content"
        variant="ghost"
        aria-label="Go forward"
        icon={<BsChevronRight size={16} />}
      />
    </Stack>
  );
};

export default Navigation;
