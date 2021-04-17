import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsPlay } from "react-icons/bs";
import { format } from "date-fns";
import fromUnixTime from "date-fns/fromUnixTime";

import {
  EpisodeItemContainer,
  EpisodeItemName,
  EpisodeItemDescription,
  EpisodeNameDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeItemButton,
} from "./EpisodeItem.styles";

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
  const date = fromUnixTime(datePublished);
  const formattedDate = format(date, "dd MMM yyy");

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
        {formattedDate}
      </EpisodeItemPublishedDate>

      <EpisodeItemDuration
        fontSize="16px"
        fontWeight="300"
        lineHeight="30px"
        textAlign="start"
      >
        {duration}
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
