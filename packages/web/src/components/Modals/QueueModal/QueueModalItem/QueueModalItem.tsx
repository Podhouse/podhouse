import React from "react";
import Link from "next/link";
import { X } from "react-feather";

import {
  QueueModalItemContainer,
  QueueModalItemAvatar,
  QueueModalItemsDetails,
  QueueModalItemEpisode,
  QueueModalItemPodcast,
} from "./QueueModalItem.styles";

interface QueueModalItemProps {
  avatar: string;
  episode: string;
  name: string;
}

const QueueModalItem = ({ avatar, episode, name }: QueueModalItemProps) => {
  return (
    <QueueModalItemContainer>
      <QueueModalItemAvatar src={avatar} />

      <QueueModalItemsDetails>
        <Link href="/app/episode/[episode]" as="/app/episode/123">
          <QueueModalItemEpisode href="/app/episode/123">
            {episode}
          </QueueModalItemEpisode>
        </Link>
        <QueueModalItemPodcast>{name}</QueueModalItemPodcast>
      </QueueModalItemsDetails>

      <X
        size={16}
        strokeWidth={1.7}
        color="#B7B7B7"
        onClick={() => console.log("X clicked")}
      />
    </QueueModalItemContainer>
  );
};

export default QueueModalItem;
