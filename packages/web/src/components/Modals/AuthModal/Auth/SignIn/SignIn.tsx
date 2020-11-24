import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay/hooks";
import {
  Input,
  Button,
  Link,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import UserSignInWithEmail from "./UserSignInWithEmail";
import {
  UserSignInWithEmailMutation,
  UserSignInWithEmailMutationResponse,
} from "./__generated__/UserSignInWithEmailMutation.graphql";

import {
  AuthTextContainer,
  AuthFormContainer,
  AuthLinksContainer,
} from "../Auth.styles";

import { useAuthContext } from "src/context/Auth/Auth";

import { updateToken } from "src/utils/auth";

interface SignInFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const [, , handleAuth, send] = useAuthContext();
  const [
    userSignInWithEmail,
    isPending,
  ] = useMutation<UserSignInWithEmailMutation>(UserSignInWithEmail);

  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    setError,
  } = useForm<SignInFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    userSignInWithEmail({
      variables: {
        input: {
          email: getValues().email,
          password: getValues().password,
        },
      },
      onCompleted: ({
        UserSignInWithEmail,
      }: UserSignInWithEmailMutationResponse) => {
        console.log("UserSignInWithEmail: ", UserSignInWithEmail);
        // if (UserSignInWithEmail?.error) {
        //   const error = UserSignInWithEmail.error;

        //   if (error === "Invalid password") {
        //     setError("password", {
        //       type: "manual",
        //       message: error,
        //     });
        //   } else if (error === "Account with this email address not found") {
        //     setError("email", {
        //       type: "manual",
        //       message: error,
        //     });
        //   } else {
        //     setError("email", {
        //       type: "manual",
        //       message: error,
        //     });
        //     setError("password", {
        //       type: "manual",
        //       message: error,
        //     });
        //   }
        //   return;
        // }

        // updateToken(UserSignInWithEmail?.token);
        // handleAuth();
      },
    });
  };

  return (
    <>
      <AuthTextContainer>
        <Text>Listen to your favorite podcasts</Text>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email && true}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input name="email" placeholder="Email" ref={register} />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password && true}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input name="password" placeholder="Password" ref={register} />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          colorScheme="blue"
          type="submit"
          width="100%"
          isDisabled={!formState.isValid}
          isLoading={formState.isSubmitting || isPending}
        >
          Sign in
        </Button>

        <AuthLinksContainer>
          <Link
            variant="secondary"
            size="normal"
            onClick={() => send("SIGNUP")}
          >
            Don't have an account?
          </Link>
        </AuthLinksContainer>
      </AuthFormContainer>
    </>
  );
};

export default SignIn;
