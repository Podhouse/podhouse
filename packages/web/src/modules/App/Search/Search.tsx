import React from "react";
import Scrollbars from "react-custom-scrollbars";

import Row from "../../../components/Row/Row";

import { SearchContainer } from "./Search.styles";

interface SearchProps {}

const items = [
  {
    id: 1,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 2,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: 3,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
];

const Search: React.FC<SearchProps> = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <SearchContainer>
      <Row title="Search" items={items} />
    </SearchContainer>
  </Scrollbars>
);

export default Search;
