import React from "react";
import { useLabel } from "@react-aria/label";

import StyledLabel from "./Label.styles";

import { LabelProps } from "./Label.types";

const Label = (props: LabelProps) => {
  const { labelProps } = useLabel(props);

  const { label, variant, size, disabled } = props;

  return (
    <StyledLabel
      {...labelProps}
      variant={variant}
      size={size}
      disabled={disabled}
      aria-label={label}
      aria-disabled={disabled}
    >
      {label}
    </StyledLabel>
  );
};

export default Label;
