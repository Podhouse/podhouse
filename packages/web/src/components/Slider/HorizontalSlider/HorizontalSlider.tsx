import React from "react";
import Slider from "rc-slider";

import { HorizontalSliderContainer } from "./HorizontalSlider.styles";

interface HorizontalSliderProps {
  min: number;
  max: number;
  onChange: (event: any) => void;
  defaultValue: number;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  min,
  max,
  onChange,
  defaultValue,
}) => (
  <HorizontalSliderContainer>
    <Slider
      min={min}
      max={max}
      defaultValue={defaultValue}
      onChange={onChange}
      railStyle={{
        background: "#EAEAEA",
      }}
      handleStyle={{
        border: "1px solid rgba(65, 65, 65, 0.1)",
      }}
      trackStyle={{
        background: "#000000",
      }}
    />
  </HorizontalSliderContainer>
);

export default HorizontalSlider;
