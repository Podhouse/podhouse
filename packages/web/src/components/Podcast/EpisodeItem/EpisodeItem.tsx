import React from "react";
import Link from "next/link";

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

const EpisodeItem = ({ episode }: EpisodeItemProps) => {
  const { name, author, avatar } = episode;

  const imageAlt = `${name} avatar`;

  return (
    <EpisodeItemContainer>
      <EpisodeItemAvatar src={avatar} alt={imageAlt} />
      <Link href="/app/episode/[episode]" as="/app/episode/123">
        <EpisodeItemName href="/app/episode/123">{name}</EpisodeItemName>
      </Link>
      <EpisodeItemAuthor>{author}</EpisodeItemAuthor>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
