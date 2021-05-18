import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  MobilePodcastContainer,
  MobilePodcastImage,
} from "./MobilePodcast.styles";

import { usePlayerContext } from "src/machines/Player/PlayerContext";

const MobilePodcast = () => {
  const { episode } = usePlayerContext();

  return (
    <MobilePodcastContainer>
      <MobilePodcastImage
        to={{
          pathname: `/episode/${episode.id}`,
          state: { id: episode.id },
        }}
        href={`/episode/${episode.id}`}
        as={ReactRouterLink}
        src={episode.image}
        lazy="loading"
      />
    </MobilePodcastContainer>
  );
};

export default MobilePodcast;
