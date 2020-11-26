import React from "react";
import { Skeleton } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Play } from "react-feather";

import {
  EpisodeLoadingContainer,
  EpisodeLoadingDetailsContainer,
  EpisodeItemContainer,
  EpisodeItemAvatar,
  EpisodeItemName,
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

  const { name, description, avatar, publishedDate, duration } = episode;

  const imageAlt = `avatar`;

  return (
    <EpisodeItemContainer>
      {episode === null || episode === undefined ? (
        <Skeleton />
      ) : (
        <EpisodeItemAvatar src={avatar} alt={imageAlt} />
      )}

      {episode === null || episode === undefined ? (
        <Skeleton />
      ) : (
        <EpisodeItemName
          as={ReactRouterLink}
          to="/episode/123"
          fontWeight="500"
        >
          {name}
        </EpisodeItemName>
      )}

      {episode === null || episode === undefined ? (
        <Skeleton />
      ) : (
        <EpisodeItemDescription lineHeight="25px" textAlign="start">
          {description}
        </EpisodeItemDescription>
      )}

      {episode === null || episode === undefined ? (
        <Skeleton />
      ) : (
        <EpisodeItemPublishedDate textAlign="start">
          {publishedDate}
        </EpisodeItemPublishedDate>
      )}

      {episode === null || episode === undefined ? (
        <Skeleton />
      ) : (
        <EpisodeItemDuration textAlign="start">{duration}</EpisodeItemDuration>
      )}

      <EpisodeItemButton type="button" leftIcon={<Play size={14} />}>
        Play
      </EpisodeItemButton>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
