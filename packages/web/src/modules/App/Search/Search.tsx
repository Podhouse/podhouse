import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import Scrollbars from "react-custom-scrollbars";

import { SearchContainer } from "./Search.styles";

const Search = ({ t }: WithTranslation) => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <SearchContainer>
      <h1>{t("search")}</h1>
      {/* <PodcastsWithDetails title={t("search")} podcasts={} /> */}
    </SearchContainer>
  </Scrollbars>
);

Search.getInitialProps = async () => ({ namespacesRequired: ["common"] });

export default withTranslation("common")(Search);
