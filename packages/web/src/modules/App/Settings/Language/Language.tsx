import React from "react";

import Select from "../../../../system/Select/Select";

import {
  SettingsItemContainer,
  SettingsItemHeader,
  SettingsItemHeaderTitle,
  SettingsItemHeaderDescription,
  SettingsItemContentContainer,
} from "../Settings.styles";

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
      <SettingsItemHeader>
        <SettingsItemHeaderTitle>Language</SettingsItemHeaderTitle>
        <SettingsItemHeaderDescription>
          You can choose the language of your preference here.
        </SettingsItemHeaderDescription>
      </SettingsItemHeader>

      <SettingsItemContentContainer>
        <Select options={options} />
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

export default Language;
