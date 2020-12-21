import React from "react";
import { Play, RotateCcw, RotateCw } from "react-feather";
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

const iconStyle = { cursor: "pointer" };

const SkeletonControls = () => {
  const { initial, loading } = usePlayerContext();

  const onRenderTime = () => {
    if (initial) {
      return null;
    } else if (loading) {
      return (
        <Skeleton
          width="30px"
          height="15px"
          startColor="#E2E8F0"
          endColor="#E2E8F0"
          borderRadius={3}
        />
      );
    }
  };

  return (
    <SkeletonControlsContainer>
      <SkeletonControlsButtonsContainer>
        <RotateCcw
          size={18}
          color="#101010"
          style={iconStyle}
          strokeWidth={2}
        />

        <Play size={28} color="#101010" strokeWidth={1.7} style={iconStyle} />

        <RotateCw size={18} color="#101010" style={iconStyle} strokeWidth={2} />
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
