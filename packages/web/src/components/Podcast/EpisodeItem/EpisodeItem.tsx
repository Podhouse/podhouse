import React from "react";
import NextLink from "next/link";
import { MoreHorizontal } from "react-feather";

import {
  EpisodeItemContainer,
  EpisodeItemAvatar,
  EpisodeItemDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeItemButtonContainer,
  EpisodeItemButton,
} from "./EpisodeItem.styles";

import Link from "src/system/Link/Link";

import { EpisodeItemProps } from "./EpisodeItem.types";

const EpisodeItem = ({ episode }: EpisodeItemProps) => {
  const { avatar, name, description, publishedDate, duration } = episode;

  const imageAlt = `${name} avatar`;

  return (
    <EpisodeItemContainer>
      <EpisodeItemAvatar src={avatar} alt={imageAlt} />
      <NextLink href="/app/episode/[episode]" as="/app/episode/123">
        <Link variant="secondary" size="normal" href="/app/episode/123">
          {name}
        </Link>
      </NextLink>
      <EpisodeItemDescription>{description}</EpisodeItemDescription>
      <EpisodeItemPublishedDate>{publishedDate}</EpisodeItemPublishedDate>
      <EpisodeItemDuration>{duration}</EpisodeItemDuration>
      <EpisodeItemButtonContainer>
        <MoreHorizontal size={16} strokeWidth={1} color="#B7B7B7" />
        <EpisodeItemButton type="button">Play</EpisodeItemButton>
      </EpisodeItemButtonContainer>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
