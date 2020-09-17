import React from "react";
import { withTranslation } from "i18n";
import { User } from "react-feather";

import { useAuthContext } from "../../../../context/Auth/Auth";
import { useSettingsContext } from "../../../../context/Settings/Settings";

import { SettingsContainer } from "./Settings.styles";

import Button from "src/system/Button/Button";

const Settings = ({ t }: any) => {
  const [auth, handleAuth] = useAuthContext();
  const [, handleSettings] = useSettingsContext();

  const renderSettings = () => {
    if (auth.matches("loggedIn")) {
      return (
        <User
          onClick={handleSettings}
          size={16}
          color="#B7B7B7"
          strokeWidth={1.5}
        />
      );
    }
    return (
      <Button
        type="button"
        onClick={handleAuth}
        variant="ghost"
        size="normal"
        width="auto"
      >
        {t("login")}
      </Button>
    );
  };

  return <SettingsContainer>{renderSettings()}</SettingsContainer>;
};

Settings.getInitialProps = async () => ({ namespacesRequired: ["header"] });

export default withTranslation("header")(Settings);
