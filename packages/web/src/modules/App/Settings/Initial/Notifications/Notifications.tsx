import React, { useState } from "react";

import Toggle from "../../../../../system/Toggle/Toggle";

import {
  SettingsRowContainer,
  SettingsRowHeader,
  SettingsRowHeaderTitle,
  SettingsRowBreakLine,
  SettingsRowSectionMultiple,
  SettingsRowSectionSingle,
  SettingsRowText,
  SettingsToggleContainer,
} from "../../Settings.styles";

const Notifications = () => {
  const [weekly, setWeekly] = useState<boolean>(false);
  const [trending, setTrending] = useState<boolean>(true);
  const [updates, setUpdates] = useState<boolean>(false);

  const handleWeekly = () => {
    setWeekly(!weekly);
  };

  const handleTrending = () => {
    setTrending(!trending);
  };

  const handleUpdates = () => {
    setUpdates(!updates);
  };

  return (
    <SettingsRowContainer>
      <SettingsRowHeader>
        <SettingsRowHeaderTitle>Notifications</SettingsRowHeaderTitle>
        <SettingsRowBreakLine />
      </SettingsRowHeader>

      <SettingsRowSectionMultiple>
        <SettingsRowSectionSingle>
          <SettingsRowText>Weekly recomendations</SettingsRowText>

          <SettingsToggleContainer>
            <Toggle checked={weekly} onChange={handleWeekly} />
          </SettingsToggleContainer>
        </SettingsRowSectionSingle>

        <SettingsRowSectionSingle>
          <SettingsRowText>Trending podcasts, suggestions</SettingsRowText>

          <SettingsToggleContainer>
            <Toggle checked={trending} onChange={handleTrending} />
          </SettingsToggleContainer>
        </SettingsRowSectionSingle>

        <SettingsRowSectionSingle>
          <SettingsRowText>News about updates on Xgruve</SettingsRowText>

          <SettingsToggleContainer>
            <Toggle checked={updates} onChange={handleUpdates} />
          </SettingsToggleContainer>
        </SettingsRowSectionSingle>
      </SettingsRowSectionMultiple>
    </SettingsRowContainer>
  );
};

export default Notifications;
