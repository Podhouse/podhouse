import React, { useRef } from "react";
import { withTranslation } from "i18n";
import Link from "next/link";

import {
  SettingsModalContainer,
  SettingsModalLinkContainer,
  SettingsModalLink,
  SettingsThemeContainer,
  SettingsThemeIconContainer,
} from "./SettingsModal.styles";

import useOnClickOutside from "src/hooks/useOnClickOutside";

import useTheme from "src/system/useTheme";

import ThemeToggle from "src/components/ThemeToggle/ThemeToggle";

const SettingsModal = ({
  logoutAuth,
  handleSettings,
  handleShortcuts,
  t,
}: any) => {
  const themeState = useTheme();

  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleSettings());

  return (
    <SettingsModalContainer ref={ref}>
      <SettingsModalLinkContainer>
        <a
          href="mailto:leonardomso11@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SettingsModalLink>{t("feedback")}</SettingsModalLink>
        </a>
      </SettingsModalLinkContainer>

      <SettingsModalLinkContainer onClick={handleShortcuts}>
        <SettingsModalLink>{t("shortcuts")}</SettingsModalLink>
      </SettingsModalLinkContainer>

      <Link href="/app/settings">
        <SettingsModalLinkContainer>
          <SettingsModalLink>{t("settings")}</SettingsModalLink>
        </SettingsModalLinkContainer>
      </Link>

      <SettingsThemeContainer onClick={() => themeState.toggle()}>
        <SettingsModalLink>{t("theme")}</SettingsModalLink>
        <SettingsThemeIconContainer>
          <ThemeToggle
            dark={themeState.dark}
            onClick={() => themeState.toggle()}
          />
        </SettingsThemeIconContainer>
      </SettingsThemeContainer>

      <SettingsModalLinkContainer onClick={logoutAuth}>
        <SettingsModalLink>{t("logout")}</SettingsModalLink>
      </SettingsModalLinkContainer>
    </SettingsModalContainer>
  );
};

SettingsModal.getInitialProps = async () => ({
  namespacesRequired: ["header"],
});

export default withTranslation("header")(SettingsModal);
