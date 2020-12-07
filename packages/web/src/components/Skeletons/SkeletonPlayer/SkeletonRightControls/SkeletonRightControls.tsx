import React from "react";
import { Clock, Volume2 } from "react-feather";
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
} from "@reach/slider";

import {
  SkeletonRightControlsContainer,
  SkeletonVolumeContainer,
} from "./SkeletonRightControls.styles";

const iconStyle = { cursor: "pointer" };

const SkeletonRightControls = () => (
  <SkeletonRightControlsContainer>
    {/* <List
      size={20}
      strokeWidth={1.7}
      color="#101010"
      style={iconStyle}
    /> */}

    <Clock size={20} strokeWidth={1.7} color="#101010" style={iconStyle} />

    <SkeletonVolumeContainer>
      <Volume2 size={20} strokeWidth={1.7} color="#101010" style={iconStyle} />

      <SliderInput defaultValue={0} value={0} disabled={true}>
        <SliderTrack>
          <SliderRange />
          <SliderHandle />
        </SliderTrack>
      </SliderInput>
    </SkeletonVolumeContainer>
  </SkeletonRightControlsContainer>
);

export default SkeletonRightControls;
