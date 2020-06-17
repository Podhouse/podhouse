import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../../../system/Button/Button";
import Input from "../../../../system/Input/Input";

import { PasswordFormContainer } from "./Password.styles";

import {
  SettingsItemContainer,
  SettingsItemHeader,
  SettingsItemHeaderTitle,
  SettingsItemHeaderDescription,
  SettingsItemContentContainer,
} from "../Settings.styles";

interface PasswordFormProps {
  currentPassword: string;
  newPassword: string;
}

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string().required("New password is required"),
});

const Password = () => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormik<PasswordFormProps>({
    initialValues: {
      currentPassword: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <SettingsItemContainer>
      <SettingsItemHeader>
        <SettingsItemHeaderTitle>Password</SettingsItemHeaderTitle>
        <SettingsItemHeaderDescription>
          You can change your password here.
        </SettingsItemHeaderDescription>
      </SettingsItemHeader>

      <SettingsItemContentContainer>
        <PasswordFormContainer onSubmit={handleSubmit}>
          <Input
            type="password"
            name="currentPassword"
            label="Current password"
            placeholder="Current password"
            height={40}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.currentPassword}
            error={errors.currentPassword}
          />

          <Input
            type="password"
            name="newPassword"
            label="New password"
            placeholder="New password"
            height={40}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.newPassword}
            error={errors.newPassword}
          />

          <Button type="submit" submitting={isSubmitting} height={40}>
            Save
          </Button>
        </PasswordFormContainer>
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

export default Password;
