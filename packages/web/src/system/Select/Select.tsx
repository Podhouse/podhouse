import React from "react";

import { StyledSelect } from "./Select.styles";

interface Option {
  name: string;
  value: string;
}

interface SelectProps {
  options: Array<Option>;
  onChange: (event: any) => any;
}

const Select = ({ options, onChange }: SelectProps) => {
  const renderOptions = () =>
    options.map(({ name, value }: Option) => (
      <option key={value} value={value}>
        {name}
      </option>
    ));

  return (
    <StyledSelect onChange={onChange}>
      <option value="" hidden>
        Select
      </option>
      {renderOptions()}
    </StyledSelect>
  );
};

export default Select;
