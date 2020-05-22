import React from "react";
import Slider from "rc-slider";

import { HorizontalSliderContainer } from "./HorizontalSlider.styles";

const HorizontalSlider = () => (
  <HorizontalSliderContainer>
    <Slider
      min={0}
      max={100}
      defaultValue={0}
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
  </HorizontalSliderContainer>
);

export default HorizontalSlider;
