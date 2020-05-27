import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useAuthContext } from "../../../../context/Auth/Auth";
import { useSettingsContext } from "../../../../context/Settings/Settings";

import {
  SettingsContainer,
  SettingsInnerContainer,
  SettingsAvatar,
  SettingsUpgradeLink,
  SettingsLoginLink,
  SettingsLoggedInContainer,
  SettingsLoggedOutContainer,
} from "./Settings.styles";

const Settings: React.FC = () => {
  const [auth, handleAuth] = useAuthContext();
  const [, handleSettings] = useSettingsContext();

  const renderSettings = () => {
    if (auth.matches("loggedIn")) {
      return (
        <SettingsLoggedInContainer>
          <Link href="/app/upgrade" passHref>
            <SettingsUpgradeLink>Upgrade</SettingsUpgradeLink>
          </Link>

          <SettingsInnerContainer>
            <SettingsAvatar onClick={handleSettings}>
              <FontAwesomeIcon icon={faUser} size="sm" color="#FFFFFF" />
            </SettingsAvatar>
          </SettingsInnerContainer>
        </SettingsLoggedInContainer>
      );
    }
    return (
      <SettingsLoggedOutContainer>
        <SettingsLoginLink onClick={handleAuth}>Login</SettingsLoginLink>
      </SettingsLoggedOutContainer>
    );
  };

  return <SettingsContainer>{renderSettings()}</SettingsContainer>;
};

export default Settings;
