import React from "react";
import Scrollbars from "react-custom-scrollbars";

import Language from "./Language/Language";
import Notifications from "./Notifications/Notifications";
import Password from "./Password/Password";

import { SettingsContainer } from "./Settings.styles";

const Settings = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <SettingsContainer>
      <Language />
      <Notifications />
      <Password />
    </SettingsContainer>
  </Scrollbars>
);

export default Settings;
