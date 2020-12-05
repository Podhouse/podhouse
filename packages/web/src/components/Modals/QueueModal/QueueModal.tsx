import React, { useRef } from "react";
import { Link, Heading } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";

import {
  QueueModalContainer,
  QueueModalHeaderContainer,
  QueueModalItemsContainer,
} from "./QueueModal.styles";

import QueueModalItem from "./QueueModalItem/QueueModalItem";

import { useQueueContext } from "src/context/Queue/Queue";

import useOnClickOutside from "src/hooks/useOnClickOutside";

const episodes = [
  {
    episode: "403 - Return of Yokai",
    name: "99% Invisible",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    episode: "403 - Return of Yokaii",
    name: "99% Invisible",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    episode: "403 - Return of Yokaiii",
    name: "99% Invisible",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    episode: "403 - Return of Yokaiiii",
    name: "99% Invisible",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    episode: "403 - Return of Yokaiiiiii",
    name: "99% Invisible",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
];

const QueueModal = () => {
  const [, handleQueue] = useQueueContext();

  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleQueue());

  return (
    <QueueModalContainer ref={ref}>
      <QueueModalHeaderContainer>
        <Heading
          color="#101010"
          size="sm"
          letterSpacing="-0.03em"
          textAlign="start"
        >
          Up next
        </Heading>
        <Link justifySelf="end">Clear all</Link>
      </QueueModalHeaderContainer>

      <Scrollbars
        universal
        autoHide
        autoHideTimeout={100}
        autoHideDuration={100}
      >
        <QueueModalItemsContainer>
          {episodes.map(({ episode, name, avatar }) => (
            <QueueModalItem
              key={episode}
              episode={episode}
              name={name}
              avatar={avatar}
            />
          ))}
        </QueueModalItemsContainer>
      </Scrollbars>
    </QueueModalContainer>
  );
};

export default QueueModal;
