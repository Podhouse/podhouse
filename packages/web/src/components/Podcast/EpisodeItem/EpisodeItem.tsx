import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Play } from "react-feather";

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

const EpisodeItem = ({ node }: EpisodeItemProps) => {
  return (
    <EpisodeItemContainer>
      <EpisodeItemAvatar src={node.image} alt="image" />

      <EpisodeItemName as={ReactRouterLink} to="/episode/123" fontWeight="500">
        {node.title}
      </EpisodeItemName>

      <EpisodeItemDescription lineHeight="25px" textAlign="start">
        {node.description}
      </EpisodeItemDescription>

      <EpisodeItemPublishedDate textAlign="start">
        {node.publishedDate}
      </EpisodeItemPublishedDate>

      <EpisodeItemDuration textAlign="start">
        {node.duration}
      </EpisodeItemDuration>

      <EpisodeItemButton type="button" leftIcon={<Play size={14} />}>
        Play
      </EpisodeItemButton>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
