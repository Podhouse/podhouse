import React from "react";
import {
  BsPlay,
  BsArrowCounterclockwise,
  BsArrowClockwise,
} from "react-icons/bs";
import { Skeleton } from "@chakra-ui/react";
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
} from "@reach/slider";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

import {
  SkeletonControlsContainer,
  SkeletonControlsButtonsContainer,
  SkeletonControlsSliderContainer,
  SkeletonControlsTime,
} from "./SkeletonControls.styles";

const SkeletonControls = () => {
  const { initial, loading } = usePlayerContext();

  const onRenderTime = () => {
    if (initial) {
      return null;
    } else if (loading) {
      return <Skeleton width="30px" height="15px" borderRadius={3} />;
    }
  };

  return (
    <SkeletonControlsContainer>
      <SkeletonControlsButtonsContainer>
        <BsArrowCounterclockwise size={20} />

        <BsPlay size={42} />

        <BsArrowClockwise size={20} />
      </SkeletonControlsButtonsContainer>

      <SkeletonControlsSliderContainer>
        <SkeletonControlsTime>{onRenderTime()}</SkeletonControlsTime>

        <SliderInput defaultValue={0} value={0} disabled={true}>
          <SliderTrack>
            <SliderRange />
            <SliderHandle />
          </SliderTrack>
        </SliderInput>

        <SkeletonControlsTime>{onRenderTime()}</SkeletonControlsTime>
      </SkeletonControlsSliderContainer>
    </SkeletonControlsContainer>
  );
};

export default SkeletonControls;
