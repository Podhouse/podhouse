import * as React from "react";

import StyledButton from "./Button.styles";

import { ButtonProps } from "./Button.types";

const Button = ({
  type,
  onClick,
  submitting,
  disabled,
  width,
  height,
  bgColor,
  color,
  children,
}: ButtonProps) => (
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
