import React, { useRef } from "react";
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

interface SettingsModalProps {
  logoutAuth: () => any;
  handleSettings: () => any;
}

const SettingsModal = ({ logoutAuth, handleSettings }: SettingsModalProps) => {
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
          <SettingsModalLink>Feedback</SettingsModalLink>
        </a>
      </SettingsModalLinkContainer>

      <SettingsModalLinkContainer>
        <Link href="/app/settings" passHref>
          <SettingsModalLink>Settings</SettingsModalLink>
        </Link>
      </SettingsModalLinkContainer>

      <SettingsThemeContainer onClick={() => themeState.toggle()}>
        <SettingsModalLink>Theme</SettingsModalLink>
        <SettingsThemeIconContainer>
          <ThemeToggle
            dark={themeState.dark}
            onClick={() => themeState.toggle()}
          />
        </SettingsThemeIconContainer>
      </SettingsThemeContainer>

      <SettingsModalLinkContainer>
        <SettingsModalLink onClick={logoutAuth}>Log out</SettingsModalLink>
      </SettingsModalLinkContainer>
    </SettingsModalContainer>
  );
};

export default SettingsModal;
