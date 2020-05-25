import React, { useState } from "react";
import { useRouter } from "next/router";

import Input from "../../../../system/Input/Input";

import { SearchContainer } from "./Search.styles";

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const onSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const router = useRouter();

  const pushSearch = e => {
    e.preventDefault();
    router.push("/app/search");
  };

  return (
    <SearchContainer>
      <Input
        width={400}
        height={40}
        type="text"
        name="search"
        placeholder="Search"
        onChange={onSearch}
        onClick={pushSearch}
        value={search}
        error=""
      />
    </SearchContainer>
  );
};

export default Search;
