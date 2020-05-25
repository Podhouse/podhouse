import React from "react";

import { StyledGoogleButton, Wrapper } from "./GoogleButton.styles";

interface GoogleButtonProps {
  type: "button";
  text: string;
  width?: number | string;
  height?: number;
  color?: string;
  mt?: number;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({
  type,
  text,
  width,
  height,
  color,
  mt,
}) => (
  <StyledGoogleButton
    type={type}
    width={width}
    height={height}
    color={color}
    mt={mt}
  >
    <Wrapper>{text}</Wrapper>
  </StyledGoogleButton>
);

export default GoogleButton;
