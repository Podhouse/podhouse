import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../../../system/Input/Input";
import Button from "../../../../system/Button/Button";

import { useAuthContext } from "../../../../context/Auth/Auth";

import { AuthTextContainer, AuthText, AuthFormContainer } from "../Auth.styles";

interface ResetPasswordFormProps {
  newPassword: string;
  confirmNewPassword: string;
}

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("Password is required"),
  confirmNewPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const ResetPassword: React.FC = () => {
  const [, , , send] = useAuthContext();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormik<ResetPasswordFormProps>({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <>
      <AuthTextContainer>
        <AuthText>
          Enter your new password and confirm, we will redirect after you set
          your new password.
        </AuthText>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit}>
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

        <Input
          type="password"
          name="confirmNewPassword"
          label="Confirm new password"
          placeholder="Confirm new password"
          height={40}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmNewPassword}
          error={errors.confirmNewPassword}
        />

        <Button
          type="submit"
          submitting={isSubmitting}
          onClick={() => send("SUCCESS")}
          height={40}
        >
          Set new password
        </Button>
      </AuthFormContainer>
    </>
  );
};

export default ResetPassword;
