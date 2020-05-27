import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../../../../system/Button/Button";
import Input from "../../../../../system/Input/Input";

import { PasswordFormContainer } from "./Password.styles";

import {
  SettingsRowContainer,
  SettingsRowHeader,
  SettingsRowHeaderTitle,
  SettingsRowBreakLine,
} from "../Settings.styles";

interface PasswordFormProps {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string().required("New password is required"),
  confirmNewPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm new password is required"),
});

const Password: React.FC = () => {
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
      confirmNewPassword: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <SettingsRowContainer>
      <SettingsRowHeader>
        <SettingsRowHeaderTitle>Change password</SettingsRowHeaderTitle>
        <SettingsRowBreakLine />
      </SettingsRowHeader>

      <PasswordFormContainer onSubmit={handleSubmit}>
        <Input
          type="password"
          name="currentPassword"
          label="Current password"
          placeholder="Current password"
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
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.newPassword}
          error={errors.newPassword}
        />

        <Input
          type="password"
          name="confirmNewPassword"
          label="Confirm new password"
          placeholder="Confirm new password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmNewPassword}
          error={errors.confirmNewPassword}
        />

        <Button type="submit" submitting={isSubmitting}>
          Save
        </Button>
      </PasswordFormContainer>
    </SettingsRowContainer>
  );
};

export default Password;
