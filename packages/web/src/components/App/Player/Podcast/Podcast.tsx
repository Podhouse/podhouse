import React from "react";
import NextLink from "next/link";
import { Heart } from "react-feather";

import {
  PodcastContainer,
  PodcastAvatar,
  PodcastDetails,
  PodcastFavoriteContainer,
} from "./Podcast.styles";

import useTheme from "src/system/useTheme";
import Link from "src/system/Link/Link";

import { PodcastProps } from "./Podcast.types";

const iconStyle = { cursor: "pointer" };

const Podcast = ({ ready, currentPodcast }: PodcastProps) => {
  const themeState = useTheme();

  const iconColor = themeState.dark ? "#FFFFFF" : "#101010";

  const { avatar, name, episode } = currentPodcast;

  const onReady = () => {
    if (!ready) return null;

    return (
      <PodcastContainer>
        <PodcastAvatar avatar={avatar} />

        <PodcastDetails>
          <NextLink href="/app/episode/[episode]" as="/app/episode/123">
            <Link variant="primary" size="light" href="/app/episode/123">
              {episode}
            </Link>
          </NextLink>

          <NextLink href="/app/podcast/123" as="/app/podcast/123">
            <Link variant="secondary" size="light" href="/app/podcast/123">
              {name}
            </Link>
          </NextLink>

          <PodcastFavoriteContainer>
            <Heart
              className="like-button"
              size={16}
              strokeWidth={1.5}
              color={iconColor}
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
