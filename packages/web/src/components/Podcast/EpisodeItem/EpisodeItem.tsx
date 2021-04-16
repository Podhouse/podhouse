import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsPlay } from "react-icons/bs";

import {
  EpisodeItemContainer,
  EpisodeItemName,
  EpisodeItemDescription,
  EpisodeNameDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeItemButton,
} from "./EpisodeItem.styles";

const EpisodeItem = () => {
  return (
    <EpisodeItemContainer>
      <EpisodeNameDescription>
        <EpisodeItemName
          as={ReactRouterLink}
          to="/"
          fontSize="16px"
          fontWeight="500"
        >
          Episode
        </EpisodeItemName>

        <EpisodeItemDescription
          fontSize="16px"
          fontWeight="300"
          lineHeight="30px"
        >
          Episode
        </EpisodeItemDescription>
      </EpisodeNameDescription>

      <EpisodeItemPublishedDate
        fontSize="16px"
        fontWeight="300"
        lineHeight="30px"
        textAlign="start"
      >
        14/04
      </EpisodeItemPublishedDate>

      <EpisodeItemDuration
        fontSize="16px"
        fontWeight="300"
        lineHeight="30px"
        textAlign="start"
      >
        50:29
      </EpisodeItemDuration>

      <EpisodeItemButton
        type="button"
        width="90px"
        leftIcon={<BsPlay size={16} />}
      >
        Play
      </EpisodeItemButton>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
