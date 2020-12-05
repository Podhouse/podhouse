import React from "react";
import { Clock, Volume2 } from "react-feather";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

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

      <Slider defaultValue={0} value={0}>
        <SliderTrack>
          <SliderFilledTrack bg="#101010" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </SkeletonVolumeContainer>
  </SkeletonRightControlsContainer>
);

export default SkeletonRightControls;
