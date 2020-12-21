import { useState, useCallback, ChangeEvent } from "react";

const useSearch = () => {
  const [search, setSearch] = useState<string>("");

  const onSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  return {
    search,
    onSearch,
  };
};

export default useSearch;
