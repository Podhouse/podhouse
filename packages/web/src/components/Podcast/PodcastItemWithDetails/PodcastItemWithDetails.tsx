import * as React from "react";
import Link from "next/link";

import {
  PodcastItemWithDetailsContainer,
  PodcastItemWithDetailsAvatar,
  PodcastItemWithDetailsName,
  PodcastItemWithDetailsAuthor,
} from "./PodcastItemWithDetails.styles";

interface PodcastItemWithDetailsProps {
  podcast: {
    name: string;
    author: string;
    avatar: string;
  };
}

const PodcastItemWithDetails = ({ podcast }: PodcastItemWithDetailsProps) => {
  const { name, author, avatar } = podcast;

  const imageAlt = `${name} avatar`;

  return (
    <PodcastItemWithDetailsContainer>
      <Link href="/app/podcast/[podcast]" as="/app/podcast/123">
        <PodcastItemWithDetailsAvatar src={avatar} alt={imageAlt} />
      </Link>
      <Link href="/app/podcast/[podcast]" as="/app/podcast/123">
        <PodcastItemWithDetailsName href="/app/podcast/123">
          {name}
        </PodcastItemWithDetailsName>
      </Link>
      <PodcastItemWithDetailsAuthor>{author}</PodcastItemWithDetailsAuthor>
    </PodcastItemWithDetailsContainer>
  );
};

export default PodcastItemWithDetails;
