import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../../../system/Button/Button";
import Checkbox from "../../../../system/Checkbox/Checkbox";
import Input from "../../../../system/Input/Input";

import { useAuthContext } from "../../../../context/Auth/Auth";

import {
  AuthTextContainer,
  AuthText,
  AuthFormContainer,
  AuthCheckboxPasswordContainer,
  AuthCheckboxContainer,
  AuthLinkContainer,
} from "../Auth.styles";

interface SignInFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn: React.FC = () => {
  const [, , , send] = useAuthContext();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormik<SignInFormProps>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <>
      <AuthTextContainer>
        <AuthText>Sign in to listen to your favorite podcasts</AuthText>
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

        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={errors.password}
        />

        <AuthCheckboxPasswordContainer>
          <AuthCheckboxContainer>
            <Checkbox label="Stay signed in" checked={false} />
          </AuthCheckboxContainer>

          <AuthLinkContainer>
            <p onClick={() => send("FORGOT")}>Forgot your password?</p>
          </AuthLinkContainer>
        </AuthCheckboxPasswordContainer>

        <Button type="submit" submitting={isSubmitting}>
          Sign in
        </Button>

        <p onClick={() => send("SIGNUP")}>
          Don't have an account? Create account
        </p>
      </AuthFormContainer>
    </>
  );
};

export default SignIn;
