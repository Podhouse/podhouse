import React from "react";
import { useRouter } from "next/router";

import {
  SettingsRowContainer,
  SettingsRowHeader,
  SettingsRowHeaderTitle,
  SettingsRowBreakLine,
  SettingsRowSectionSingle,
  SettingsRowText,
} from "../../Settings.styles";

import { InitialButtonContainer, InitialButton } from "../Initial.styles";

const ChangePassword = () => {
  const router = useRouter();

  const handlePassword = (e) => {
    e.preventDefault();
    router.push("/app/settings/password");
  };

  return (
    <SettingsRowContainer>
      <SettingsRowHeader>
        <SettingsRowHeaderTitle>Change password</SettingsRowHeaderTitle>
        <SettingsRowBreakLine />
      </SettingsRowHeader>

      <SettingsRowSectionSingle>
        <SettingsRowText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </SettingsRowText>
        <InitialButtonContainer>
          <InitialButton type="button" onClick={handlePassword}>
            Change password
          </InitialButton>
        </InitialButtonContainer>
      </SettingsRowSectionSingle>
    </SettingsRowContainer>
  );
};

export default ChangePassword;
