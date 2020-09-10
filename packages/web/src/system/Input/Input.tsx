import React from "react";
import { useTextField } from "@react-aria/textfield";

import { InputContainer, StyledInput } from "./Input.styles";

import { InputProps } from "./Input.types";

import Label from "src/system/Label/Label";
import Error from "src/system/Error/Error";

const Input = React.forwardRef((props: InputProps, ref) => {
  // React Aria does not have support for forwardRef yet.
  // https://github.com/adobe/react-spectrum/issues/834
  const { labelProps, inputProps } = useTextField(props, ref as any);

  const {
    type,
    name,
    placeholder,
    label,
    onChange,
    onBlur,
    onClick,
    error,
    variant,
    scale,
    ariaLabel,
  } = props;

  return (
    <InputContainer>
      {label ? (
        <Label {...labelProps} label={label} variant="primary" size="normal" />
      ) : null}

      <StyledInput
        {...inputProps}
        ref={ref as any}
        type={type}
        name={name}
        placeholder={placeholder}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        error={error}
        variant={variant}
        scale={scale}
        ariaLabel={ariaLabel}
        autoComplete="off"
      />

      {error ? <Error error={error} mt={10} /> : null}
    </InputContainer>
  );
});

export default Input;
