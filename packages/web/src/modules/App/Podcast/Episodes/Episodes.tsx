import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import { Interpreter } from "xstate";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

import { useEpisodes } from "src/queries/";
import { Episode } from "src/queries/types";

import { EpisodesContainer } from "./Episodes.styles";

import {
  MachineContext,
  MachineEvent,
} from "src/machines/Player/PlayerMachine.types";

type Props = {
  service: Interpreter<MachineContext, any, MachineEvent>;
  onToggle: (episode: Episode) => void;
  onPlay: () => void;
  onPause: () => void;
};

type Location = {
  id: number;
};

const Episodes = ({ service, onToggle, onPlay, onPause }: Props) => {
  const { state: locationState } = useLocation<Location>();
  const { data } = useEpisodes(locationState.id);

  return (
    <EpisodesContainer>
      {data.items.map((episode: Episode) => (
        <EpisodeItem
          key={episode.id}
          episode={episode}
          service={service}
          onToggle={onToggle}
          onPlay={onPlay}
          onPause={onPause}
        />
      ))}
    </EpisodesContainer>
  );
};

export default memo(Episodes);
