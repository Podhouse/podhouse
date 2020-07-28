import * as React from "react";
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

const Password = () => {
  const { register, handleSubmit, errors } = useForm<PasswordFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <SettingsItemContainer>
      <SettingsItemHeaderContainer>
        <SettingsItemHeaderTitle>Password</SettingsItemHeaderTitle>
        <SettingsItemHeaderBreakLine />
      </SettingsItemHeaderContainer>

      <SettingsItemContentContainer>
        <PasswordFormContainer onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="password"
            name="currentPassword"
            label="Current password"
            placeholder="Current password"
            height={40}
            ref={register}
            error={errors.currentPassword?.message}
          />

          <Input
            type="password"
            name="newPassword"
            label="New password"
            placeholder="New password"
            height={40}
            ref={register}
            error={errors.newPassword?.message}
          />

          <Button type="submit" height={40}>
            Save
          </Button>
        </PasswordFormContainer>
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

export default Password;
