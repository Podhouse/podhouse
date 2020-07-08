import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "src/system/Button/Button";
import Input from "src/system/Input/Input";

import { useAuthContext } from "src/context/Auth/Auth";

import {
  AuthTextContainer,
  AuthText,
  AuthFormContainer,
  AuthLinksContainer,
  AuthParagraphLink,
  AuthCircle,
} from "../Auth.styles";

interface SignInFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
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
        <AuthText>The best way to listen to your favorite podcasts</AuthText>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          height={40}
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
          height={40}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={errors.password}
        />

        <Button type="submit" submitting={isSubmitting} height={40}>
          Sign in
        </Button>

        <AuthLinksContainer>
          <AuthParagraphLink onClick={() => send("SIGNUP")}>
            Don't have an account?
          </AuthParagraphLink>

          <AuthCircle />

          <AuthParagraphLink onClick={() => send("FORGOT")}>
            Forgot your password?
          </AuthParagraphLink>
        </AuthLinksContainer>
      </AuthFormContainer>
    </>
  );
};

export default SignIn;
