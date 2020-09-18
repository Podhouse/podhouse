import React from "react";
import NextLink from "next/link";

import {
  EpisodeItemContainer,
  EpisodeItemAvatar,
  EpisodeItemName,
  EpisodeItemDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeItemButton,
} from "./EpisodeItem.styles";

import { EpisodeItemProps } from "./EpisodeItem.types";

const EpisodeItem = ({ episode }: EpisodeItemProps) => {
  const { avatar, name, description, publishedDate, duration } = episode;

  const imageAlt = `${name} avatar`;

  return (
    <EpisodeItemContainer>
      <EpisodeItemAvatar src={avatar} alt={imageAlt} />

      <NextLink href="/app/episode/[episode]" as="/app/episode/123">
        <EpisodeItemName href="/app/episode/123">{name}</EpisodeItemName>
      </NextLink>

      <EpisodeItemDescription
        variant="secondary"
        size="normal"
        textAlign="start"
      >
        {description}
      </EpisodeItemDescription>

      <EpisodeItemPublishedDate
        variant="secondary"
        size="normal"
        textAlign="start"
      >
        {publishedDate}
      </EpisodeItemPublishedDate>

      <EpisodeItemDuration variant="secondary" size="normal" textAlign="start">
        {duration}
      </EpisodeItemDuration>

      <EpisodeItemButton type="button" variant="secondary" size="normal">
        Play
      </EpisodeItemButton>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
