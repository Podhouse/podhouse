import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay/hooks";

import { AuthTextContainer, AuthFormContainer } from "../Auth.styles";

import Paragraph from "src/system/Paragraph/Paragraph";
import Input from "src/system/Input/Input";
import Button from "src/system/Button/Button";

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

const ChangePassword = ({ t }: WithTranslation) => {
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
        <Paragraph variant="secondary" size="normal">
          {t(
            "enter-your-email-address-and-we'll-send-you-an-email-with-a-password-reset-link",
          )}
        </Paragraph>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          name="oldPassword"
          label="Old password"
          placeholder="Old password"
          variant="primary"
          scale="normal"
          ref={register}
          error={errors.oldPassword?.message}
        />

        <Input
          type="password"
          name="newPassword"
          label={t("new-password")}
          placeholder={t("new-password")}
          variant="primary"
          scale="normal"
          ref={register}
          error={errors.newPassword?.message}
        />

        <Button
          type="submit"
          variant="primary"
          size="normal"
          isDisabled={!formState.isValid || formState.isSubmitting || isPending}
        >
          {t("confirm-new-password")}
        </Button>
      </AuthFormContainer>
    </>
  );
};

ChangePassword.getInitialProps = async () => ({
  namespacesRequired: ["getstarted"],
});

export default withTranslation("getstarted")(ChangePassword);
