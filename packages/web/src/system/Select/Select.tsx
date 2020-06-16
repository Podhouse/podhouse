import React from "react";

import { StyledSelect } from "./Select.styles";

interface Option {
  name: string;
  value: string;
}

interface SelectProps {
  options: Array<Option>;
}

const Select = ({ options }: SelectProps) => {
  const renderOptions = () =>
    options.map(({ name, value }: Option) => (
      <option key={value} value={value}>
        {name}
      </option>
    ));

  return (
    <StyledSelect>
      <option value="" hidden>
        Select
      </option>
      {renderOptions()}
    </StyledSelect>
  );
};

export default Select;
