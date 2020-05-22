import React from "react";

import { ToggleWrapper, ToggleLabel, ToggleContainer } from "./Toggle.styles";

interface ToggleProps {
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => (
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
