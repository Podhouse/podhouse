import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  SettingsItemContainer,
  SettingsItemHeaderContainer,
  SettingsItemHeaderTitle,
  SettingsItemContentContainer,
} from "../Settings.styles";

import { PasswordFormContainer } from "./Password.styles";

import Button from "src/system/Button/Button";
import Input from "src/system/Input/Input";
import Separator from "src/system/Separator/Separator";

interface PasswordFormProps {
  currentPassword: string;
  newPassword: string;
}

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string().required("New password is required"),
});

const Password = ({ t }: WithTranslation) => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm<PasswordFormProps>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <SettingsItemContainer>
      <SettingsItemHeaderContainer>
        <SettingsItemHeaderTitle
          as="h1"
          variant="secondary"
          size="normal"
          fontSize={14}
          fontWeight={500}
          textAlign="start"
        >
          {t("password")}
        </SettingsItemHeaderTitle>
        <Separator variant="secondary" orientation="horizontal" />
      </SettingsItemHeaderContainer>

      <SettingsItemContentContainer>
        <PasswordFormContainer onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="password"
            name="currentPassword"
            label={t("current-password")}
            placeholder={t("current-password")}
            variant="primary"
            scale="normal"
            ref={register}
            error={errors.currentPassword?.message}
          />

          <Input
            type="password"
            name="newPassword"
            label={t("new-password")}
            placeholder={t("new-password")}
            variant="primary"
            scale="normal"
            ref={register}
            error={errors.newPassword?.message}
          />

          <Button
            type="submit"
            variant="primary"
            size="normal"
            isDisabled={!formState.isValid || formState.isSubmitting}
          >
            {t("save")}
          </Button>
        </PasswordFormContainer>
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

Password.getInitialProps = async () => ({ namespacesRequired: ["settings"] });

export default withTranslation("settings")(Password);
