import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay/hooks";
import {
  Input,
  Button,
  Divider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

import {
  SettingsItemContainer,
  SettingsItemHeaderContainer,
  SettingsItemHeaderTitle,
  SettingsItemContentContainer,
} from "../Settings.styles";

import { ChangePasswordContainer } from "./ChangePassword.styles";

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
  oldPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string().required("New password is required"),
});

const ChangePassword = () => {
  const toast = useToast();

  const [
    userChangePassword,
    isPending,
  ] = useMutation<UserChangePasswordMutation>(UserChangePassword);

  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    setError,
    reset,
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
        if (UserChangePassword?.error) {
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
        } else {
          toast({
            title: "Changed password successfully",
            description: "You've changed your password",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          reset();
        }
      },
    });
  };

  return (
    <SettingsItemContainer>
      <SettingsItemHeaderContainer>
        <SettingsItemHeaderTitle
          as="h1"
          fontSize={14}
          fontWeight={500}
          textAlign="start"
        >
          Password
        </SettingsItemHeaderTitle>
        <Divider orientation="horizontal" />
      </SettingsItemHeaderContainer>

      <SettingsItemContentContainer>
        <ChangePasswordContainer onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.oldPassword && true}>
            <FormLabel htmlFor="oldPassword">Current password</FormLabel>
            <Input
              type="password"
              name="oldPassword"
              placeholder="Current password"
              ref={register}
            />
            <FormErrorMessage>
              {errors.oldPassword && errors.oldPassword.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.newPassword && true}>
            <FormLabel htmlFor="newPassword">New password</FormLabel>
            <Input
              type="password"
              name="newPassword"
              placeholder="New password"
              ref={register}
            />
            <FormErrorMessage>
              {errors.newPassword && errors.newPassword.message}
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
          >
            Save
          </Button>
        </ChangePasswordContainer>
      </SettingsItemContentContainer>
    </SettingsItemContainer>
  );
};

export default ChangePassword;
