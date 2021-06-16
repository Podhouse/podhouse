import React, { Suspense } from "react";

import { useTrending } from "src/queries/";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

const Trending = () => {
  const { data } = useTrending();

  return <PodcastsWithOnlyAvatarList title="Trending" feeds={data.feeds} />;
};

export default Trending;
