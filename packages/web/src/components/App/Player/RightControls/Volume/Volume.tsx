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
import { Interpreter } from "xstate";
import { useSelector } from "@xstate/react";

import { VolumeContainer } from "./Volume.styles";

import {
  MachineContext,
  MachineEvent,
} from "src/machines/Player/PlayerMachine.types";

type Props = {
  service: Interpreter<MachineContext, any, MachineEvent>;
  onMute: () => void;
  onVolume: (value: number) => void;
};

const Volume = ({ service, onMute, onVolume }: Props) => {
  const volume: number = useSelector(service, (state) => state.context.volume);
  const mute: boolean = useSelector(service, (state) => state.context.mute);

  const renderVolume = () => {
    if (volume === 0 || mute) {
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
