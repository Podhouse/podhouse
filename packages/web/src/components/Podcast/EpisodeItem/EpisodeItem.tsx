import React from "react";

import {
  EpisodeItemContainer,
  EpisodeItemAvatar,
  EpisodeItemName,
  EpisodeItemAuthor,
} from "./EpisodeItem.styles";

interface EpisodeItemProps {
  episode: {
    name: string;
    author: string;
    description: string;
    avatar: string;
    publishedDate: string;
  };
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode }) => {
  const { name, author, avatar } = episode;

  const imageAlt = `${name} avatar`;

  return (
    <EpisodeItemContainer>
      <EpisodeItemAvatar src={avatar} alt={imageAlt} />
      <EpisodeItemName href="/app/episode/123">{name}</EpisodeItemName>
      <EpisodeItemAuthor>{author}</EpisodeItemAuthor>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
