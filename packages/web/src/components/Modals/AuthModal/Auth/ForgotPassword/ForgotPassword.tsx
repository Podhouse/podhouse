import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Input, Button, Link, Text } from "@chakra-ui/react";

import {
  AuthTextContainer,
  AuthFormContainer,
  AuthLinksContainer,
  AuthCircle,
} from "../Auth.styles";

import { useAuthContext } from "src/context/Auth/Auth";

interface ForgotPasswordFormProps {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = () => {
  const [, , , send] = useAuthContext();

  const { register, handleSubmit, errors, formState } = useForm<
    ForgotPasswordFormProps
  >({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => { };

  return (
    <>
      <AuthTextContainer>
        <Text>
          Enter your email address and we'll send you an email with a password reset link
        </Text>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          ref={register}
          error={errors.email?.message}
        />

        <Button
          type="submit"
          isDisabled={!formState.isValid || formState.isSubmitting}
        >
          Send reset link
        </Button>

        <AuthLinksContainer>
          <Link
            variant="secondary"
            size="normal"
            onClick={() => send("SIGNIN")}
          >
            Already have an account?
          </Link>

          <AuthCircle />

          <Link onClick={() => send("SIGNUP")}>
            Don't have an account?
          </Link>
        </AuthLinksContainer>
      </AuthFormContainer>
    </>
  );
};

export default ForgotPassword;
