import React from "react";
import { Play, Pause, RotateCcw, RotateCw } from "react-feather";

import HorizontalSlider from "../../../../components/Slider/HorizontalSlider/HorizontalSlider";
import Tooltip from "../../../../components/Tooltip/Tooltip";

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
        <Tooltip title="Pause">
          <Pause size={30} color="#000" strokeWidth={1.5} style={iconStyle} />
        </Tooltip>
      );
    }

    return (
      <Tooltip title="Play">
        <Play size={30} color="#000" strokeWidth={1.5} style={iconStyle} />
      </Tooltip>
    );
  };

  return (
    <ControlsContainer>
      <ControlsButtonsContainer>
        <Tooltip title="-15">
          <RotateCcw size={18} color="#000" style={iconStyle} />
        </Tooltip>

        {onPlaying()}

        <Tooltip title="+15">
          <RotateCw size={18} color="#000" style={iconStyle} />
        </Tooltip>
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
