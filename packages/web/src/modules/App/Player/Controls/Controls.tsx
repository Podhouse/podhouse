import React from "react";
import { Play, Pause, RotateCcw, RotateCw } from "react-feather";

import {
  ControlsContainer,
  ControlsButtonsContainer,
  ControlsSliderContainer,
  ControlsTime,
} from "./Controls.styles";

interface ControlsProps {
  playing: boolean;
  seek: number;
  duration: number;
  onPlay: () => void;
  onPause: () => void;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const iconStyle = { cursor: "pointer" };

const Controls: React.FC<ControlsProps> = ({
  playing,
  seek,
  duration,
  onPlay,
  onPause,
  onSeek,
}) => {
  const onPlaying = () => {
    if (playing) {
      return (
        <Pause
          size={30}
          color="#000"
          strokeWidth={1.5}
          style={iconStyle}
          onClick={onPause}
        />
      );
    }

    return (
      <Play
        size={30}
        color="#000"
        strokeWidth={1.5}
        style={iconStyle}
        onClick={onPlay}
      />
    );
  };

  return (
    <ControlsContainer>
      <ControlsButtonsContainer>
        <RotateCcw size={18} color="#000" style={iconStyle} />

        {onPlaying()}

        <RotateCw size={18} color="#000" style={iconStyle} />
      </ControlsButtonsContainer>

      <ControlsSliderContainer>
        <ControlsTime>{seek}</ControlsTime>
        <input
          type="range"
          min={0}
          max={duration}
          value={seek}
          step={0.1}
          onChange={onSeek}
        />
        <ControlsTime>{duration}</ControlsTime>
      </ControlsSliderContainer>
    </ControlsContainer>
  );
};

export default Controls;
