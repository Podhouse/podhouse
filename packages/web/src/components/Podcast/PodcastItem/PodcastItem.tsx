import React from "react";
import Link from "next/link";

import {
  PodcastItemContainer,
  PodcastItemAvatar,
  PodcastItemName,
  PodcastItemAuthor,
} from "./PodcastItem.styles";

interface PodcastItemProps {
  podcast: {
    name: string;
    author: string;
    avatar: string;
  };
}

const PodcastItem = ({ podcast }: PodcastItemProps) => {
  const { name, author, avatar } = podcast;

  const imageAlt = `${name} avatar`;

  return (
    <PodcastItemContainer>
      <PodcastItemAvatar src={avatar} alt={imageAlt} />
      <Link href="/app/podcast/[podcast]" as="/app/podcast/123">
        <PodcastItemName href="/app/podcast/123">{name}</PodcastItemName>
      </Link>
      <PodcastItemAuthor>{author}</PodcastItemAuthor>
    </PodcastItemContainer>
  );
};

export default PodcastItem;
