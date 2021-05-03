import React from "react";
import {
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
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
        <Tooltip label="Mute" aria-label="Mute">
          <IconButton
            aria-label="Mute"
            icon={<BsVolumeMute size="20px" />}
            variant="light"
            size="sm"
            onClick={onMute}
          />
        </Tooltip>
      );
    }
    if (volume > 0.1 && volume < 0.5) {
      return (
        <Tooltip label="Mute" aria-label="Mute">
          <IconButton
            aria-label="Mute"
            icon={<BsVolumeDown size="20px" />}
            variant="light"
            size="sm"
            onClick={onMute}
          />
        </Tooltip>
      );
    }

    return (
      <Tooltip label="Mute" aria-label="Mute">
        <IconButton
          aria-label="Mute"
          icon={<BsVolumeUp size="20px" />}
          variant="light"
          size="sm"
          onClick={onMute}
        />
      </Tooltip>
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
