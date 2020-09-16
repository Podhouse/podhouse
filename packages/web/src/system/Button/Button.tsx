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
    isDisabled = false,
    isLoading = false,
    className,
    width,
    height,
    children,
  } = props;

  const checkVariant = isLoading || isDisabled ? "disabled" : variant;

  return (
    <StyledButton
      type={type}
      variant={checkVariant}
      size={size}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={className}
      width={width}
      height={height}
      ref={ref}
      {...buttonProps}
    >
      {isLoading ? <Loader /> : children}
    </StyledButton>
  );
};

export default Button;
