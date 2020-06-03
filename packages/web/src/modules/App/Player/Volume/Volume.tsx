import React, { useCallback, ChangeEvent } from "react";
import { Volume2 } from "react-feather";
import { useAudioPlayer } from "react-use-audio-player";

import HorizontalSlider from "../../../../components/Slider/HorizontalSlider/HorizontalSlider";

import { VolumeContainer } from "./Volume.styles";

const iconStyle = { cursor: "pointer" };

const Volume: React.FC = () => {
  const { volume } = useAudioPlayer();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const volValue = parseFloat((Number(event) / 100).toFixed(2));
      return volume(volValue);
    },
    [volume],
  );

  return (
    <VolumeContainer>
      <Volume2 size={20} color="#000" style={iconStyle} />
      <HorizontalSlider
        min={0}
        max={100}
        onChange={handleChange}
        defaultValue={100}
      />
    </VolumeContainer>
  );
};

export default Volume;
