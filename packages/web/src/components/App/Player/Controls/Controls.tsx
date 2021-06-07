import { memo } from "react";
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

import { formatTime } from "src/utils/";

import { Episode } from "src/machines/Player/PlayerMachine.types";

interface Props {
  playing: boolean;
  seek: number;
  duration: number;
  onToggle: (episode: Episode) => void;
  onPlay: () => void;
  onPause: () => void;
  onSeek: (value: number) => void;
  onForward: (value: number) => void;
  onBackward: (value: number) => void;
}

const Controls = ({
  playing,
  duration,
  seek,
  onToggle,
  onPlay,
  onPause,
  onSeek,
  onForward,
  onBackward,
}: Props) => {
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

  return (
    <ControlsContainer>
      <ControlsButtonsContainer>
        <Tooltip label="-15" aria-label="-15">
          <IconButton
            aria-label="-15"
            icon={<BsArrowCounterclockwise size="20px" />}
            variant="light"
            size="sm"
            onClick={() => onBackward(15)}
          />
        </Tooltip>

        {renderControlButton()}

        <Tooltip label="+15" aria-label="+15">
          <IconButton
            aria-label="+15"
            icon={<BsArrowClockwise size="20px" />}
            variant="light"
            size="sm"
            onClick={() => onForward(15)}
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
          max={duration}
          step={0.1}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <ControlsTime fontSize="14px" fontWeight="300" lineHeight="30px">
          {formatTime(duration)}
        </ControlsTime>
      </ControlsSliderContainer>
    </ControlsContainer>
  );
};

export default memo(Controls);
