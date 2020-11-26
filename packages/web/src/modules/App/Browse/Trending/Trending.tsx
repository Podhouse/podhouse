import React from "react";

import PodcastsWithDetailsList from "src/components/Lists/PodcastsWithDetailsList/PodcastsWithDetailsList";

const podcasts = [
  {
    id: "1",
    _id: "1",
    name: "99% Invisible",
    author: "Roman Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: "2",
    _id: "2",
    name: "99% Invisible",
    author: "Roman Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: "3",
    _id: "3",
    name: "99% Invisible",
    author: "Roman Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: "4",
    _id: "4",
    name: "99% Invisible",
    author: "Roman Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: "5",
    _id: "5",
    name: "99% Invisible",
    author: "Roman Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: "6",
    _id: "6",
    name: "99% Invisible",
    author: "Roman Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: "7",
    _id: "7",
    name: "99% Invisible",
    author: "Roman Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: "8",
    _id: "8",
    name: "99% Invisible",
    author: "Roman Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    id: "9",
    _id: "9",
    name: "99% Invisible",
    author: "Roman Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
];

const Trending = () => {
  return <PodcastsWithDetailsList title="Trending" podcasts={podcasts} />;
};

export default Trending;
