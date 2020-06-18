import * as React from "react";

import {
  CheckboxContainer,
  StyledCheckbox,
  StyledLabel,
} from "./Checkbox.styles";

interface CheckboxProps {
  checked: boolean;
  disabled?: boolean;
  label?: string;
}

const Checkbox = ({
  checked = false,
  disabled = false,
  label,
}: CheckboxProps) => (
  <CheckboxContainer>
    <StyledCheckbox type="checkbox" checked={checked} disabled={disabled} />
    {label ? <StyledLabel disabled={disabled}>{label}</StyledLabel> : null}
  </CheckboxContainer>
);

export default Checkbox;
