import React, { useRef } from "react";

import {
  QueueModalContainer,
  QueueModalHeaderContainer,
  QueueModalHeaderText,
  QueueModalHeaderButton
} from "./QueueModal.styles";

import useOnClickOutside from "src/hooks/useOnClickOutside";

interface QueueModalProps {
  handleQueue: () => any;
}

const QueueModal = ({
  handleQueue,
}: QueueModalProps) => {
  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleQueue());

  return (
    <QueueModalContainer ref={ref}>
      <QueueModalHeaderContainer>
        <QueueModalHeaderText>Up Next</QueueModalHeaderText>
        <QueueModalHeaderButton type="button" onClick={() => { }}>Clear all</QueueModalHeaderButton>
      </QueueModalHeaderContainer>
    </QueueModalContainer>
  );
};

export default QueueModal;
