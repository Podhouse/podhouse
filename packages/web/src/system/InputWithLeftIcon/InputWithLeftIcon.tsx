import React from "react";
import { Search } from "react-feather";

import {
  InputWithLeftIconContainer,
  InputWithLeftIconStyled,
} from "./InputWithLeftIcon.styles";

import { InputWithLeftIconProps } from "./InputWithLeftIcon.types";

const InputWithLeftIcon = React.forwardRef(
  (
    {
      type,
      name,
      value,
      placeholder,
      onChange,
      ...props
    }: InputWithLeftIconProps,
    ref,
  ) => (
    <InputWithLeftIconContainer>
      <Search
        color="#B7B7B7"
        strokeWidth={1.5}
        size={16}
        style={{
          position: "absolute",
          left: 20,
          alignSelf: "center",
        }}
      />

      <InputWithLeftIconStyled
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        {...props}
      />
    </InputWithLeftIconContainer>
  ),
);

export default InputWithLeftIcon;
