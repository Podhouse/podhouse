import React, { useRef } from "react";
import { useButton } from "@react-aria/button";

import StyledButton from "./Button.styles";

import { ButtonProps } from "./Button.types";

import Loader from "./Loader";

const Button = (props: ButtonProps) => {
  const ref = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const { buttonProps } = useButton(props, ref);

  const {
    type = "button",
    variant = "primary",
    size = "normal",
    onClick,
    disabled = false,
    loading = false,
    className,
    width,
    height,
    children,
  } = props;

  const checkVariant = loading || disabled ? "disabled" : variant;

  return (
    <StyledButton
      type={type}
      variant={checkVariant}
      size={size}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled}
      className={className}
      width={width}
      height={height}
      ref={ref}
      {...buttonProps}
    >
      {loading ? <Loader /> : children}
    </StyledButton>
  );
};

export default Button;
