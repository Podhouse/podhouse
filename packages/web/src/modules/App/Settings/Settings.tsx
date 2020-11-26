import React from "react";
import Scrollbars from "react-custom-scrollbars";

import { SettingsContainer } from "./Settings.styles";

import ChangePassword from "./ChangePassword/ChangePassword";

const Settings = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <SettingsContainer>
      <ChangePassword />
    </SettingsContainer>
  </Scrollbars>
);

export default Settings;
