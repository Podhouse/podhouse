import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'

import { SearchContainer } from "./Search.styles";

const Search = () => {
  return (
    <SearchContainer>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="text" placeholder="Search" size="md" />
      </InputGroup>
    </SearchContainer>
  );
};

export default Search;
