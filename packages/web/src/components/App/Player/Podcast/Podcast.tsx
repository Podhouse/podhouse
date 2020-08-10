import React from "react";
import Link from "next/link";
import { Heart } from "react-feather";

import {
  PodcastContainer,
  PodcastAvatar,
  PodcastDetails,
  PodcastEpisode,
  PodcastName,
  PodcastFavoriteContainer,
} from "./Podcast.styles";

import useTheme from "src/system/useTheme";

interface PodcastProps {
  ready: boolean;
  currentPodcast: {
    avatar: string;
    name: string;
    episode: string;
  };
}

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
          <Link href="/app/episode/[episode]" as="/app/episode/123">
            <PodcastEpisode href="/app/episode/123">{episode}</PodcastEpisode>
          </Link>
          <PodcastName onClick={() => {}}>{name}</PodcastName>

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
