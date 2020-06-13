import React from "react";

import { SliderContainer } from "./Slider.styles";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  step: number;
  onChange: (event: any) => void;
}

const Component: React.FC<SliderProps> = ({
  min,
  max,
  value,
  step,
  onChange
}) => (
  <SliderContainer>
    <input 
      type="range" 
      min={min} 
      max={max} 
      value={value} 
      step={step} 
      onChange={onChange} 
    />
  </SliderContainer>
);

export default Component;