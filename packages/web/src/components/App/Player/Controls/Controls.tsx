import React from "react";
import { Play, Pause, RotateCcw, RotateCw } from "react-feather";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import {
  ControlsContainer,
  ControlsButtonsContainer,
  ControlsSliderContainer,
  ControlsTime,
} from "./Controls.styles";

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

const Controls = ({
  ready,
  playing,
  seek,
  duration,
  onPlay,
  onPause,
  onSeek,
  onBackward,
  onForward,
}: ControlsProps) => {
  const onPlaying = () => {
    if (playing) {
      return (
        <Pause
          size={28}
          color="#101010"
          strokeWidth={1.7}
          style={iconStyle}
          onClick={onPause}
        />
      );
    }

    return (
      <Play
        size={28}
        color="#101010"
        strokeWidth={1.7}
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
            color="#101010"
            style={iconStyle}
            strokeWidth={2}
            onClick={() => onBackward(15)}
          />

          {onPlaying()}

          <RotateCw
            size={18}
            color="#101010"
            style={iconStyle}
            strokeWidth={2}
            onClick={() => onForward(15)}
          />
        </ControlsButtonsContainer>

        <ControlsSliderContainer>
          <ControlsTime fontSize="sm">1:21</ControlsTime>

          <Slider defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack bg="#101010" />
            </SliderTrack>
            <SliderThumb />
          </Slider>

          <ControlsTime fontSize="sm">45:12</ControlsTime>
        </ControlsSliderContainer>
      </ControlsContainer>
    );
  };

  return onReady();
};

export default Controls;
