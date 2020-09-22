import React from "react";

import { ToggleWrapper } from "./Toggle.styles";

interface ToggleProps {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

const Toggle = ({ id, checked, onChange, disabled }: ToggleProps) => (
  <ToggleWrapper>
    <input
      id={id}
      type="checkbox"
      className="switch"
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
  </ToggleWrapper>
);

export default Toggle;
