import React, { useState } from "react";
import { useRouter } from "next/router";

import SearchInput from "./SearchInput/SearchInput";

import { SearchContainer } from "./Search.styles";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const onSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const router = useRouter();

  const pushSearch = (e) => {
    e.preventDefault();
    router.push("/app/search");
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        name="search"
        placeholder="Search"
        onChange={onSearch}
        onClick={pushSearch}
        value={search}
      />
    </SearchContainer>
  );
};

export default Search;
