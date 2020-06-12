import React from "react";
import {
  Volume as VolumeFirst,
  Volume1,
  Volume2,
  VolumeX,
} from "react-feather";

import { VolumeContainer } from "./Volume.styles";

const iconStyle = { cursor: "pointer" };

interface VolumeProps {
  ready: boolean;
  volume: number;
  muted: boolean;
  onVolume: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMute: () => void;
}

const Volume: React.FC<VolumeProps> = ({ ready, volume, muted, onVolume, onMute }) => {
  const renderVolume = () => {
    if (volume === 0 || muted) {
      return (
        <VolumeX size={20} color="#000" style={iconStyle} onClick={onMute} />
      );
    }
    if (volume === 0.1) {
      return (
        <VolumeFirst
          size={20}
          color="#000"
          style={iconStyle}
          onClick={onMute}
        />
      );
    }
    if (volume > 0.1 && volume < 0.5) {
      return (
        <Volume1 size={20} color="#000" style={iconStyle} onClick={onMute} />
      );
    }
    if (volume > 0.5 && volume < 0.8) {
      return (
        <Volume2 size={20} color="#000" style={iconStyle} onClick={onMute} />
      );
    }
    return (
      <Volume2 size={20} color="#000" style={iconStyle} onClick={onMute} />
    );
  };

  const onReady = () => {
    if (!ready) return null;

    return (
      <VolumeContainer>
        {renderVolume()}
        <input
          type="range"
          min={0}
          max={1}
          value={volume}
          step={0.1}
          onChange={onVolume}
        />
      </VolumeContainer>
    )
  }

  return onReady();
};

export default Volume;
