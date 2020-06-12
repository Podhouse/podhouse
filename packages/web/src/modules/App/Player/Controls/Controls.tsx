import React from "react";
import { Play, Pause, RotateCcw, RotateCw } from "react-feather";

import {
  ControlsContainer,
  ControlsButtonsContainer,
  ControlsSliderContainer,
  ControlsTime,
} from "./Controls.styles";

import formatTime from "../../../../utils/formatTime";

interface ControlsProps {
  ready: boolean;
  playing: boolean;
  seek: number;
  duration: number;
  onPlay: () => void;
  onPause: () => void;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const iconStyle = { cursor: "pointer" };

const Controls: React.FC<ControlsProps> = ({
  ready,
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

  const onReady = () => {
    if (!ready) return null;

    return (
      <ControlsContainer>
        <ControlsButtonsContainer>
          <RotateCcw size={18} color="#000" style={iconStyle} />

          {onPlaying()}

          <RotateCw size={18} color="#000" style={iconStyle} />
        </ControlsButtonsContainer>

        <ControlsSliderContainer>
          <ControlsTime>{formatTime(seek)}</ControlsTime>
          <input
            type="range"
            min={0}
            max={duration}
            value={seek}
            step={0.1}
            onChange={onSeek}
          />
          <ControlsTime>{formatTime(duration)}</ControlsTime>
        </ControlsSliderContainer>
      </ControlsContainer>
    )
  }

  return onReady();
};

export default Controls;
