import React from "react";
import { Range } from "react-range";

import { HorizontalSliderContainer } from "./HorizontalSlider.styles";

interface HorizontalSliderProps {
  max: number;
  value: number[];
  onChange: (event: any) => void;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  max,
  value,
  onChange,
}) => (
  <HorizontalSliderContainer>
    <Range
      step={0.1}
      min={0}
      max={max !== 0 ? max : 100}
      values={value}
      onChange={onChange}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            backgroundColor: "#ccc",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "42px",
            width: "42px",
            backgroundColor: "#999",
          }}
        />
      )}
    />
  </HorizontalSliderContainer>
);

export default HorizontalSlider;
