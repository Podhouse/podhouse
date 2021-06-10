import React, { memo } from "react";
import { useLocation } from "react-router-dom";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

import { useEpisodes } from "src/queries/";
import { Episode } from "src/queries/types";

import { EpisodesContainer } from "./Episodes.styles";

interface Props {
  currentEpisode: Episode | null;
  playing: boolean;
  onToggle: (episode: Episode) => void;
  onPlay: () => void;
  onPause: () => void;
}

type Location = {
  id: number;
};

const Episodes = ({
  currentEpisode,
  playing,
  onToggle,
  onPlay,
  onPause,
}: Props) => {
  const { state } = useLocation<Location>();
  const { data } = useEpisodes(state.id);

  return (
    <EpisodesContainer>
      {data.items.map((episode: Episode) => {
        return (
          <EpisodeItem
            key={episode.id}
            episode={episode}
            currentEpisode={currentEpisode}
            playing={playing}
            onToggle={onToggle}
            onPlay={onPlay}
            onPause={onPause}
          />
        );
      })}
    </EpisodesContainer>
  );
};

export default memo(Episodes);
