import React, { useRef } from "react";
import { withTranslation } from "i18n";
import Scrollbars from "react-custom-scrollbars";

import {
  QueueModalContainer,
  QueueModalHeaderContainer,
  QueueModalHeaderText,
  QueueModalHeaderButton,
  QueueModalItemsContainer
} from "./QueueModal.styles";

import QueueModalItem from "./QueueModalItem/QueueModalItem";

import useOnClickOutside from "src/hooks/useOnClickOutside";

const episodes = [
  {
    episode: "403 - Return of Yokai",
    name: "99% Invisible",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg"
  },
  {
    episode: "403 - Return of Yokai",
    name: "99% Invisible",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg"
  },
  // {
  //   episode: "403 - Return of Yokai",
  //   name: "99% Invisible",
  //   avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg"
  // },
  // {
  //   episode: "403 - Return of Yokai",
  //   name: "99% Invisible",
  //   avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg"
  // }
]

const QueueModal = ({ handleQueue, t }: any) => {
  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleQueue());

  return (
    <QueueModalContainer ref={ref}>
      <QueueModalHeaderContainer>
        <QueueModalHeaderText>{t("up-next")}</QueueModalHeaderText>
        <QueueModalHeaderButton type="button" onClick={() => { }}>
          {t("clear-all")}
        </QueueModalHeaderButton>
      </QueueModalHeaderContainer>

      <Scrollbars
        universal
        autoHide
        autoHideTimeout={100}
        autoHideDuration={100}
      >
        <QueueModalItemsContainer>
          {episodes.map(({ episode, name, avatar }) => <QueueModalItem episode={episode} name={name} avatar={avatar} />)}
        </QueueModalItemsContainer>
      </Scrollbars>
    </QueueModalContainer>
  );
};

QueueModal.getInitialProps = async () => ({ namespacesRequired: ["player"] });

export default withTranslation("player")(QueueModal);
