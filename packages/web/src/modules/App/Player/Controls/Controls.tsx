import React from "react";
import { Play, Pause, RotateCcw, RotateCw } from "react-feather";

import HorizontalSlider from "../../../../components/Slider/HorizontalSlider/HorizontalSlider";

import {
  ControlsContainer,
  ControlsButtonsContainer,
  ControlsSliderContainer,
  ControlsTime,
} from "./Controls.styles";

interface ControlsProps {
  playing: boolean;
}

const iconStyle = { cursor: "pointer" };

const Controls: React.FC<ControlsProps> = ({ playing }) => {
  const onPlaying = () => {
    if (playing) {
      return (
        <Pause size={30} color="#000" strokeWidth={1.5} style={iconStyle} />
      );
    }

    return <Play size={30} color="#000" strokeWidth={1.5} style={iconStyle} />;
  };

  return (
    <ControlsContainer>
      <ControlsButtonsContainer>
        <RotateCw size={18} color="#000" style={iconStyle} />

        {onPlaying()}

        <RotateCcw size={18} color="#000" style={iconStyle} />
      </ControlsButtonsContainer>

      <ControlsSliderContainer>
        <ControlsTime>28:21</ControlsTime>
        <HorizontalSlider />
        <ControlsTime>1:27:17</ControlsTime>
      </ControlsSliderContainer>
    </ControlsContainer>
  );
};

export default Controls;
