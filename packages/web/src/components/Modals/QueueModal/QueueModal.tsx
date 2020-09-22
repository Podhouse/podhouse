import React, { useRef } from "react";
import { withTranslation } from "i18n";
import Scrollbars from "react-custom-scrollbars";

import {
  QueueModalContainer,
  QueueModalHeaderContainer,
  QueueModalItemsContainer,
} from "./QueueModal.styles";

import QueueModalItem from "./QueueModalItem/QueueModalItem";

import useOnClickOutside from "src/hooks/useOnClickOutside";

import Link from "src/system/Link/Link";
import Heading from "src/system/Heading/Heading";

const episodes = [
  {
    episode: "403 - Return of Yokai",
    name: "99% Invisible",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
  {
    episode: "403 - Return of Yokai",
    name: "99% Invisible",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
  },
];

const QueueModal = ({ handleQueue, t }: any) => {
  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleQueue());

  return (
    <QueueModalContainer ref={ref}>
      <QueueModalHeaderContainer>
        <Heading
          as="h1"
          variant="secondary"
          size="normal"
          fontSize={14}
          fontWeight={500}
          textAlign="start"
        >
          {t("up-next")}
        </Heading>
        <Link href="" onClick={() => {}} variant="secondary" size="normal">
          {t("clear-all")}
        </Link>
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

QueueModal.getInitialProps = async () => ({ namespacesRequired: ["player"] });

export default withTranslation("player")(QueueModal);
