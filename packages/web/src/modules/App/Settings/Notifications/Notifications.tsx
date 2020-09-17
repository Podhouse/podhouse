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
  NotificationsItemTitle,
  NotificationsToggleContainer,
} from "./Notifications.styles";

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
        <SettingsItemHeaderTitle>{t("notifications")}</SettingsItemHeaderTitle>
        <Separator variant="secondary" orientation="horizontal" />
      </SettingsItemHeaderContainer>

      <SettingsItemContentContainer>
        <NotificationsItemContainer>
          <NotificationsItemTitle>
            {t("weekly-recomendations-about-trending-podcasts")}
          </NotificationsItemTitle>

          <NotificationsToggleContainer>
            <Toggle
              id="weekly"
              checked={toggleWeekly}
              onChange={handleToggleWeekly}
            />
          </NotificationsToggleContainer>
        </NotificationsItemContainer>

        <NotificationsItemContainer>
          <NotificationsItemTitle>
            {t("product-news,-upcoming-updates-and-features")}
          </NotificationsItemTitle>

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
