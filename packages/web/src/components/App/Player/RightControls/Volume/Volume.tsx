import React from "react";
import { BsVolumeUp, BsVolumeDown, BsVolumeMute } from "react-icons/bs";
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
      return <BsVolumeMute size={16} onClick={onMute} />;
    }
    if (volume > 0.1 && volume < 0.5) {
      return <BsVolumeDown size={16} onClick={onMute} />;
    }
    return <BsVolumeUp size={16} onClick={onMute} />;
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
