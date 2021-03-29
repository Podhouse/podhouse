import React from "react";
import { Clock } from "react-feather";
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
  if (!episode) return null;

  return (
    <RightControlsContainer>
      <BsListUl
        size={20}
        color="#101010"
        style={{ cursor: "pointer" }}
        onClick={() => {}}
      />

      <BsClock
        size={20}
        color="#101010"
        style={{ cursor: "pointer" }}
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
