import React from "react";
import Link from "next/link";
import { MoreHorizontal } from "react-feather";

import {
  EpisodeItemContainer,
  EpisodeItemAvatar,
  EpisodeItemName,
  EpisodeItemDescription,
  EpisodeItemPublishedDate,
  EpisodeItemDuration,
  EpisodeItemButtonContainer,
  EpisodeItemButton,
} from "./EpisodeItem.styles";

interface EpisodeItemProps {
  episode: {
    name: string;
    description: string;
    avatar: string;
    publishedDate: string;
    duration: string;
  };
}

const EpisodeItem = ({ episode }: EpisodeItemProps) => {
  const { avatar, name, description, publishedDate, duration } = episode;

  const imageAlt = `${name} avatar`;

  return (
    <EpisodeItemContainer>
      <EpisodeItemAvatar src={avatar} alt={imageAlt} />
      <Link href="/app/episode/[episode]" as="/app/episode/123">
        <EpisodeItemName href="/app/episode/123">{name}</EpisodeItemName>
      </Link>
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
