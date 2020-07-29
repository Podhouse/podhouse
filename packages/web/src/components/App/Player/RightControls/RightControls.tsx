import * as React from "react";
import { Clock, List } from "react-feather";

import { RightControlsContainer } from "./RightControls.styles";

import Volume from "./Volume/Volume";

import useTheme from "src/system/useTheme";

import { useQueueContext } from "src/context/Queue/Queue";

const iconStyle = { cursor: "pointer" };

interface RightControlsProps {
  ready: boolean;
  volume: number;
  muted: boolean;
  onVolume: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMute: () => void;
}

const RightControls = ({
  ready,
  volume,
  muted,
  onVolume,
  onMute,
}: RightControlsProps) => {
  const [, handleQueue] = useQueueContext();

  const themeState = useTheme();

  const iconColor = themeState.dark ? "#FFFFFF" : "#101010";

  return (
    <RightControlsContainer>
      <List
        size={20}
        strokeWidth={1.5}
        color={iconColor}
        style={iconStyle}
        onClick={handleQueue}
      />

      <Clock
        size={20}
        strokeWidth={1.5}
        color={iconColor}
        style={iconStyle}
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
