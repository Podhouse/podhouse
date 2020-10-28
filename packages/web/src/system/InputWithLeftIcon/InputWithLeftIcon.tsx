import React from "react";
import { useTextField } from "@react-aria/textfield";
import { Search } from "react-feather";

import {
  InputWithLeftIconContainer,
  StyledInputWithLeftIcon,
} from "./InputWithLeftIcon.styles";

import { InputWithLeftIconProps } from "./InputWithLeftIcon.types";

import Error from "../Error/Error";

const InputWithLeftIcon = React.forwardRef(
  (props: InputWithLeftIconProps, ref) => {
    // React Aria does not have support for forwardRef yet.
    // https://github.com/adobe/react-spectrum/issues/834
    const fallbackRef = React.useRef();
    const domRef: any = ref || fallbackRef;

    const { inputProps } = useTextField(props, ref as any);

    const {
      variant = "primary",
      scale = "normal",
      type = "text",
      name,
      placeholder,
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
      <InputWithLeftIconContainer>
        <Search
          color="#B7B7B7"
          strokeWidth={1.7}
          size={16}
          style={{
            position: "absolute",
            left: 20,
            alignSelf: "center",
          }}
        />

        <StyledInputWithLeftIcon
          {...inputProps}
          ref={domRef}
          variant={variant}
          scale={scale}
          type={type}
          name={name}
          placeholder={placeholder}
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
      </InputWithLeftIconContainer>
    );
  },
);

export default InputWithLeftIcon;
