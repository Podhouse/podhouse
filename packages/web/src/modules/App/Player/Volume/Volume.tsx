import React from "react";
import { Volume2 } from "react-feather";

import HorizontalSlider from "../../../../components/Slider/HorizontalSlider/HorizontalSlider";

import { VolumeContainer } from "./Volume.styles";

const iconStyle = { cursor: "pointer" };

const Volume: React.FC = () => {
  return (
    <VolumeContainer>
      <Volume2 size={20} color="#000" style={iconStyle} />
      <HorizontalSlider
        min={0}
        max={100}
        onChange={() => {}}
        defaultValue={100}
      />
    </VolumeContainer>
  );
};

export default Volume;
