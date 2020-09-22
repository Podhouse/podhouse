import React from "react";
import NextLink from "next/link";
import { X } from "react-feather";

import {
  QueueModalItemContainer,
  QueueModalItemAvatar,
  QueueModalItemsDetails,
} from "./QueueModalItem.styles";

import { QueueModalItemProps } from "./QueueModalItem.types";

import Link from "src/system/Link/Link";
import Paragraph from "src/system/Paragraph/Paragraph";

const QueueModalItem = ({ avatar, episode, name }: QueueModalItemProps) => {
  return (
    <QueueModalItemContainer>
      <QueueModalItemAvatar src={avatar} />

      <QueueModalItemsDetails>
        <NextLink href="/app/episode/[episode]" as="/app/episode/123">
          <Link href="/app/episode/123" variant="secondary" size="normal">
            {episode}
          </Link>
        </NextLink>
        <Paragraph variant="secondary" size="normal">
          {name}
        </Paragraph>
      </QueueModalItemsDetails>

      <X
        size={16}
        strokeWidth={1.5}
        color="#B7B7B7"
        onClick={() => console.log("X clicked")}
      />
    </QueueModalItemContainer>
  );
};

export default QueueModalItem;
