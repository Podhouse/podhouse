import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../../../system/Input/Input";
import Button from "../../../../system/Button/Button";

import { useAuthContext } from "../../../../context/Auth/Auth";

import { AuthTextContainer, AuthText, AuthFormContainer } from "../Auth.styles";

interface ForgotPasswordFormProps {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword: React.FC = () => {
  const [, , , send] = useAuthContext();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormik<ForgotPasswordFormProps>({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: () => {
      send("SUBMITING");
      send("SUCCESS");
    },
  });

  return (
    <>
      <AuthTextContainer>
        <AuthText>
          Enter your email address and we'll send you an email with a password
          reset link
        </AuthText>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
        />

        <Button type="submit" submitting={isSubmitting}>
          Send reset link
        </Button>

        <p onClick={() => send("SIGNIN")}>Back to Sign In</p>
      </AuthFormContainer>
    </>
  );
};

export default ForgotPassword;
