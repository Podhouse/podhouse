import React, { useRef } from "react";

import {
  ShortcutsModalContainer,
  ShortcutsModalInsideContainer,
  ShortcutItemsContainer,
  ShortcutsModalTitle,
  ShortcutItemContainer,
  ShortcutItemText,
  ShortcutItemKey,
  ShortcutKeysContainer,
} from "./ShortcutsModal.styles";

import useOnClickOutside from "src/hooks/useOnClickOutside";

interface ShortcutsModalProps {
  handleShortcuts: () => any;
}

const ShortcutsModal = ({ handleShortcuts }: ShortcutsModalProps) => {
  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleShortcuts());

  return (
    <ShortcutsModalContainer>
      <ShortcutsModalInsideContainer ref={ref}>
        <ShortcutsModalTitle>Keyboard shortcuts</ShortcutsModalTitle>

        <ShortcutItemsContainer>
          <ShortcutItemContainer>
            <ShortcutItemText>Play / Pause</ShortcutItemText>
            <ShortcutItemKey>space</ShortcutItemKey>
          </ShortcutItemContainer>

          <ShortcutItemContainer>
            <ShortcutItemText>Forward 15 seconds</ShortcutItemText>
            <ShortcutItemKey>→</ShortcutItemKey>
          </ShortcutItemContainer>

          <ShortcutItemContainer>
            <ShortcutItemText>Back 15 seconds</ShortcutItemText>
            <ShortcutItemKey>←</ShortcutItemKey>
          </ShortcutItemContainer>

          <ShortcutItemContainer>
            <ShortcutItemText>Play next in queue</ShortcutItemText>
            <ShortcutKeysContainer>
              <ShortcutItemKey>shift</ShortcutItemKey>
              <ShortcutItemText>+</ShortcutItemText>
              <ShortcutItemKey>→</ShortcutItemKey>
            </ShortcutKeysContainer>
          </ShortcutItemContainer>

          <ShortcutItemContainer>
            <ShortcutItemText>Play previous in queue</ShortcutItemText>
            <ShortcutKeysContainer>
              <ShortcutItemKey>shift</ShortcutItemKey>
              <ShortcutItemText>+</ShortcutItemText>
              <ShortcutItemKey>←</ShortcutItemKey>
            </ShortcutKeysContainer>
          </ShortcutItemContainer>
        </ShortcutItemsContainer>
      </ShortcutsModalInsideContainer>
    </ShortcutsModalContainer>
  );
};

export default ShortcutsModal;
