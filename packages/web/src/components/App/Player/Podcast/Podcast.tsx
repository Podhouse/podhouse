import React from "react";
import { Heart } from "react-feather";
import { Link } from "@chakra-ui/react";

import {
  PodcastContainer,
  PodcastAvatar,
  PodcastDetails,
  PodcastFavoriteContainer,
} from "./Podcast.styles";

import { PodcastProps } from "./Podcast.types";

const iconStyle = { cursor: "pointer" };

const Podcast = ({ ready, currentPodcast }: PodcastProps) => {
  const { avatar, name, episode } = currentPodcast;

  const onReady = () => {
    if (!ready) return null;

    return (
      <PodcastContainer>
        <PodcastAvatar avatar={avatar} />

        <PodcastDetails>
          <Link href="/app/episode/123">{episode}</Link>

          <Link href="/app/podcast/123">{name}</Link>

          <PodcastFavoriteContainer>
            <Heart
              className="like-button"
              size={16}
              strokeWidth={1.7}
              color="#101010"
              style={iconStyle}
              onClick={() => {}}
            />
          </PodcastFavoriteContainer>
        </PodcastDetails>
      </PodcastContainer>
    );
  };

  return onReady();
};

export default Podcast;
