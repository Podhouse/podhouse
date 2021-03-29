import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Stack,
  Box,
  Input,
  Button,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import {
  UserSignInWithEmailMutation,
  UserSignInWithEmailMutationResponse,
} from "./__generated__/UserSignInWithEmailMutation.graphql";

import { updateToken } from "src/utils/auth";

const UserSignInWithEmail = graphql`
  mutation UserSignInWithEmailMutation($input: UserSignInWithEmailInput!) {
    UserSignInWithEmail(input: $input) {
      token
      success
      error
    }
  }
`;

interface SignInFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const toast = useToast();
  const [commitMutation, isPending] = useMutation<UserSignInWithEmailMutation>(
    UserSignInWithEmail
  );
  const history = useHistory();

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
    commitMutation({
      variables: {
        input: {
          email: getValues().email,
          password: getValues().password,
        },
      },
      onCompleted: ({
        UserSignInWithEmail,
      }: UserSignInWithEmailMutationResponse) => {
        if (UserSignInWithEmail?.error) {
          const error = UserSignInWithEmail.error;

          if (error === "Invalid password") {
            setError("password", {
              type: "manual",
              message: error,
            });
          } else if (error === "Account with this email address not found") {
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

        updateToken(UserSignInWithEmail?.token);
        toast({
          title: "Signed in successfully",
          description: "You've signed in into your account",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      },
    });
  };

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      direction="column"
      spacing="10px"
      w="100%"
      h="100%"
      maxW="400px"
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
    >
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
        isLoading={formState.isSubmitting || isPending}
        isDisabled={!formState.isValid}
      >
        Sign in
      </Button>

      <Box>
        <Link onClick={() => history.push("/sign-up")}>
          Don't have an account?
        </Link>
      </Box>
    </Stack>
  );
};

export default SignIn;
