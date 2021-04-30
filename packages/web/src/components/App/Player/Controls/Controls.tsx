import React from "react";
import {
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
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

import { PlayerEpisode } from "src/machines/Player/Player.types";

import { formatTime, convertDurationToSeconds } from "src/utils/";

interface ControlsProps {
  ready: boolean;
  playing: boolean;
  seek: number;
  episode: PlayerEpisode | null;
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
        <IconButton
          aria-label="Pause episode"
          icon={<BsPause size="20px" />}
          variant="light"
          size="sm"
          onClick={() => {}}
        />
      );
    }

    return (
      <IconButton
        aria-label="Play episode"
        icon={<BsPlay size="42px" />}
        variant="light"
        size="lg"
        onClick={() => {}}
      />
    );
  };

  if (!ready) return null;

  return (
    <ControlsContainer>
      <ControlsButtonsContainer>
        <IconButton
          aria-label="Backward 15 seconds"
          icon={<BsArrowCounterclockwise size="20px" />}
          variant="light"
          size="sm"
          onClick={() => {}}
        />

        {onPlaying()}

        <IconButton
          aria-label="Forward 15 seconds"
          icon={<BsArrowClockwise size="20px" />}
          variant="light"
          size="sm"
          onClick={() => {}}
        />
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
