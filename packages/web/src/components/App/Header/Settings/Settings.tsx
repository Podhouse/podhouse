import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import { User } from "react-feather";

import { useAuthContext } from "src/context/Auth/Auth";
import { useSettingsContext } from "src/context/Settings/Settings";

import { SettingsContainer } from "./Settings.styles";

import Link from "src/system/Link/Link";

const Settings = ({ t }: WithTranslation) => {
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
        {t("login")}
      </Link>
    );
  };

  return <SettingsContainer>{renderSettings()}</SettingsContainer>;
};

Settings.getInitialProps = async () => ({ namespacesRequired: ["header"] });

export default withTranslation("header")(Settings);
