import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
} from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";

import { RightControlsContainer } from "./RightControls.styles";

import Volume from "./Volume/Volume";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

const RightControls = () => {
  const { onRate } = usePlayerContext();

  return (
    <RightControlsContainer>
      <Menu>
        <Tooltip label="Rate" aria-label="Rate">
          <MenuButton
            as={IconButton}
            aria-label="Rate options"
            variant="light"
            icon={<BsClock size="20px" />}
            alignSelf="center"
          />
        </Tooltip>
        <MenuList>
          <MenuItem>0.5x</MenuItem>
          <MenuItem>1.0x</MenuItem>
          <MenuItem>1.5x</MenuItem>
          <MenuItem>2.0x</MenuItem>
          <MenuItem>2.5x</MenuItem>
          <MenuItem>3.0x</MenuItem>
        </MenuList>
      </Menu>

      <Volume />
    </RightControlsContainer>
  );
};

export default RightControls;
