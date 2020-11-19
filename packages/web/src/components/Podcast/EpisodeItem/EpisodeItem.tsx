import React from "react";
import NextLink from "next/link";
import Skeleton from "react-loading-skeleton";

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
  const { _id, title, description, publishedDate, image, duration } = episode;

  const imageAlt = `${name} avatar`;

  return (
    <EpisodeItemContainer>
      {episode === null || episode === undefined ? (
        <Skeleton />
      ) : (
        <EpisodeItemAvatar src={image} alt={imageAlt} />
      )}

      {episode === null || episode === undefined ? (
        <Skeleton />
      ) : (
        <NextLink
          href={{ pathname: `/app/episode/${_id}`, query: { _id: _id } }}
        >
          <EpisodeItemName href="/app/episode/123">{title}</EpisodeItemName>
        </NextLink>
      )}

      {episode === null || episode === undefined ? (
        <Skeleton />
      ) : (
        <EpisodeItemDescription
          variant="secondary"
          size="normal"
          textAlign="start"
        >
          {description}
        </EpisodeItemDescription>
      )}

      {episode === null || episode === undefined ? (
        <Skeleton />
      ) : (
        <EpisodeItemPublishedDate
          variant="secondary"
          size="normal"
          textAlign="start"
        >
          {publishedDate}
        </EpisodeItemPublishedDate>
      )}

      {episode === null || episode === undefined ? (
        <Skeleton />
      ) : (
        <EpisodeItemDuration
          variant="secondary"
          size="normal"
          textAlign="start"
        >
          {duration}
        </EpisodeItemDuration>
      )}

      <EpisodeItemButton type="button" variant="secondary" size="normal">
        Play
      </EpisodeItemButton>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
