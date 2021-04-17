import React from "react";
import { useLocation } from "react-router-dom";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

import { useEpisodes } from "src/queries/";
import { Episode } from "src/queries/types";

import { EpisodesContainer } from "./Episodes.styles";

type Location = {
  id: number;
};

const Episodes = () => {
  const { state } = useLocation<Location>();

  const { data } = useEpisodes(state.id);

  return (
    <EpisodesContainer>
      {data.items.map(
        ({ id, title, description, datePublished, duration }: Episode) => (
          <EpisodeItem
            key={id}
            id={id}
            title={title}
            description={description}
            datePublished={datePublished}
            duration={duration}
          />
        )
      )}
    </EpisodesContainer>
  );
};

export default Episodes;
