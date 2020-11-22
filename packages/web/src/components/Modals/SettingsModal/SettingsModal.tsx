import React, { useRef } from "react";
import { WithTranslation } from "next-i18next";
import { Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  SettingsModalContainer,
  SettingsModalLinkContainer,
  SettingsThemeContainer,
  SettingsThemeIconContainer,
} from "./SettingsModal.styles";

import { useSettingsContext } from "src/context/Settings/Settings";

import useOnClickOutside from "src/hooks/useOnClickOutside";

import { useLogout } from "src/utils/auth";

import ThemeToggle from "src/components/ThemeToggle/ThemeToggle";

const SettingsModal = ({ t }: WithTranslation) => {
  const [, handleSettings] = useSettingsContext();

  const [logout] = useLogout();

  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleSettings());

  const onLogout = () => {
    logout();
    handleSettings();
  };

  return (
    <SettingsModalContainer ref={ref}>
      <SettingsModalLinkContainer>
        <Link
          href="mailto:leonardomso11@gmail.com"
          target="_blank"
          rel="noopener"
        >
          Feedback
        </Link>
      </SettingsModalLinkContainer>

      <SettingsModalLinkContainer>
        <ReactRouterLink to="/settings">
          Settings
        </ReactRouterLink>
      </SettingsModalLinkContainer>

      <SettingsThemeContainer onClick={() => { }}>
        <Link onClick={() => { }}>
          Theme
        </Link>
        <SettingsThemeIconContainer>
          <ThemeToggle
            dark={false}
            onClick={() => { }}
          />
        </SettingsThemeIconContainer>
      </SettingsThemeContainer>

      <SettingsModalLinkContainer onClick={onLogout}>
        <Link onClick={logout}>
          Logout
        </Link>
      </SettingsModalLinkContainer>
    </SettingsModalContainer>
  );
};

export default SettingsModal;
