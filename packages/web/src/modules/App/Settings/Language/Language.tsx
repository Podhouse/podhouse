import React from "react";
import { i18n } from "i18n";

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
    name: "English (US)",
    value: "en",
  },
  {
    name: "Portuguese (Brasil)",
    value: "pt-br",
  },
  // {
  //   name: "Español",
  //   value: "Español",
  // },
  // {
  //   name: "Deustch",
  //   value: "Deustch",
  // },
  // {
  //   name: "Français",
  //   value: "Français",
  // },
];

const Language = () => {
  const handleChange = (event) => i18n.changeLanguage(event.target.value);

  return (
    <SettingsItemContainer>
      <SettingsItemHeaderContainer>
        <SettingsItemHeaderTitle>Language</SettingsItemHeaderTitle>
        <SettingsItemHeaderBreakLine />
      </SettingsItemHeaderContainer>

      <SettingsItemContentContainer>
        <Select options={options} onChange={handleChange} />
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

export default Language;
