import React from "react";
import { withTranslation } from "i18n";

import {
  SettingsItemContainer,
  SettingsItemHeaderContainer,
  SettingsItemHeaderTitle,
  SettingsItemContentContainer,
} from "../Settings.styles";

import {
  NotificationsItemContainer,
  NotificationsToggleContainer,
} from "./Notifications.styles";

import Paragraph from "src/system/Paragraph/Paragraph";
import Toggle from "src/system/Toggle/Toggle";
import Separator from "src/system/Separator/Separator";

import useToggle from "src/hooks/useToggle";

const Notifications = ({ t }: any) => {
  const {
    toggle: toggleWeekly,
    handleToggle: handleToggleWeekly,
  } = useToggle();
  const { toggle: toggleNews, handleToggle: handleToggleNews } = useToggle();

  return (
    <SettingsItemContainer>
      <SettingsItemHeaderContainer>
        <SettingsItemHeaderTitle
          as="h1"
          variant="secondary"
          size="normal"
          fontSize={14}
          fontWeight={500}
          textAlign="start"
        >
          {t("notifications")}
        </SettingsItemHeaderTitle>
        <Separator variant="secondary" orientation="horizontal" />
      </SettingsItemHeaderContainer>

      <SettingsItemContentContainer>
        <NotificationsItemContainer>
          <Paragraph variant="secondary" size="normal" textAlign="start">
            {t("weekly-recomendations-about-trending-podcasts")}
          </Paragraph>

          <NotificationsToggleContainer>
            <Toggle
              id="weekly"
              checked={toggleWeekly}
              onChange={handleToggleWeekly}
            />
          </NotificationsToggleContainer>
        </NotificationsItemContainer>

        <NotificationsItemContainer>
          <Paragraph variant="secondary" size="normal" textAlign="start">
            {t("product-news,-upcoming-updates-and-features")}
          </Paragraph>

          <NotificationsToggleContainer>
            <Toggle
              id="news"
              checked={toggleNews}
              onChange={handleToggleNews}
            />
          </NotificationsToggleContainer>
        </NotificationsItemContainer>
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

Notifications.getInitialProps = async () => ({
  namespacesRequired: ["settings"],
});

export default withTranslation("settings")(Notifications);
