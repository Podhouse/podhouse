import React, { useRef } from "react";
import { useButton } from "@react-aria/button";

import StyledButton from "./Button.styles";

import { ButtonProps } from "./Button.types";

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
    children,
  } = props;

  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled}
      className={className}
      ref={ref}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
