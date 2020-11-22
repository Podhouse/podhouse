import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay/hooks";
import { Input, Button, Link, Text } from "@chakra-ui/react";

import {
  AuthTextContainer,
  AuthFormContainer,
  AuthLinksContainer,
  AuthCircle,
} from "../Auth.styles";

import { useAuthContext } from "src/context/Auth/Auth";

import UserSignUpWithEmail from "./UserSignUpWithEmail";
import {
  UserSignUpWithEmailMutation,
  UserSignUpWithEmailMutationResponse,
} from "./__generated__/UserSignUpWithEmailMutation.graphql";

import { updateToken } from "src/utils/auth";

interface SignUpFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignUp = () => {
  const [, , handleAuth, send] = useAuthContext();
  const [userSignUpWithEmail, isPending] = useMutation<
    UserSignUpWithEmailMutation
  >(UserSignUpWithEmail);

  const {
    register,
    handleSubmit,
    setError,
    errors,
    formState,
    getValues,
  } = useForm<SignUpFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    userSignUpWithEmail({
      variables: {
        input: {
          email: getValues().email,
          password: getValues().password,
        },
      },
      onCompleted: ({
        UserSignUpWithEmail,
      }: UserSignUpWithEmailMutationResponse) => {
        if (UserSignUpWithEmail.error) {
          const error = UserSignUpWithEmail.error;
          setError("email", {
            type: "manual",
            message: error,
          });
          return;
        }

        updateToken(UserSignUpWithEmail.token);
        handleAuth();
      },
    });
  };

  return (
    <>
      <AuthTextContainer>
        <Text>
          Listen to your favorite podcasts
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

        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          ref={register}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          isDisabled={!formState.isValid || formState.isSubmitting || isPending}
        >
          Sign up
        </Button>

        <AuthLinksContainer>
          <Link onClick={() => send("SIGNIN")}>
            Already have an account?
          </Link>

          <AuthCircle />

          <Link onClick={() => send("FORGOT")}>
            Forgout your password?
          </Link>
        </AuthLinksContainer>
      </AuthFormContainer>
    </>
  );
};

export default SignUp;
