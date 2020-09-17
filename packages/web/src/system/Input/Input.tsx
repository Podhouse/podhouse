import React from "react";
import { useTextField } from "@react-aria/textfield";

import { InputContainer, StyledInput } from "./Input.styles";

import { InputProps } from "./Input.types";

import Label from "../Label/Label";
import Error from "../Error/Error";

const Input = React.forwardRef((props: InputProps, ref) => {
  // React Aria does not have support for forwardRef yet.
  // https://github.com/adobe/react-spectrum/issues/834
  const fallbackRef = React.useRef();
  const domRef: any = ref || fallbackRef;

  const { labelProps, inputProps } = useTextField(props, ref as any);

  const {
    variant = "primary",
    scale = "normal",
    type = "text",
    name,
    placeholder,
    label,
    value,
    onChange,
    onBlur,
    onClick,
    error,
    disabled = false,
    required = false,
    autoFocus = false,
  } = props;

  return (
    <InputContainer>
      {label ? (
        <Label
          label={label}
          variant={variant}
          size={scale}
          disabled={disabled}
          {...labelProps}
        />
      ) : null}

      <StyledInput
        {...inputProps}
        ref={domRef}
        variant={variant}
        scale={scale}
        type={type}
        name={name}
        placeholder={placeholder}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        error={error}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        autoComplete="off"
        aria-autocomplete="none"
        aria-errormessage={error}
      />

      {error ? <Error error={error} variant="primary" size={scale} /> : null}
    </InputContainer>
  );
});

export default Input;
