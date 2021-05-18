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

import { usePlayerContext } from "src/machines/Player/PlayerContext";

import { formatTime } from "src/utils/";

const Controls = () => {
  const {
    ready,
    playing,
    episode,
    seek,
    onPlay,
    onPause,
    onSeek,
    onForward,
    onBackward,
  } = usePlayerContext();

  const renderControlButton = () => {
    if (playing) {
      return (
        <Tooltip label="Pause" aria-label="Pause audio">
          <IconButton
            aria-label="Pause episode"
            icon={<BsPause size="42px" />}
            variant="light"
            size="lg"
            onClick={onPause}
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
          onClick={onPlay}
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
            onClick={onBackward}
          />
        </Tooltip>

        {renderControlButton()}

        <Tooltip label="+15" aria-label="+15">
          <IconButton
            aria-label="+15"
            icon={<BsArrowClockwise size="20px" />}
            variant="light"
            size="sm"
            onClick={onForward}
          />
        </Tooltip>
      </ControlsButtonsContainer>

      <ControlsSliderContainer>
        <ControlsTime fontSize="14px" fontWeight="300" lineHeight="30px">
          {formatTime(seek)}
        </ControlsTime>

        <Slider
          aria-label="slider-ex-1"
          defaultValue={0}
          value={seek}
          onChange={onSeek}
          min={0}
          max={episode.duration}
          step={0.1}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <ControlsTime fontSize="14px" fontWeight="300" lineHeight="30px">
          {formatTime(episode.duration)}
        </ControlsTime>
      </ControlsSliderContainer>
    </ControlsContainer>
  );
};

export default Controls;
