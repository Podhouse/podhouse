import React from "react";
import { i18n, withTranslation } from "i18n";

import {
  SettingsItemContainer,
  SettingsItemHeaderContainer,
  SettingsItemHeaderTitle,
  SettingsItemHeaderBreakLine,
  SettingsItemContentContainer,
} from "../Settings.styles";

import Select from "src/system/Select/Select";

const options = [
  // {
  //   name: "Dansk",
  //   value: "da",
  // },
  // {
  //   name: "Deustch",
  //   value: "de",
  // },
  {
    name: "English (US)",
    value: "en",
  },
  // {
  //   name: "Español",
  //   value: "es",
  // },
  // {
  //   name: "Français",
  //   value: "fr",
  // },
  // {
  //   name: "Italian",
  //   value: "it",
  // },
  // {
  //   name: "Norsk",
  //   value: "no",
  // },
  // {
  //   name: "Polski",
  //   value: "pl",
  // },
  {
    name: "Português (Brasil)",
    value: "pt",
  },
  // {
  //   name: "Pyccĸий",
  //   value: "ru",
  // },
  // {
  //   name: "Swedish",
  //   value: "swe",
  // },
  // {
  //   name: "Türkçe",
  //   value: "tr",
  // },
  // {
  //   name: "Ελληνικά",
  //   value: "el",
  // },
  // {
  //   name: "日本人",
  //   value: "ja",
  // },
  // {
  //   name: "한국어",
  //   value: "ko",
  // },
];

const Language = ({ t }: any) => {
  const handleChange = (event) => i18n.changeLanguage(event.target.value);

  return (
    <SettingsItemContainer>
      <SettingsItemHeaderContainer>
        <SettingsItemHeaderTitle>{t("language")}</SettingsItemHeaderTitle>
        <SettingsItemHeaderBreakLine />
      </SettingsItemHeaderContainer>

      <SettingsItemContentContainer>
        <Select options={options} onChange={handleChange} />
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

Language.getInitialProps = async () => ({ namespacesRequired: ["settings"] });

export default withTranslation("settings")(Language);
