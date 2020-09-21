import React, { useRef } from "react";
import { withTranslation } from "i18n";
import NextLink from "next/link";

import {
  SettingsModalContainer,
  SettingsModalLinkContainer,
  SettingsThemeContainer,
  SettingsThemeIconContainer,
} from "./SettingsModal.styles";

import useOnClickOutside from "src/hooks/useOnClickOutside";

import useTheme from "src/system/useTheme";

import Link from "src/system/Link/Link";
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
        <Link
          variant="secondary"
          size="light"
          href="mailto:leonardomso11@gmail.com"
          target="_blank"
          rel="noopener"
        >
          {t("feedback")}
        </Link>
      </SettingsModalLinkContainer>

      <SettingsModalLinkContainer onClick={handleShortcuts}>
        <Link href="" variant="secondary" size="light">
          {t("shortcuts")}
        </Link>
      </SettingsModalLinkContainer>

      <SettingsModalLinkContainer>
        <NextLink href="/app/settings" as="/app/settings">
          <Link href="/app/settings" variant="secondary" size="light">
            {t("settings")}
          </Link>
        </NextLink>
      </SettingsModalLinkContainer>

      <SettingsThemeContainer onClick={() => themeState.toggle()}>
        <Link href="" variant="secondary" size="light">
          {t("theme")}
        </Link>
        <SettingsThemeIconContainer>
          <ThemeToggle
            dark={themeState.dark}
            onClick={() => themeState.toggle()}
          />
        </SettingsThemeIconContainer>
      </SettingsThemeContainer>

      <SettingsModalLinkContainer onClick={logoutAuth}>
        <Link href="" variant="secondary" size="light">
          {t("logout")}
        </Link>
      </SettingsModalLinkContainer>
    </SettingsModalContainer>
  );
};

SettingsModal.getInitialProps = async () => ({
  namespacesRequired: ["header"],
});

export default withTranslation("header")(SettingsModal);
