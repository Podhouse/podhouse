import React from "react";
import Scrollbars from "react-custom-scrollbars";

import Header from "../../modules/App/Dashboard/Settings/Header/Header";

import { SettingsContainer, SettingsInsideContainer } from "./Settings.styles";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

interface SettingsProps {
  children: React.ReactNode;
}

const Settings: React.FC<SettingsProps> = ({ children }) => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <SettingsContainer>
      <SettingsInsideContainer>
        <Header avatar={avatar} />

        {children}
      </SettingsInsideContainer>
    </SettingsContainer>
  </Scrollbars>
);

export default Settings;
