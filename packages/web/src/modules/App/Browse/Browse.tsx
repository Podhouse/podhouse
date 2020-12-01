import React, { Suspense } from "react";
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
      href: "/genre/arts",
    },
    {
      id: 2,
      name: "Business",
      href: "/genre/business",
    },
    {
      id: 3,
      name: "Comedy",
      href: "/genre/comedy",
    },
    {
      id: 4,
      name: "Education",
      href: "/genre/education",
    },
    {
      id: 5,
      name: "Fiction",
      href: "/genre/fiction",
    },
    {
      id: 6,
      name: "Government",
      href: "/genre/government",
    },
    {
      id: 7,
      name: "Health & Fitness",
      href: "/genre/health",
    },
    {
      id: 8,
      name: "History",
      href: "/genre/history",
    },
    {
      id: 9,
      name: "Kids & Family",
      href: "/genre/kids",
    },
    {
      id: 10,
      name: "Leisure",
      href: "/genre/leisure",
    },
    {
      id: 11,
      name: "Music",
      href: "/genre/music",
    },
    {
      id: 12,
      name: "News",
      href: "/genre/news",
    },
    {
      id: 13,
      name: "Religion & Spirituality",
      href: "/genre/religion",
    },
    {
      id: 14,
      name: "Science",
      href: "/genre/science",
    },
    {
      id: 15,
      name: "Society & Culture",
      href: "/genre/society",
    },
    {
      id: 16,
      name: "Sports",
      href: "/genre/sports",
    },
    {
      id: 17,
      name: "TV & Film",
      href: "/genre/tv",
    },
    {
      id: 18,
      name: "Technology",
      href: "/genre/technology",
    },
    {
      id: 19,
      name: "True Crime",
      href: "/genre/crime",
    },
  ];

  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <BrowseContainer>
        <Featured featured={featured} />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Trending />
        </Suspense>
        <Genres title="Categories" genres={genres} />
      </BrowseContainer>
    </Scrollbars>
  );
};

export default Browse;
