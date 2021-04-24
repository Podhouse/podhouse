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
      {data.items.map((episode: Episode) => {
        return <EpisodeItem episode={episode} />;
      })}
    </EpisodesContainer>
  );
};

export default Episodes;