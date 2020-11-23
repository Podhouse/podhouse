import React from "react";
import { Link } from "@chakra-ui/react";

import { useAuthContext } from "src/context/Auth/Auth";
import { useSettingsContext } from "src/context/Settings/Settings";

import { SettingsContainer } from "./Settings.styles";

const Settings = () => {
  const [, , handleAuth] = useAuthContext();
  const [, handleSettings] = useSettingsContext();

  return (
    <SettingsContainer>
      <Link onClick={handleAuth}>Login</Link>
    </SettingsContainer>
  );
};

export default Settings;
