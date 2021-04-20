import React, { Suspense } from "react";
import { useDebounce } from "use-debounce";

import { useSearchPodcast } from "src/queries/";

import PodcastsWithOnlyAvatarList from "src/components/Lists/PodcastsWithOnlyAvatarList/PodcastsWithOnlyAvatarList";

interface Props {
  text: string;
}

const Results = ({ text }: Props) => {
  const [debouncedText] = useDebounce(text, 200);
  const { data } = useSearchPodcast(debouncedText);

  return (
    <PodcastsWithOnlyAvatarList
      title={`Search for ${text}`}
      feeds={data.feeds}
    />
  );
};

export default Results;
