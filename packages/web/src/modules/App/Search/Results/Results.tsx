import React, { Suspense } from "react";

import { useSearchPodcast } from "src/queries/";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

interface Props {
  text: string;
}

const Results = ({ text }: Props) => {
  const { data } = useSearchPodcast(text);

  return (
    <PodcastsWithOnlyAvatarList
      title={`Search for ${text}`}
      feeds={data.feeds}
    />
  );
};

export default Results;
