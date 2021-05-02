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
        <MenuButton
          as={IconButton}
          aria-label="Rate options"
          variant="light"
          icon={<BsClock size="20px" />}
          alignSelf="center"
        />
        <MenuList>
          <MenuItem>0.5x</MenuItem>
          <MenuItem>1.0x</MenuItem>
          <MenuItem>1.5x</MenuItem>
          <MenuItem>2.0x</MenuItem>
          <MenuItem>2.5x</MenuItem>
          <MenuItem>3.0x</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Queue options"
          variant="light"
          icon={<BsListUl size="20px" />}
          alignSelf="center"
        />
        <MenuList>
          <MenuGroup title="Queue">
            <MenuItem>
              <Stack direction="row" spacing="10px">
                <Image
                  width="50px"
                  height="50px"
                  borderRadius="5px"
                  src="https://yt3.ggpht.com/ytc/AAUvwnjtZ27pIbLoaHBRgDTeCSZ5yiH7CWqKbjhpL-TgLA=s900-c-k-c0x00ffffff-no-rj"
                  lazy="loading"
                />

                <Stack direction="column" spacing="10px">
                  <Link>403 - Return of Jedai</Link>
                  <Text>99% Invisible</Text>
                </Stack>
              </Stack>
            </MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
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
