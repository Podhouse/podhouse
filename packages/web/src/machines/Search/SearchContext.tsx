import React, { useContext } from "react";

import useSearch from "./useSearch";

const SearchContext = React.createContext(undefined as any);

const SearchProvider = ({ children }: any) => {
  const { search, onSearch } = useSearch();

  const value = { search, onSearch };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch can only be used inside SearchProvider");
  }
  return context;
};

export { SearchProvider, useSearchContext };
