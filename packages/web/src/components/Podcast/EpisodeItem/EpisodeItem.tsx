import React from "react";
import { Skeleton } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  EpisodeLoadingContainer,
  EpisodeLoadingDetailsContainer,
  EpisodeItemContainer,
  EpisodeItemAvatar,
  EpisodeItemDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeItemButton,
} from "./EpisodeItem.styles";

import { EpisodeItemProps } from "./EpisodeItem.types";

const EpisodeItem = ({ episode, loading }: EpisodeItemProps) => {
  if (!episode || loading) {
    return (
      <EpisodeLoadingContainer>
        <Skeleton width={80} height={80} />
        <EpisodeLoadingDetailsContainer>
          <Skeleton width={300} height={20} />
          <Skeleton width={300} height={50} />
        </EpisodeLoadingDetailsContainer>
      </EpisodeLoadingContainer>
    );
  }

  const { title, description, publishedDate, image, duration } = episode;

  const imageAlt = `avatar`;

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
        <ReactRouterLink to="/episode/123">{title}</ReactRouterLink>
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
