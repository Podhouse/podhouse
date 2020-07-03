import * as React from "react";
import { Heart } from "react-feather";

import {
  PodcastContainer,
  PodcastAvatar,
  PodcastDetails,
  PodcastEpisode,
  PodcastName,
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

  const redirectPodcast = () => {};
  const redirectEpisode = () => {};

  const onReady = () => {
    if (!ready) return null;

    return (
      <PodcastContainer>
        <PodcastAvatar avatar={avatar} />

        <PodcastDetails>
          <PodcastEpisode onClick={redirectEpisode}>{episode}</PodcastEpisode>
          <PodcastName onClick={redirectPodcast}>{name}</PodcastName>
          <Heart
            className="like-button"
            size={16}
            strokeWidth={1}
            color={iconColor}
            style={iconStyle}
            onClick={() => {}}
          />
        </PodcastDetails>
      </PodcastContainer>
    );
  };

  return onReady();
};

export default Podcast;
