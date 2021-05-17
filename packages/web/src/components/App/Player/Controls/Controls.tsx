import React from "react";
import {
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from "@chakra-ui/react";
import {
  BsPlay,
  BsPause,
  BsArrowCounterclockwise,
  BsArrowClockwise,
} from "react-icons/bs";

import {
  ControlsContainer,
  ControlsButtonsContainer,
  ControlsSliderContainer,
  ControlsTime,
} from "./Controls.styles";

import { Episode } from "src/machines/Player/Player.types";

import { formatTime, convertDurationToSeconds } from "src/utils/";

interface ControlsProps {
  ready: boolean;
  playing: boolean;
  seek: number;
  episode: null | Episode;
  onPlay: () => void;
  onPause: () => void;
  onSeek: (
    newValue: number,
    props?: { min?: number; max?: number; handlePosition?: string }
  ) => void;
  onBackward: (value?: number) => void;
  onForward: (value?: number) => void;
}

const Controls = ({
  ready,
  playing,
  seek,
  episode,
  onPlay,
  onPause,
  onSeek,
  onBackward,
  onForward,
}: ControlsProps) => {
  const onPlaying = () => {
    if (playing) {
      return (
        <Tooltip label="Pause" aria-label="Pause audio">
          <IconButton
            aria-label="Pause episode"
            icon={<BsPause size="20px" />}
            variant="light"
            size="sm"
            onClick={() => {}}
          />
        </Tooltip>
      );
    }

    return (
      <Tooltip label="Play" aria-label="Play audio">
        <IconButton
          aria-label="Play episode"
          icon={<BsPlay size="42px" />}
          variant="light"
          size="lg"
          onClick={() => {}}
        />
      </Tooltip>
    );
  };

  if (!ready) return null;

  return (
    <ControlsContainer>
      <ControlsButtonsContainer>
        <Tooltip label="-15" aria-label="-15">
          <IconButton
            aria-label="-15"
            icon={<BsArrowCounterclockwise size="20px" />}
            variant="light"
            size="sm"
            onClick={() => {}}
          />
        </Tooltip>

        {onPlaying()}

        <Tooltip label="+15" aria-label="+15">
          <IconButton
            aria-label="+15"
            icon={<BsArrowClockwise size="20px" />}
            variant="light"
            size="sm"
            onClick={() => {}}
          />
        </Tooltip>
      </ControlsButtonsContainer>

      <ControlsSliderContainer>
        <ControlsTime fontSize="14px" fontWeight="300" lineHeight="30px">
          18:29
        </ControlsTime>

        <Slider aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <ControlsTime fontSize="14px" fontWeight="300" lineHeight="30px">
          59:23
        </ControlsTime>
      </ControlsSliderContainer>
    </ControlsContainer>
  );
};

export default Controls;
