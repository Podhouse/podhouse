import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  PodcastContainer,
  PodcastAvatar,
  PodcastDetails,
  PodcastFavoriteContainer,
} from "./Podcast.styles";

import { PodcastProps } from "./Podcast.types";

const Podcast = ({ ready, currentPodcast }: PodcastProps) => {
  const { avatar, name, episode } = currentPodcast;

  const onReady = () => {
    if (!ready) return null;

    return (
      <PodcastContainer>
        <PodcastAvatar avatar={avatar} />

        <PodcastDetails>
          <ReactRouterLink to="/episode/123">{episode}</ReactRouterLink>

          <ReactRouterLink to="/podcast/123">{name}</ReactRouterLink>

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

  return onReady();
};

export default Podcast;
