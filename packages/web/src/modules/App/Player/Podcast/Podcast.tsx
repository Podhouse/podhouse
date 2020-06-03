import React from "react";

import {
  PodcastContainer,
  PodcastAvatar,
  PodcastDetails,
  PodcastEpisode,
  PodcastName,
} from "./Podcast.styles";

interface PodcastProps {
  currentPodcast: {
    avatar: string;
    name: string;
    episode: string;
  };
}

const Podcast: React.FC<PodcastProps> = ({ currentPodcast }) => {
  const { avatar, name, episode } = currentPodcast;

  const redirectPodcast = () => {};

  const redirectEpisode = () => {};

  return (
    <PodcastContainer>
      <PodcastAvatar avatar={avatar} />

      <PodcastDetails>
        <PodcastEpisode onClick={redirectEpisode}>{episode}</PodcastEpisode>
        <PodcastName onClick={redirectPodcast}>{name}</PodcastName>
      </PodcastDetails>
    </PodcastContainer>
  );
};

export default Podcast;
