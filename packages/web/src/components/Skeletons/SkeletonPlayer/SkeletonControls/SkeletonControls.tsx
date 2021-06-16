import React from "react";
import {
  BsPlay,
  BsArrowCounterclockwise,
  BsArrowClockwise,
} from "react-icons/bs";
import {
  Skeleton,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import {
  SkeletonControlsContainer,
  SkeletonControlsButtonsContainer,
  SkeletonControlsSliderContainer,
  SkeletonControlsTime,
} from "./SkeletonControls.styles";

const SkeletonControls = () => {
  return (
    <SkeletonControlsContainer>
      <SkeletonControlsButtonsContainer>
        <IconButton
          aria-label="-15"
          icon={<BsArrowCounterclockwise size="20px" />}
          variant="light"
          size="sm"
          isDisabled={true}
        />

        <IconButton
          aria-label="Play episode"
          icon={<BsPlay size="42px" />}
          variant="light"
          size="lg"
          isDisabled={true}
        />

        <IconButton
          aria-label="+15"
          icon={<BsArrowClockwise size="20px" />}
          variant="light"
          size="sm"
          isDisabled={true}
        />
      </SkeletonControlsButtonsContainer>

      <SkeletonControlsSliderContainer>
        <SkeletonControlsTime>
          <Skeleton width="30px" height="15px" borderRadius={3} />
        </SkeletonControlsTime>

        <Slider defaultValue={0} isDisabled={true}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <SkeletonControlsTime>
          <Skeleton width="30px" height="15px" borderRadius={3} />
        </SkeletonControlsTime>
      </SkeletonControlsSliderContainer>
    </SkeletonControlsContainer>
  );
};

export default SkeletonControls;
