import { useState, ChangeEvent } from "react";

const useSearch = () => {
  const [search, setSearch] = useState<string>("");

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return {
    search,
    onSearch,
  };
};

export default useSearch;
