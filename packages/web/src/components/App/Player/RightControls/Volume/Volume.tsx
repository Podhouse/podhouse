import React, { memo } from "react";
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

interface Props {
  volume: number;
  mute: boolean;
  onMute: () => void;
  onVolume: (value: number) => void;
}

const Volume = ({ volume, mute, onMute, onVolume }: Props) => {
  console.log("rerendering from volume!!");

  const renderVolume = () => {
    if (volume === 0) {
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

  return (
    <VolumeContainer>
      {renderVolume()}

      <Slider
        aria-label="slider-ex-1"
        value={volume}
        min={0}
        max={1}
        step={0.1}
        onChange={onVolume}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </VolumeContainer>
  );
};

export default memo(Volume);
