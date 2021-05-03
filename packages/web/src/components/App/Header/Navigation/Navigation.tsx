import React from "react";
import { Stack, IconButton, Tooltip } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();

  return (
    <Stack
      direction="row"
      spacing="5px"
      w="fit-content"
      h="100%"
      alignItems="center"
    >
      <Tooltip label="Back" aria-label="Back">
        <IconButton
          w="fit-content"
          variant="light"
          aria-label="Back"
          icon={<BsChevronLeft size={16} />}
          onClick={() => history.goBack()}
        />
      </Tooltip>

      <Tooltip label="Forward" aria-label="Forward">
        <IconButton
          w="fit-content"
          variant="light"
          aria-label="Forward"
          icon={<BsChevronRight size={16} />}
          onClick={() => history.goForward()}
        />
      </Tooltip>
    </Stack>
  );
};

export default Navigation;
