import * as React from "react";
import Link from "next/link";

import {
  PodcastAvatarItemContainer,
  PodcastAvatarItemAvatar,
} from "./PodcastItemWithAvatar.styles";

interface PodcastAvatarItemProps {
  podcast: {
    name: string;
    author: string;
    avatar: string;
  };
}

const PodcastAvatarItem = ({ podcast }: PodcastAvatarItemProps) => {
  const { name, avatar } = podcast;

  const imageAlt = `${name} avatar`;

  return (
    <PodcastAvatarItemContainer>
      <Link href="/app/podcast/[podcast]" as="/app/podcast/123">
        <PodcastAvatarItemAvatar src={avatar} alt={imageAlt} />
      </Link>
    </PodcastAvatarItemContainer>
  );
};

export default PodcastAvatarItem;
