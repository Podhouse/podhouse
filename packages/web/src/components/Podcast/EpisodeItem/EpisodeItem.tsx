import React from "react";
import { Divider } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsPlay, BsThreeDots } from "react-icons/bs";

import {
  EpisodeItemContainer,
  EpisodeItemName,
  EpisodeItemDescription,
  EpisodeNameDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeMenuButton,
  EpisodeItemButton,
  EpisodeDividerContainer,
} from "./EpisodeItem.styles";

import { formatTime, formatDate } from "src/utils/";

interface Props {
  id: number;
  title: string;
  description: string;
  datePublished: number;
  duration: number;
}

const EpisodeItem = ({
  id,
  title,
  description,
  datePublished,
  duration,
}: Props) => {
  return (
    <EpisodeItemContainer>
      <EpisodeNameDescription>
        <EpisodeItemName
          as={ReactRouterLink}
          to={{ pathname: `/episode/${id}`, state: { id } }}
          fontSize="16px"
          fontWeight="500"
        >
          {title}
        </EpisodeItemName>

        <EpisodeItemDescription
          fontSize="16px"
          fontWeight="300"
          lineHeight="30px"
        >
          {description}
        </EpisodeItemDescription>
      </EpisodeNameDescription>

      <EpisodeItemPublishedDate
        fontSize="16px"
        fontWeight="300"
        lineHeight="30px"
        textAlign="start"
      >
        {formatDate(datePublished)}
      </EpisodeItemPublishedDate>

      <EpisodeItemDuration
        fontSize="16px"
        fontWeight="300"
        lineHeight="30px"
        textAlign="start"
      >
        {formatTime(duration)}
      </EpisodeItemDuration>

      <EpisodeMenuButton
        aria-label="Options"
        icon={<BsThreeDots size="30px" />}
        variant="ghost"
      />

      <EpisodeItemButton
        aria-label="Play episode"
        icon={<BsPlay size="30px" />}
        variant="ghost"
      />

      <EpisodeDividerContainer>
        <Divider />
      </EpisodeDividerContainer>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
