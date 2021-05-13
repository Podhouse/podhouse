import React from "react";
import {
  Stack,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { BsListUl, BsClock } from "react-icons/bs";

import { RightControlsContainer } from "./RightControls.styles";

import Volume from "./Volume/Volume";

import { PlayerEpisode } from "src/machines/Player/Player.types";

interface RightControlsProps {
  ready: boolean;
  volume: number;
  muted: boolean;
  episode: PlayerEpisode | null;
  onVolume: (
    newValue: number,
    props?: { min?: number; max?: number; handlePosition?: string }
  ) => void;
  onMute: () => void;
}

const RightControls = ({
  ready,
  volume,
  muted,
  episode,
  onVolume,
  onMute,
}: RightControlsProps) => {
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

      <Volume
        ready={ready}
        volume={volume}
        muted={muted}
        onVolume={onVolume}
        onMute={onMute}
      />
    </RightControlsContainer>
  );
};

export default RightControls;
