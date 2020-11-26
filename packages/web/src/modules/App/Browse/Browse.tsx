import React from "react";
import Scrollbars from "react-custom-scrollbars";

import { BrowseContainer } from "./Browse.styles";

import Featured from "src/components/Featured/Featured";

import Trending from "./Trending/Trending";
import Genres from "./Genres/Genres";

import featured from "src/utils/featured";

const Browse = () => {
  const genres = [
    {
      id: 1,
      name: "Arts",
      href: "/app/genres/arts",
    },
    {
      id: 2,
      name: "Business",
      href: "/app/genres/business",
    },
    {
      id: 3,
      name: "Comedy",
      href: "/app/genres/comedy",
    },
    {
      id: 4,
      name: "Education",
      href: "/app/genres/education",
    },
    {
      id: 5,
      name: "Fiction",
      href: "/app/genres/fiction",
    },
    {
      id: 6,
      name: "Government",
      href: "/app/genres/government",
    },
    {
      id: 7,
      name: "Health & Fitness",
      href: "/app/genres/health",
    },
    {
      id: 8,
      name: "History",
      href: "/app/genres/history",
    },
    {
      id: 9,
      name: "Kids & Family",
      href: "/app/genres/kids",
    },
    {
      id: 10,
      name: "Leisure",
      href: "/app/genres/leisure",
    },
    {
      id: 11,
      name: "Music",
      href: "/app/genres/music",
    },
    {
      id: 12,
      name: "News",
      href: "/app/genres/news",
    },
    {
      id: 13,
      name: "Religion & Spirituality",
      href: "/app/genres/religion",
    },
    {
      id: 14,
      name: "Science",
      href: "/app/genres/science",
    },
    {
      id: 15,
      name: "Society & Culture",
      href: "/app/genres/society",
    },
    {
      id: 16,
      name: "Sports",
      href: "/app/genres/sports",
    },
    {
      id: 17,
      name: "TV & Film",
      href: "/app/genres/tv",
    },
    {
      id: 18,
      name: "Technology",
      href: "/app/genres/technology",
    },
    {
      id: 19,
      name: "True Crime",
      href: "/app/genres/crime",
    },
  ];

  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <BrowseContainer>
        <Featured featured={featured} />
        <Trending />
        <Genres title="Categories" genres={genres} />
      </BrowseContainer>
    </Scrollbars>
  );
};

export default Browse;
