import React, { useState } from "react";
import { withTranslation } from "i18n";
import { useRouter } from "next/router";

import SearchInput from "./SearchInput/SearchInput";

import { SearchContainer } from "./Search.styles";

const Search = ({ t }: any) => {
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
        placeholder={t("search")}
        onChange={onSearch}
        onClick={pushSearch}
        value={search}
      />
    </SearchContainer>
  );
};

Search.getInitialProps = async () => ({ namespacesRequired: ["header"] });

export default withTranslation("header")(Search);
