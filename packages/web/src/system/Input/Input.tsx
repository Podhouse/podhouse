import React from "react";

import { InputContainer, InputStyled } from "./Input.styles";

import { InputProps } from "./Input.types";

import Label from "src/system/Label/Label";
import Error from "src/system/Error/Error";

const Input = React.forwardRef(
  (
    {
      type,
      name,
      placeholder,
      label,
      error,
      width,
      height,
      autoComplete = "off",
      ...props
    }: InputProps,
    ref,
  ) => (
    <InputContainer width={width}>
      {label ? <Label label={label} mb={10} /> : null}

      <InputStyled
        ref={ref}
        height={height}
        type={type}
        name={name}
        placeholder={placeholder}
        error={error}
        autoComplete={autoComplete}
        {...props}
      />

      {error ? <Error error={error} mt={10} /> : null}
    </InputContainer>
  ),
);

export default Input;
