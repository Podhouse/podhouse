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

import { PlayerEpisode } from "src/player/Player.types";

interface ControlsProps {
  ready: boolean;
  playing: boolean;
  seek: number;
  episode: PlayerEpisode | null;
  onPlay: () => void;
  onPause: () => void;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        <ControlsTime fontSize="sm">{formatTime(seek)}</ControlsTime>

        <Slider defaultValue={0} value={seek}>
          <SliderTrack>
            <SliderFilledTrack bg="#101010" />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <ControlsTime fontSize="sm">{episode?.duration}</ControlsTime>
      </ControlsSliderContainer>
    </ControlsContainer>
  );
};

export default Controls;
