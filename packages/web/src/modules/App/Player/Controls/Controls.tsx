import React from "react";
import { Play, Pause, RotateCcw, RotateCw } from "react-feather";

import {
  ControlsContainer,
  ControlsButtonsContainer,
  ControlsSliderContainer,
  ControlsTime,
} from "./Controls.styles";

import Slider from "../../../../components/Slider/Slider";

import formatTime from "../../../../utils/formatTime";

interface ControlsProps {
  ready: boolean;
  playing: boolean;
  seek: number;
  duration: number;
  onPlay: () => void;
  onPause: () => void;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBackward: (value?: number) => void;
  onForward: (value?: number) => void;
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
  onBackward,
  onForward,
}) => {
  const onPlaying = () => {
    if (playing) {
      return (
        <Pause
          size={28}
          color="#000"
          strokeWidth={1}
          style={iconStyle}
          onClick={onPause}
        />
      );
    }

    return (
      <Play
        size={28}
        color="#000"
        strokeWidth={1}
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
          <RotateCcw
            size={18}
            color="#000"
            style={iconStyle}
            strokeWidth={1.5}
            onClick={() => onBackward(15)}
          />

          {onPlaying()}

          <RotateCw
            size={18}
            color="#000"
            style={iconStyle}
            strokeWidth={1.5}
            onClick={() => onForward(15)}
          />
        </ControlsButtonsContainer>

        <ControlsSliderContainer>
          <ControlsTime>{formatTime(seek)}</ControlsTime>
          <Slider
            min={0}
            max={duration}
            value={seek}
            step={0.1}
            onChange={onSeek}
          />
          <ControlsTime>{formatTime(duration)}</ControlsTime>
        </ControlsSliderContainer>
      </ControlsContainer>
    );
  };

  return onReady();
};

export default Controls;
