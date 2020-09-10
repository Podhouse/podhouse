import * as React from "react";
import { useLabel } from "@react-aria/label";

import StyledLabel from "./Label.styles";

import { LabelProps } from "./Label.types";

const Label = (props: LabelProps) => {
  const { labelProps } = useLabel(props);

  const { label, variant, size } = props;

  return (
    <StyledLabel {...labelProps} variant={variant} size={size}>
      {label}
    </StyledLabel>
  );
};

export default Label;
