import React, { useRef } from "react";
import { Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  SettingsModalContainer,
  SettingsModalLinkContainer,
} from "./SettingsModal.styles";

import { useSettingsContext } from "src/machines/Settings/SettingsContext";

import useOnClickOutside from "src/hooks/useOnClickOutside";

import { useLogout } from "src/utils/auth";

const SettingsModal = () => {
  const { handleSettings } = useSettingsContext();

  const { onLogout } = useLogout();

  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleSettings());

  const onHandleLogout = () => {
    onLogout();
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
        <ReactRouterLink to="/whats-new">What's New</ReactRouterLink>
      </SettingsModalLinkContainer>

      <SettingsModalLinkContainer>
        <ReactRouterLink to="/settings">Settings</ReactRouterLink>
      </SettingsModalLinkContainer>

      <SettingsModalLinkContainer onClick={onHandleLogout}>
        <Link onClick={onHandleLogout}>Logout</Link>
      </SettingsModalLinkContainer>
    </SettingsModalContainer>
  );
};

export default SettingsModal;
