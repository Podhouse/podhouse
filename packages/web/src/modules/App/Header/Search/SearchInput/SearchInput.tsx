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

const SearchInput: React.FC<SearchInputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onClick,
  ...props
}) => (
  <SearchInputContainer>
    <Search
      color="#999999"
      strokeWidth={1.5}
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
