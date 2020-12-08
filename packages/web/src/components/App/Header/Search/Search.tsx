import React from "react";
import { useHistory } from "react-router-dom";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { SearchContainer } from "./Search.styles";

const Search = () => {
  const history = useHistory();

  return (
    <SearchContainer>
      <InputGroup onClick={() => history.push("/search")}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon focusBorderColor="#101010" color="gray.300" />}
        />
        <Input type="text" placeholder="Search" size="md" />
      </InputGroup>
    </SearchContainer>
  );
};

export default Search;
