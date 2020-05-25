import React from "react";
import Scrollbars from "react-custom-scrollbars";

import Row from "../../../components/Row/Row";
// import AdCarousel from "../../../components/Carousel/AdCarousel/AdCarousel";

import { BrowseContainer } from "./Browse.styles";

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
  {
    id: 4,
    name: "99% Invisible",
    episode: "387 - The Worst Video Game Ever",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
];

const Browse: React.FC = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <BrowseContainer>
      {/* <AdCarousel /> */}
      <Row title="Trending" items={items} />
      <Row title="Comedy" items={items} />
      <Row title="Society" items={items} />
      <Row title="Technology" items={items} />
      <Row title="Education" items={items} />
    </BrowseContainer>
  </Scrollbars>
);

export default Browse;
