import React from "react";
import { Play, Pause, RotateCcw, RotateCw } from "react-feather";
import {
  BsPlay,
  BsPause,
  BsArrowCounterclockwise,
  BsArrowClockwise,
} from "react-icons/bs";
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
} from "@reach/slider";

import {
  ControlsContainer,
  ControlsButtonsContainer,
  ControlsSliderContainer,
  ControlsTime,
} from "./Controls.styles";

import { PlayerEpisode } from "src/machines/Player/Player.types";

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

const iconStyle = { cursor: "pointer" };

const formatTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);
  return [h, m > 9 ? m : h ? "0" + m : m || "0", s > 9 ? s : "0" + s]
    .filter(Boolean)
    .join(":");
};

const convertDurationToSeconds = (duration: string | undefined) => {
  if (!duration) return 0;
  const [hours, minutes, seconds] = duration.split(":");
  return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
};

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
      return <BsPause size={28} onClick={onPlay} />;
    }

    return <BsPlay size={28} onClick={onPlay} />;
  };

  if (!ready) return null;

  return (
    <ControlsContainer>
      <ControlsButtonsContainer>
        <BsArrowCounterclockwise size={18} onClick={() => onBackward(15)} />

        {onPlaying()}

        <BsArrowClockwise
          size={18}
          color="#101010"
          style={iconStyle}
          strokeWidth={2}
          onClick={() => onForward(15)}
        />
      </ControlsButtonsContainer>

      <ControlsSliderContainer>
        <ControlsTime fontSize="sm">{formatTime(seek)}</ControlsTime>

        <SliderInput
          value={seek}
          min={0}
          max={convertDurationToSeconds(episode?.duration)}
          step={0.1}
          onChange={onSeek}
        >
          <SliderTrack>
            <SliderRange />
            <SliderHandle />
          </SliderTrack>
        </SliderInput>

        <ControlsTime fontSize="sm">{episode?.duration}</ControlsTime>
      </ControlsSliderContainer>
    </ControlsContainer>
  );
};

export default Controls;
