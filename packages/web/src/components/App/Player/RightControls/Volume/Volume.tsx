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

import { usePlayerContext } from "src/machines/Player/PlayerContext";

const Volume = () => {
  const { volume, muted, onVolume, onMute } = usePlayerContext();

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

  return onReady();
};

export default Volume;
