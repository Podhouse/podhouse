import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../../../system/Input/Input";
import Button from "../../../../system/Button/Button";

import { useAuthContext } from "../../../../context/Auth/Auth";

import {
  AuthTextContainer,
  AuthText,
  AuthFormContainer,
  AuthParagraphLink,
} from "../Auth.styles";

interface SignUpFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignUp = () => {
  const [, , , send] = useAuthContext();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormik<SignUpFormProps>({
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
          Sign up
        </Button>

        <AuthParagraphLink onClick={() => send("SIGNIN")}>
          Already have an account? Sign in
        </AuthParagraphLink>
      </AuthFormContainer>
    </>
  );
};

export default SignUp;
