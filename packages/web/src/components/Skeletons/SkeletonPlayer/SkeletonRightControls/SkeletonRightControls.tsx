import React from "react";
import {
  Skeleton,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { BsListUl, BsClock, BsVolumeUp } from "react-icons/bs";

import {
  SkeletonRightControlsContainer,
  SkeletonVolumeContainer,
} from "./SkeletonRightControls.styles";

const SkeletonRightControls = () => (
  <SkeletonRightControlsContainer>
    <IconButton
      aria-label="Rate"
      variant="light"
      icon={<BsClock size="20px" />}
      alignSelf="center"
      isDisabled={true}
    />

    <IconButton
      aria-label="Queue"
      variant="light"
      icon={<BsListUl size="20px" />}
      alignSelf="center"
      isDisabled={true}
    />

    <SkeletonVolumeContainer>
      <IconButton
        aria-label="Volume"
        icon={<BsVolumeUp size="20px" />}
        variant="light"
        size="sm"
        isDisabled={true}
      />

      <Slider defaultValue={0} isDisabled={true}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </SkeletonVolumeContainer>
  </SkeletonRightControlsContainer>
);

export default SkeletonRightControls;
