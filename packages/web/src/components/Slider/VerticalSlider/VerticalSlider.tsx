import React from "react";
import Slider from "rc-slider";

import { VerticalSliderContainer } from "./VerticalSlider.styles";

const VerticalSlider = () => (
  <VerticalSliderContainer>
    <Slider
      min={0}
      max={100}
      defaultValue={0}
      vertical
      railStyle={{
        background: "#EAEAEA",
      }}
      handleStyle={{
        border: "1px solid rgba(65, 65, 65, 0.2)",
      }}
      trackStyle={{
        background: "#000000",
      }}
    />
  </VerticalSliderContainer>
);

export default VerticalSlider;
