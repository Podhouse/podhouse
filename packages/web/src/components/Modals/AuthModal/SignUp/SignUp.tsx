import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay/hooks";
import {
  Input,
  Button,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

import { AuthFormContainer, AuthLinksContainer } from "../AuthModal.styles";

import { useAuthContext } from "src/machines/Auth/AuthContext";

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
  const toast = useToast();
  const { handleAuth, send } = useAuthContext();
  const [
    userSignUpWithEmail,
    isPending,
  ] = useMutation<UserSignUpWithEmailMutation>(UserSignUpWithEmail);

  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    setError,
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
        if (UserSignUpWithEmail?.error) {
          const error = UserSignUpWithEmail.error;

          if (error === "Invalid password") {
            setError("password", {
              type: "manual",
              message: error,
            });
          } else if (error === "Email address is already in use") {
            setError("email", {
              type: "manual",
              message: error,
            });
          } else {
            setError("email", {
              type: "manual",
              message: error,
            });
            setError("password", {
              type: "manual",
              message: error,
            });
          }
          return;
        }

        updateToken(UserSignUpWithEmail?.token);
        handleAuth();
        toast({
          title: "Signed up successfully",
          description: "You've created your account",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  };

  return (
    <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.email && true}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input type="email" name="email" placeholder="Email" ref={register} />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password && true}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          ref={register}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        width="100%"
        isDisabled={!formState.isValid}
        isLoading={formState.isSubmitting || isPending}
        bgColor="#101010"
        color="#ffffff"
        _hover={{ bg: "#101010" }}
        _active={{
          bg: "#101010",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(0, 0, 0, .50), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        _disabled={{
          bgColor: "#eaeaea",
          cursor: "not-allowed",
        }}
      >
        Sign up
      </Button>

      <AuthLinksContainer>
        <Link onClick={() => send("SIGNIN")}>Already have an account?</Link>
      </AuthLinksContainer>
    </AuthFormContainer>
  );
};

export default SignUp;
