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

const SettingsModal = ({ logoutAuth, handleSettings }: SettingsModalProps) => {
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

      <SettingsModalLinkContainer>
        <SettingsModalLink>Theme</SettingsModalLink>
      </SettingsModalLinkContainer>

      <SettingsModalLinkContainer>
        <SettingsModalLink onClick={logoutAuth}>Log out</SettingsModalLink>
      </SettingsModalLinkContainer>
    </SettingsModalContainer>
  );
};

export default SettingsModal;
