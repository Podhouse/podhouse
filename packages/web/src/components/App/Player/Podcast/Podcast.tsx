import React from "react";

import {
  PodcastContainer,
  PodcastImage,
  PodcastDetails,
  PodcastNameTitle,
  PodcastFavoriteContainer,
} from "./Podcast.styles";

import { PlayerEpisode } from "src/player/Player.types";

interface Props {
  ready: boolean;
  episode: PlayerEpisode | null;
}

const Podcast = ({ ready, episode }: Props) => {
  if (!ready) return null;

  if (!episode) return null;

  return (
    <PodcastContainer>
      <PodcastImage src={episode?.image} />

      <PodcastDetails>
        <PodcastNameTitle
          to={{
            pathname: `/episode/${episode?._id}`,
            state: { _id: episode?._id },
          }}
        >
          {episode?.title}
        </PodcastNameTitle>

        <PodcastNameTitle
          to={{
            pathname: `/podcast/${episode?.podcast._id}`,
            state: { _id: episode?.podcast._id },
          }}
        >
          {episode?.podcast.name}
        </PodcastNameTitle>

        <PodcastFavoriteContainer>
          {/* <Heart
            className="like-button"
            size={16}
            strokeWidth={1.7}
            color="#101010"
            style={iconStyle}
            onClick={() => {}}
          /> */}
        </PodcastFavoriteContainer>
      </PodcastDetails>
    </PodcastContainer>
  );
};

export default Podcast;
