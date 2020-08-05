import React from "react";
import { withTranslation } from "i18n";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";

import {
  SettingsItemContainer,
  SettingsItemHeaderContainer,
  SettingsItemHeaderTitle,
  SettingsItemHeaderBreakLine,
  SettingsItemContentContainer,
} from "../Settings.styles";

import { PasswordFormContainer } from "./Password.styles";

import Button from "src/system/Button/Button";
import Input from "src/system/Input/Input";

interface PasswordFormProps {
  currentPassword: string;
  newPassword: string;
}

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string().required("New password is required"),
});

const Password = ({ t }: any) => {
  const { register, handleSubmit, errors } = useForm<PasswordFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <SettingsItemContainer>
      <SettingsItemHeaderContainer>
        <SettingsItemHeaderTitle>{t("password")}</SettingsItemHeaderTitle>
        <SettingsItemHeaderBreakLine />
      </SettingsItemHeaderContainer>

      <SettingsItemContentContainer>
        <PasswordFormContainer onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="password"
            name="currentPassword"
            label={t("current-password")}
            placeholder={t("current-password")}
            height={40}
            ref={register}
            error={errors.currentPassword?.message}
          />

          <Input
            type="password"
            name="newPassword"
            label={t("new-password")}
            placeholder={t("new-password")}
            height={40}
            ref={register}
            error={errors.newPassword?.message}
          />

          <Button type="submit" height={40}>
            {t("save")}
          </Button>
        </PasswordFormContainer>
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

Password.getInitialProps = async () => ({ namespacesRequired: ["settings"] });

export default withTranslation("settings")(Password);
