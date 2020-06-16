import React from "react";

import { StyledLabel } from "./Label.styles";

interface LabelProps {
  label: string;
  mb?: number;
}

const Label = ({ label, mb }: LabelProps) => (
  <StyledLabel mb={mb}>{label}</StyledLabel>
);

export default Label;
