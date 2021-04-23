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
      {data.items.map((item: Episode) => {
        return (
          <EpisodeItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            datePublished={item.datePublished}
            duration={item.duration}
          />
        );
      })}
    </EpisodesContainer>
  );
};

export default Episodes;
