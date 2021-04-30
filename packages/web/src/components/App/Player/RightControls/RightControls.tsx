import React from "react";
import { IconButton } from "@chakra-ui/react";
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
      <IconButton
        aria-label="Forward 15 seconds"
        icon={<BsListUl size="20px" />}
        variant="light"
        size="sm"
        onClick={() => {}}
      />

      <IconButton
        aria-label="Forward 15 seconds"
        icon={<BsClock size="20px" />}
        variant="light"
        size="sm"
        onClick={() => {}}
      />

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
