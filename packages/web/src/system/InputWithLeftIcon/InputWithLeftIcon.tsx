import * as React from "react";
import { Search } from "react-feather";

import {
  InputWithLeftIconContainer,
  InputWithLeftIconStyled,
} from "./InputWithLeftIcon.styles";

interface InputWithLeftIconProps {
  type: string;
  name: string;
  value: any;
  placeholder: string;
  onChange: (e: any) => void;
  onClick: (e: any) => void;
}

const InputWithLeftIcon = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onClick,
  ...props
}: InputWithLeftIconProps) => (
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
      {...props}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      autoComplete="off"
    />
  </InputWithLeftIconContainer>
);

export default InputWithLeftIcon;
