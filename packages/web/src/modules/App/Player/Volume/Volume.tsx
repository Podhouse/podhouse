import React from "react";
import { Volume2, VolumeX } from "react-feather";

import HorizontalSlider from "../../../../components/Slider/HorizontalSlider/HorizontalSlider";
import Tooltip from "../../../../components/Tooltip/Tooltip";

import { VolumeContainer } from "./Volume.styles";

interface VolumeProps {
  volume: number;
  mute: boolean;
}

const iconStyle = { cursor: "pointer" };

const Volume: React.FC<VolumeProps> = ({ volume, mute }) => {
  const onVolume = () => {
    if (volume <= 0 || mute) {
      return <VolumeX size={20} color="#000" style={iconStyle} />;
    }

    return <Volume2 size={20} color="#000" style={iconStyle} />;
  };

  return (
    <VolumeContainer>
      <Tooltip title="Mute">{onVolume()}</Tooltip>

      <HorizontalSlider />
    </VolumeContainer>
  );
};

export default Volume;
