import React from "react";
import NextLink from "next/link";

import {
  PodcastAvatarItemContainer,
  PodcastAvatarItemAvatar,
} from "./PodcastItemWithAvatar.styles";

import { PodcastAvatarItemProps } from "./PodcastItemWithAvatar.types";

import Link from "src/system/Link/Link";

const PodcastAvatarItem = ({ podcast }: PodcastAvatarItemProps) => {
  const { name, avatar } = podcast;

  const imageAlt = `${name} avatar`;

  return (
    <PodcastAvatarItemContainer>
      <NextLink href="/app/podcast/[podcast]" as="/app/podcast/123">
        <Link variant="secondary" size="normal" href="/app/podcast/[podcast]">
          <PodcastAvatarItemAvatar src={avatar} alt={imageAlt} />
        </Link>
      </NextLink>
    </PodcastAvatarItemContainer>
  );
};

export default PodcastAvatarItem;
