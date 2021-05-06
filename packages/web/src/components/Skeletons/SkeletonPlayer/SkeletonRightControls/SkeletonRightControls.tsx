import React from "react";
import { BsListUl, BsClock, BsVolumeUp } from "react-icons/bs";
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

const SkeletonRightControls = () => (
  <SkeletonRightControlsContainer>
    <BsListUl size={20} />

    <BsClock size={20} />

    <SkeletonVolumeContainer>
      <BsVolumeUp size={20} />

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
