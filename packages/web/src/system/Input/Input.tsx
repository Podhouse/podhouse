import React from "react";

import Label from "../Label/Label";
import Error from "../Error/Error";

import { InputContainer, InputStyled } from "./Input.styles";

import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  label,
  onChange,
  onBlur,
  onClick,
  error,
  width,
  height,
  autoComplete = "off",
}) => (
  <InputContainer width={width}>
    {label ? <Label label={label} mb={10} /> : null}

    <InputStyled
      height={height}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onClick={onClick}
      error={error}
      autoComplete={autoComplete}
    />

    {error ? <Error error={error} mt={10} /> : null}
  </InputContainer>
);

export default Input;
