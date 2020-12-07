import React from "react";
import { Clock } from "react-feather";

import { RightControlsContainer } from "./RightControls.styles";

import Volume from "./Volume/Volume";

import { useRateContext } from "src/context/Rate/Rate";

import { PlayerEpisode } from "src/player/Player.types";

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
  const [, handleRate] = useRateContext();

  if (!episode) return null;

  return (
    <RightControlsContainer>
      {/* <List
        size={20}
        strokeWidth={1.7}
        color="#101010"
        style={{ cursor: "pointer" }}
        onClick={handleQueue}
      /> */}

      <Clock
        size={20}
        strokeWidth={1.7}
        color="#101010"
        style={{ cursor: "pointer" }}
        onClick={handleRate}
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
