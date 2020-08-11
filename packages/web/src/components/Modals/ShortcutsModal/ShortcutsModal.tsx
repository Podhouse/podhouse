import React, { useRef } from "react";
import { withTranslation } from "i18n";

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

const ShortcutsModal = ({ handleShortcuts, t }: any) => {
  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleShortcuts());

  return (
    <ShortcutsModalContainer>
      <ShortcutsModalInsideContainer ref={ref}>
        <ShortcutsModalTitle>{t("keyboard-shortcuts")}</ShortcutsModalTitle>

        <ShortcutItemsContainer>
          <ShortcutItemContainer>
            <ShortcutItemText>{t("play-pause")}</ShortcutItemText>
            <ShortcutItemKey>space</ShortcutItemKey>
          </ShortcutItemContainer>

          <ShortcutItemContainer>
            <ShortcutItemText>{t("forward-15-seconds")}</ShortcutItemText>
            <ShortcutItemKey>→</ShortcutItemKey>
          </ShortcutItemContainer>

          <ShortcutItemContainer>
            <ShortcutItemText>{t("back-15-seconds")}</ShortcutItemText>
            <ShortcutItemKey>←</ShortcutItemKey>
          </ShortcutItemContainer>

          <ShortcutItemContainer>
            <ShortcutItemText>{t("play-next-in-queue")}</ShortcutItemText>
            <ShortcutKeysContainer>
              <ShortcutItemKey>shift</ShortcutItemKey>
              <ShortcutItemText>+</ShortcutItemText>
              <ShortcutItemKey>→</ShortcutItemKey>
            </ShortcutKeysContainer>
          </ShortcutItemContainer>

          <ShortcutItemContainer>
            <ShortcutItemText>{t("play-previous-in-queue")}</ShortcutItemText>
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

ShortcutsModal.getInitialProps = async () => ({
  namespacesRequired: ["shortcuts"],
});

export default withTranslation("shortcuts")(ShortcutsModal);
