import React from "react";
import { User } from "react-feather";

import { useAuthContext } from "../../../../context/Auth/Auth";
import { useSettingsContext } from "../../../../context/Settings/Settings";

import { SettingsContainer, SettingsLoginLink } from "./Settings.styles";

const Settings: React.FC = () => {
  const [auth, handleAuth] = useAuthContext();
  const [, handleSettings] = useSettingsContext();

  const renderSettings = () => {
    if (auth.matches("loggedIn")) {
      return (
        <User
          onClick={handleSettings}
          size={18}
          color="#999999"
          strokeWidth={1.5}
        />
      );
    }
    return <SettingsLoginLink onClick={handleAuth}>Login</SettingsLoginLink>;
  };

  return <SettingsContainer>{renderSettings()}</SettingsContainer>;
};

export default Settings;
