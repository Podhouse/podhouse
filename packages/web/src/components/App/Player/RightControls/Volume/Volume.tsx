import React from "react";
import {
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { BsVolumeUp, BsVolumeDown, BsVolumeMute } from "react-icons/bs";

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
        <IconButton
          aria-label="Forward 15 seconds"
          icon={<BsVolumeMute size="20px" />}
          variant="light"
          size="sm"
          onClick={onMute}
        />
      );
    }
    if (volume > 0.1 && volume < 0.5) {
      return (
        <IconButton
          aria-label="Forward 15 seconds"
          icon={<BsVolumeDown size="20px" />}
          variant="light"
          size="sm"
          onClick={onMute}
        />
      );
    }

    return (
      <IconButton
        aria-label="Forward 15 seconds"
        icon={<BsVolumeUp size="20px" />}
        variant="light"
        size="sm"
        onClick={onMute}
      />
    );
  };

  const onReady = () => {
    return (
      <VolumeContainer>
        {renderVolume()}

        <Slider aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </VolumeContainer>
    );
  };

  return onReady();
};

export default Volume;
