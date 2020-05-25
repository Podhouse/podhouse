import React from "react";

import StyledButton from "./Button.styles";

import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  submitting,
  disabled,
  width,
  height,
  bgColor,
  color,
  children,
}) => (
  <StyledButton
    type={type}
    onClick={onClick}
    submitting={submitting}
    disabled={submitting || disabled}
    width={width}
    height={height}
    bgColor={bgColor}
    color={color}
  >
    {children}
  </StyledButton>
);

export default Button;
