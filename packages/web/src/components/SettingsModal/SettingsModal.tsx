import React, { useRef } from "react";
import Link from "next/link";

import {
  SettingsModalContainer,
  SettingsModalLinkContainer,
  SettingsModalLink,
} from "./SettingsModal.styles";

import useOnClickOutside from "../../hooks/useOnClickOutside";

interface SettingsModalProps {
  logoutAuth: () => any;
  handleSettings: () => any;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  logoutAuth,
  handleSettings,
}) => {
  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleSettings());

  return (
    <SettingsModalContainer ref={ref}>
      <SettingsModalLinkContainer>
        <Link href="/app/settings/account" passHref>
          <SettingsModalLink>Account</SettingsModalLink>
        </Link>
      </SettingsModalLinkContainer>

      <SettingsModalLinkContainer>
        <Link href="/app/settings" passHref>
          <SettingsModalLink>Settings</SettingsModalLink>
        </Link>
      </SettingsModalLinkContainer>

      <SettingsModalLinkContainer>
        <SettingsModalLink onClick={logoutAuth}>Log out</SettingsModalLink>
      </SettingsModalLinkContainer>
    </SettingsModalContainer>
  );
};

export default SettingsModal;
