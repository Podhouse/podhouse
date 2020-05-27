import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

import HorizontalSlider from "../../../../components/Slider/HorizontalSlider/HorizontalSlider";

import { VolumeContainer } from "./Volume.styles";

interface VolumeProps {
  volume: number;
  mute: boolean;
}

const Volume: React.FC<VolumeProps> = ({ volume, mute }) => {
  const onVolume = () => {
    if (volume <= 0 || mute) {
      return (
        <FontAwesomeIcon
          icon={faVolumeMute}
          size="1x"
          color="#000000"
          onClick={() => {}}
          style={{ cursor: "pointer" }}
        />
      );
    }

    return (
      <FontAwesomeIcon
        icon={faVolumeUp}
        size="1x"
        color="#000000"
        onClick={() => {}}
        style={{ cursor: "pointer" }}
      />
    );
  };

  return (
    <VolumeContainer>
      {onVolume()}

      <HorizontalSlider />
    </VolumeContainer>
  );
};

export default Volume;
