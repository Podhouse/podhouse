import React from "react";
import { useRouter } from "next/router";

import {
  AccountContainer,
  AccountItemContainer,
  AccountItemTitle,
  AccountItemText,
  AccountItemTextStrong,
  AccountButtonContainer,
  AccountButton,
} from "./Account.styles";

import {
  SettingsRowContainer,
  SettingsRowHeader,
  SettingsRowHeaderTitle,
  SettingsRowBreakLine,
} from "../Settings.styles";

const Account = () => {
  const router = useRouter();

  const handleUpgrade = (e) => {
    e.preventDefault();
    router.push("/app/upgrade");
  };

  return (
    <SettingsRowContainer>
      <SettingsRowHeader>
        <SettingsRowHeaderTitle>Account</SettingsRowHeaderTitle>
        <SettingsRowBreakLine />
      </SettingsRowHeader>

      <AccountContainer>
        <AccountItemContainer>
          <AccountItemTitle>Premium</AccountItemTitle>
          <AccountItemText>
            You're a premium member since{" "}
            <AccountItemTextStrong>July 30, 2019</AccountItemTextStrong>
          </AccountItemText>
          <AccountButtonContainer>
            <AccountButton onClick={handleUpgrade}>Change plan</AccountButton>
          </AccountButtonContainer>
        </AccountItemContainer>

        <AccountItemContainer>
          <AccountItemTitle>Payment</AccountItemTitle>
          <AccountItemText>
            Your next payment will be charged in{" "}
            <AccountItemTextStrong>October 20, 2020 </AccountItemTextStrong>
            in the amount of{" "}
            <AccountItemTextStrong>US$ 3.99</AccountItemTextStrong>.
          </AccountItemText>
          <AccountButtonContainer>
            <AccountButton onClick={handleUpgrade}>Update</AccountButton>
          </AccountButtonContainer>
        </AccountItemContainer>
      </AccountContainer>
    </SettingsRowContainer>
  );
};

export default Account;
