import React from "react";
import { withTranslation } from "i18n";
import Scrollbars from "react-custom-scrollbars";

import { SearchContainer } from "./Search.styles";

import PodcastsWithDetails from "src/components/Lists/PodcastsWithDetails/PodcastsWithDetails";

const items = [
  {
    id: 1,
    name: "99% Invisible",
    author: "Roman Mars",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 2,
    name: "99% Invisible",
    author: "Roman Mars",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 3,
    name: "99% Invisible",
    author: "Roman Mars",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 4,
    name: "99% Invisible",
    author: "Roman Mars",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
];

const Search = ({ t }: any) => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <SearchContainer>
      <PodcastsWithDetails title={t("search")} items={items} />
    </SearchContainer>
  </Scrollbars>
);

Search.getInitialProps = async () => ({ namespacesRequired: ["common"] });

export default withTranslation("common")(Search);
