import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faRedo,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";

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

const Controls: React.FC<ControlsProps> = ({ playing }) => {
  const onPlaying = () => {
    if (playing) {
      return (
        <FontAwesomeIcon
          icon={faPause}
          size="1x"
          color="#000000"
          onClick={() => {}}
          style={{ cursor: "pointer" }}
        />
      );
    }

    return (
      <FontAwesomeIcon
        icon={faPlay}
        size="1x"
        color="#000000"
        onClick={() => {}}
        style={{ cursor: "pointer" }}
      />
    );
  };

  return (
    <ControlsContainer>
      <ControlsButtonsContainer>
        <FontAwesomeIcon
          icon={faUndo}
          size="1x"
          color="#000000"
          onClick={() => {}}
          style={{ cursor: "pointer" }}
        />

        {onPlaying()}

        <FontAwesomeIcon
          icon={faRedo}
          size="1x"
          color="#000000"
          onClick={() => {}}
          style={{ cursor: "pointer" }}
        />
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
