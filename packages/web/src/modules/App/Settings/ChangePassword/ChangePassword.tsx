import React from "react";
import { Button, Input, Divider } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  SettingsItemContainer,
  SettingsItemHeaderContainer,
  SettingsItemHeaderTitle,
  SettingsItemContentContainer,
} from "../Settings.styles";

import { ChangePasswordContainer } from "./ChangePassword.styles";

interface ChangePasswordFormProps {
  oldPassword: string;
  newPassword: string;
}

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string().required("New password is required"),
});

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm<ChangePasswordFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {};

  return (
    <SettingsItemContainer>
      <SettingsItemHeaderContainer>
        <SettingsItemHeaderTitle
          as="h1"
          fontSize={14}
          fontWeight={500}
          textAlign="start"
        >
          Password
        </SettingsItemHeaderTitle>
        <Divider orientation="horizontal" />
      </SettingsItemHeaderContainer>

      <SettingsItemContentContainer>
        <ChangePasswordContainer onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="password"
            name="oldPassword"
            label="Current password"
            placeholder="Current password"
            ref={register}
            error={errors.oldPassword?.message}
          />

          <Input
            type="password"
            name="newPassword"
            label="New password"
            placeholder="New password"
            ref={register}
            error={errors.newPassword?.message}
          />

          <Button
            type="submit"
            isDisabled={!formState.isValid}
            isLoading={formState.isSubmitting}
          >
            Save
          </Button>
        </ChangePasswordContainer>
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

export default ChangePassword;
