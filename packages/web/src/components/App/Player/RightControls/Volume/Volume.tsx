import React from "react";
import {
  Volume as VolumeFirst,
  Volume1,
  Volume2,
  VolumeX,
} from "react-feather";
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
} from "@reach/slider";

import { VolumeContainer } from "./Volume.styles";

interface VolumeProps {
  ready: boolean;
  volume: number;
  muted: boolean;
  onVolume: (
    newValue: number,
    props?: { min?: number; max?: number; handlePosition?: string }
  ) => void;
  onMute: () => void;
}

const Volume = ({ ready, volume, muted, onVolume, onMute }: VolumeProps) => {
  const renderVolume = () => {
    if (volume === 0 || muted) {
      return (
        <VolumeX
          size={20}
          strokeWidth={1.7}
          color="#101010"
          style={{ cursor: "pointer" }}
          onClick={onMute}
        />
      );
    }
    if (volume === 0.1) {
      return (
        <VolumeFirst
          size={20}
          strokeWidth={1.7}
          color="#101010"
          style={{ cursor: "pointer" }}
          onClick={onMute}
        />
      );
    }
    if (volume > 0.1 && volume < 0.5) {
      return (
        <Volume1
          size={20}
          strokeWidth={1.7}
          color="#101010"
          style={{ cursor: "pointer" }}
          onClick={onMute}
        />
      );
    }
    if (volume > 0.5 && volume < 0.8) {
      return (
        <Volume2
          size={20}
          strokeWidth={1.7}
          color="#101010"
          style={{ cursor: "pointer" }}
          onClick={onMute}
        />
      );
    }
    return (
      <Volume2
        size={20}
        strokeWidth={1.7}
        color="#101010"
        style={{ cursor: "pointer" }}
        onClick={onMute}
      />
    );
  };

  const onReady = () => {
    if (!ready) return null;

    return (
      <VolumeContainer>
        {renderVolume()}

        <SliderInput
          value={volume}
          min={0}
          max={1}
          step={0.1}
          onChange={onVolume}
        >
          <SliderTrack>
            <SliderRange />
            <SliderHandle />
          </SliderTrack>
        </SliderInput>
      </VolumeContainer>
    );
  };

  return onReady();
};

export default Volume;
