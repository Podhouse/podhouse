import React from "react";
import { Search } from "react-feather";

import { SearchInputContainer, SearchInputStyled } from "./SearchInput.styles";

interface SearchInputProps {
  type: string;
  name: string;
  value: any;
  placeholder: string;
  onChange: (e: any) => void;
  onClick: (e: any) => void;
}

const SearchInput = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onClick,
  ...props
}: SearchInputProps) => (
  <SearchInputContainer>
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

    <SearchInputStyled
      {...props}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      autoComplete="off"
    />
  </SearchInputContainer>
);

export default SearchInput;
