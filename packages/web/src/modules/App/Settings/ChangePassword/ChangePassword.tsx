import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay/hooks";

import {
  SettingsItemContainer,
  SettingsItemHeaderContainer,
  SettingsItemHeaderTitle,
  SettingsItemContentContainer,
} from "../Settings.styles";

import { ChangePasswordFormContainer } from "./ChangePassword.styles";

import Button from "src/system/Button/Button";
import Input from "src/system/Input/Input";
import Separator from "src/system/Separator/Separator";

import UserChangePassword from "src/components/Modals/AuthModal/Auth/ChangePassword/UserChangePassword";

interface ChangePasswordFormProps {
  oldPassword: string;
  newPassword: string;
}

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string().required("New password is required"),
});

const ChangePassword = ({ t }: WithTranslation) => {
  const [userChangePassword, isPending] = useMutation(UserChangePassword);

  const {
    register,
    handleSubmit,
    setError,
    errors,
    formState,
    getValues,
  } = useForm<ChangePasswordFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    userChangePassword({
      variables: {
        input: {
          oldPassword: getValues().oldPassword,
          newPassword: getValues().newPassword,
        },
      },
      onCompleted: ({ UserChangePassword }: any) => {
        if (UserChangePassword.error) {
          const error = UserChangePassword.error;

          if (error === "Invalid password") {
            setError("oldPassword", {
              type: "manual",
              message: error,
            });
          } else {
            setError("oldPassword", {
              type: "manual",
              message: error,
            });
            setError("newPassword", {
              type: "manual",
              message: error,
            });
          }
          return;
        }

        console.log("success");
      },
    });
  };

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
        <ChangePasswordFormContainer onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="password"
            name="oldPassword"
            label={t("current-password")}
            placeholder={t("current-password")}
            variant="primary"
            scale="normal"
            ref={register}
            error={errors.oldPassword?.message}
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
            isDisabled={
              !formState.isValid || formState.isSubmitting || isPending
            }
          >
            {t("save")}
          </Button>
        </ChangePasswordFormContainer>
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

ChangePassword.getInitialProps = async () => ({
  namespacesRequired: ["settings"],
});

export default withTranslation("settings")(ChangePassword);
