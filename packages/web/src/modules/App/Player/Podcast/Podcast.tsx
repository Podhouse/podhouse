import React from "react";

import {
  PodcastContainer,
  PodcastAvatar,
  PodcastDetails,
  PodcastEpisode,
  PodcastName,
} from "./Podcast.styles";

interface PodcastProps {
  ready: boolean;
  currentPodcast: {
    avatar: string;
    name: string;
    episode: string;
  };
}

const Podcast: React.FC<PodcastProps> = ({ ready, currentPodcast }) => {
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
        </PodcastDetails>
      </PodcastContainer>
    )
  }

  return onReady();
};

export default Podcast;
