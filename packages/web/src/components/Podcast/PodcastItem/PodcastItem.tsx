import React from "react";

import {
  PodcastItemContainer,
  PodcastItemAvatar,
  PodcastItemTitle,
  PodcastItemSubTitle,
} from "./PodcastItem.styles";

interface PodcastItemProps {
  podcast: {
    name: string;
    episode: string;
    avatar: string;
  };
}

const PodcastItem: React.FC<PodcastItemProps> = ({ podcast }) => {
  const { name, episode, avatar } = podcast;

  return (
    <PodcastItemContainer>
      <PodcastItemAvatar avatar={avatar} />
      <PodcastItemTitle href="/app/episode/123">{episode}</PodcastItemTitle>
      <PodcastItemSubTitle href="/app/podcast/123">{name}</PodcastItemSubTitle>
    </PodcastItemContainer>
  );
};

export default PodcastItem;
