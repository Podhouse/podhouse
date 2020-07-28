import * as React from "react";

import {
  SettingsItemContainer,
  SettingsItemHeaderContainer,
  SettingsItemHeaderTitle,
  SettingsItemHeaderBreakLine,
  SettingsItemContentContainer,
} from "../Settings.styles";

import Select from "src/system/Select/Select";

const options = [
  {
    name: "English",
    value: "English",
  },
  {
    name: "Portuguese",
    value: "Portuguese",
  },
  {
    name: "Español",
    value: "Español",
  },
];

const Language = () => {
  return (
    <SettingsItemContainer>
      <SettingsItemHeaderContainer>
        <SettingsItemHeaderTitle>Language</SettingsItemHeaderTitle>
        <SettingsItemHeaderBreakLine />
      </SettingsItemHeaderContainer>

      <SettingsItemContentContainer>
        <Select options={options} />
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

export default Language;
