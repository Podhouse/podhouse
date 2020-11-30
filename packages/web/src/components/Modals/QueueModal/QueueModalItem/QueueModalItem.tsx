import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { X } from "react-feather";

import {
  QueueModalItemContainer,
  QueueModalItemAvatar,
  QueueModalItemsDetails,
} from "./QueueModalItem.styles";

import { QueueModalItemProps } from "./QueueModalItem.types";

const QueueModalItem = ({ avatar, episode, name }: QueueModalItemProps) => {
  return (
    <QueueModalItemContainer>
      <QueueModalItemAvatar src={avatar} />

      <QueueModalItemsDetails>
        <Link href="/app/episode/123">{episode}</Link>
        <Text>{name}</Text>
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
