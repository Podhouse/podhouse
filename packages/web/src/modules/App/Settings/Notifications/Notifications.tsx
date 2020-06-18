import * as React from "react";

import Toggle from "../../../../system/Toggle/Toggle";

import {
  SettingsItemContainer,
  SettingsItemHeader,
  SettingsItemHeaderTitle,
  SettingsItemHeaderDescription,
  SettingsItemContentContainer,
} from "../Settings.styles";

import {
  NotificationsItemContainer,
  NotificationsTextContainer,
  NotificationsItemTitle,
  NotificationsItemText,
  NotificationsToggleContainer,
} from "./Notifications.styles";

const Notifications = () => {
  return (
    <SettingsItemContainer>
      <SettingsItemHeader>
        <SettingsItemHeaderTitle>Notifications</SettingsItemHeaderTitle>
        <SettingsItemHeaderDescription>
          You can set to receive updates about us.
        </SettingsItemHeaderDescription>
      </SettingsItemHeader>

      <SettingsItemContentContainer>
        <NotificationsItemContainer>
          <NotificationsTextContainer>
            <NotificationsItemTitle>
              Weekly recomendations
            </NotificationsItemTitle>
            <NotificationsItemText>
              Receive weekly recommendations about what's trending and discover
              new podcasts.
            </NotificationsItemText>
          </NotificationsTextContainer>

          <NotificationsToggleContainer>
            <Toggle checked onChange={() => console.log("clicked")} />
          </NotificationsToggleContainer>
        </NotificationsItemContainer>

        <NotificationsItemContainer>
          <NotificationsTextContainer>
            <NotificationsItemTitle>Product news</NotificationsItemTitle>
            <NotificationsItemText>
              Receive notifications about upcoming updates and new product
              features on Podhouse.
            </NotificationsItemText>
          </NotificationsTextContainer>

          <NotificationsToggleContainer>
            <Toggle checked onChange={() => console.log("clicked")} />
          </NotificationsToggleContainer>
        </NotificationsItemContainer>
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

export default Notifications;
