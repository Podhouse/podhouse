import React from "react";
import { useTextField } from "@react-aria/textfield";

import { TextareaContainer, StyledTextarea } from "./Textarea.styles";

import { TextareaProps } from "./Textarea.types";

import Label from "../Label/Label";
import Error from "../Error/Error";

const Textarea = React.forwardRef((props: TextareaProps, ref) => {
  // React Aria does not have support for forwardRef yet.
  // https://github.com/adobe/react-spectrum/issues/834
  const fallbackRef = React.useRef();
  const domRef: any = ref || fallbackRef;

  const { labelProps, inputProps } = useTextField(props, ref as any);

  const {
    variant = "primary",
    scale = "normal",
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
    width,
    height,
  } = props;

  return (
    <TextareaContainer>
      {label ? (
        <Label
          label={label}
          variant={variant}
          size={scale}
          disabled={disabled}
          {...labelProps}
        />
      ) : null}

      <StyledTextarea
        {...inputProps}
        ref={domRef}
        variant={variant}
        scale={scale}
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
        width={width}
        height={height}
        autoComplete="off"
      />

      {error ? <Error error={error} variant="primary" size={scale} /> : null}
    </TextareaContainer>
  );
});

export default Textarea;
