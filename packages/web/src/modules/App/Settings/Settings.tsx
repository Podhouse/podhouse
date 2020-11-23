import React from "react";
import Scrollbars from "react-custom-scrollbars";

import { SettingsContainer } from "./Settings.styles";

import Language from "./Language/Language";
import Notifications from "./Notifications/Notifications";
import ChangePassword from "./ChangePassword/ChangePassword";

const Settings = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <SettingsContainer>
      <Language />
      <Notifications />
      <ChangePassword />
    </SettingsContainer>
  </Scrollbars>
);

export default Settings;
