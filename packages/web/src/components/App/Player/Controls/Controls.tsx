import { memo, useMemo } from "react";
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
import { Interpreter } from "xstate";
import { useSelector } from "@xstate/react";

import {
  ControlsContainer,
  ControlsButtonsContainer,
  ControlsSliderContainer,
  ControlsTime,
} from "./Controls.styles";

import { formatTime } from "src/utils/";

import { Episode } from "src/machines/Player/PlayerMachine.types";

import {
  MachineContext,
  MachineEvent,
} from "src/machines/Player/PlayerMachine.types";

type Props = {
  service: Interpreter<MachineContext, any, MachineEvent>;
  seek: number;
  onToggle: (episode: Episode) => void;
  onPlay: () => void;
  onPause: () => void;
  onSeek: (value: number) => void;
  onForward: (value: number) => void;
  onBackward: (value: number) => void;
};

const Controls = ({
  service,
  seek,
  onToggle,
  onPlay,
  onPause,
  onSeek,
  onForward,
  onBackward,
}: Props) => {
  const playing = useSelector(service, (state) =>
    state.matches("ready.playing")
  );
  const duration = useSelector(service, (state) => state.context.duration);

  const renderControlButton = useMemo(() => {
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
  }, [playing, onPlay, onPause]);

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

        {renderControlButton}

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
