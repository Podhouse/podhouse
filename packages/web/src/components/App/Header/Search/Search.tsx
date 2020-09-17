import React, { useState } from "react";
import { withTranslation } from "i18n";
import { useRouter } from "next/router";

import { SearchContainer } from "./Search.styles";

import InputWithLeftIcon from "src/system/InputWithLeftIcon/InputWithLeftIcon";

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
      <InputWithLeftIcon
        variant="primary"
        scale="normal"
        type="text"
        name="search"
        placeholder={t("search")}
        onChange={onSearch}
        onClick={pushSearch}
        value={search}
        error=""
      />
    </SearchContainer>
  );
};

Search.getInitialProps = async () => ({ namespacesRequired: ["header"] });

export default withTranslation("header")(Search);
