import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  PodcastContainer,
  PodcastAvatar,
  PodcastDetails,
  PodcastFavoriteContainer,
} from "./Podcast.styles";

import { PodcastProps } from "./Podcast.types";

const Podcast = ({ ready, episode }: PodcastProps) => {
  if (!ready || !episode) return null;

  console.log("episode: ", episode);

  return (
    <PodcastContainer>
      {episode.image ? <PodcastAvatar avatar={episode?.image} /> : null}

      <PodcastDetails>
        <ReactRouterLink
          to={{
            pathname: `/episode/${episode?._id}`,
            state: { _id: episode?._id },
          }}
        >
          {episode?.title}
        </ReactRouterLink>

        <ReactRouterLink
          to={{
            pathname: `/podcast/${episode?.podcast._id}`,
            state: { _id: episode?.podcast._id },
          }}
        >
          {episode?.podcast.name}
        </ReactRouterLink>

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
