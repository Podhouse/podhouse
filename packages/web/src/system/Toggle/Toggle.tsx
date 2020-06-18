import * as React from "react";

import { ToggleWrapper, ToggleLabel, ToggleContainer } from "./Toggle.styles";

interface ToggleProps {
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

const Toggle = ({ checked, onChange }: ToggleProps) => (
  <ToggleWrapper>
    <ToggleContainer
      id="checkbox"
      type="checkbox"
      onChange={onChange}
      checked={checked}
    />
    <ToggleLabel htmlFor="checkbox" />
  </ToggleWrapper>
);

export default Toggle;
