import React from "react";
import { Link } from "@chakra-ui/react";
import { User } from "react-feather";

import { useAuthContext } from "src/context/Auth/Auth";
import { useSettingsContext } from "src/context/Settings/Settings";

import { SettingsContainer } from "./Settings.styles";

const Settings = () => {
  const [auth, handleAuth] = useAuthContext();
  const [, handleSettings] = useSettingsContext();

  const renderSettings = () => {
    if (auth.matches("loggedIn")) {
      return (
        <User
          onClick={handleSettings}
          size={16}
          color="#B7B7B7"
          strokeWidth={1.7}
        />
      );
    }

    return (
      <Link onClick={handleAuth} variant="primary" size="normal">
        Login
      </Link>
    );
  };

  return <SettingsContainer>{renderSettings()}</SettingsContainer>;
};

export default Settings;
