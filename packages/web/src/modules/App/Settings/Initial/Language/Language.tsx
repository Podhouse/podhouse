import React from "react";

import Select from "../../../../../system/Select/Select";

import {
  SettingsRowContainer,
  SettingsRowHeader,
  SettingsRowHeaderTitle,
  SettingsRowBreakLine,
  SettingsRowSectionSingle,
  SettingsRowText,
} from "../../Settings.styles";

const options = [
  {
    name: "English",
    value: "english",
  },
];

const Language = () => (
  <SettingsRowContainer>
    <SettingsRowHeader>
      <SettingsRowHeaderTitle>Language</SettingsRowHeaderTitle>
      <SettingsRowBreakLine />
    </SettingsRowHeader>

    <SettingsRowSectionSingle>
      <SettingsRowText>Choose your language</SettingsRowText>
      <Select options={options} />
    </SettingsRowSectionSingle>
  </SettingsRowContainer>
);

export default Language;
