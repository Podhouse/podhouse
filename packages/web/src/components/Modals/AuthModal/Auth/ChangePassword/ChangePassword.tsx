import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay/hooks";
import { Input, Button, Text } from "@chakra-ui/react";

import { AuthTextContainer, AuthFormContainer } from "../Auth.styles";

import { useAuthContext } from "src/context/Auth/Auth";

import UserChangePassword from "./UserChangePassword";

import {
  UserChangePasswordMutation,
  UserChangePasswordMutationResponse,
} from "./__generated__/UserChangePasswordMutation.graphql";

interface ChangePasswordFormProps {
  oldPassword: string;
  newPassword: string;
}

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Password is required"),
  newPassword: Yup.string().required("New password is required"),
});

const ChangePassword = () => {
  const [, , , send] = useAuthContext();
  const [userChangePassword, isPending] = useMutation<
    UserChangePasswordMutation
  >(UserChangePassword);

  const {
    register,
    handleSubmit,
    setError,
    errors,
    formState,
    getValues,
  } = useForm<ChangePasswordFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    userChangePassword({
      variables: {
        input: {
          oldPassword: getValues().oldPassword,
          newPassword: getValues().newPassword,
        },
      },
      onCompleted: ({
        UserChangePassword,
      }: UserChangePasswordMutationResponse) => {
        if (UserChangePassword.error) {
          const error = UserChangePassword.error;

          if (error === "Invalid password") {
            setError("oldPassword", {
              type: "manual",
              message: error,
            });
          } else {
            setError("oldPassword", {
              type: "manual",
              message: error,
            });
            setError("newPassword", {
              type: "manual",
              message: error,
            });
          }
          return;
        }

        send("SUCCESS");
      },
    });
  };

  return (
    <>
      <AuthTextContainer>
        <Text>
          Enter your email address and we'll send you an email with a password reset link
        </Text>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          name="oldPassword"
          label="Old password"
          placeholder="Old password"
          ref={register}
          error={errors.oldPassword?.message}
        />

        <Input
          type="password"
          name="newPassword"
          label="New password"
          placeholder="New password"
          ref={register}
          error={errors.newPassword?.message}
        />

        <Button
          type="submit"
          isDisabled={!formState.isValid || formState.isSubmitting || isPending}
        >
          Confirm new password
        </Button>
      </AuthFormContainer>
    </>
  );
};

export default ChangePassword;
