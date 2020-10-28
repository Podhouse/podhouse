import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";

import { AuthTextContainer, AuthFormContainer } from "../Auth.styles";

import Paragraph from "src/system/Paragraph/Paragraph";
import Input from "src/system/Input/Input";
import Button from "src/system/Button/Button";

import { useAuthContext } from "src/context/Auth/Auth";

interface ResetPasswordFormProps {
  newPassword: string;
  confirmNewPassword: string;
}

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("Password is required"),
  confirmNewPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const ResetPassword = ({ t }: WithTranslation) => {
  const [, , , send] = useAuthContext();

  const { register, handleSubmit, errors } = useForm<ResetPasswordFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

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
          name="newPassword"
          label={t("new-password")}
          placeholder={t("new-password")}
          variant="primary"
          scale="normal"
          ref={register}
          error={errors.newPassword?.message}
        />

        <Input
          type="password"
          name="confirmNewPassword"
          label={t("confirm-new-password")}
          placeholder={t("confirm-new-password")}
          variant="primary"
          scale="normal"
          ref={register}
          error={errors.confirmNewPassword?.message}
        />

        <Button
          type="submit"
          onClick={() => send("SUCCESS")}
          variant="primary"
          size="normal"
        >
          {t("confirm-new-password")}
        </Button>
      </AuthFormContainer>
    </>
  );
};

ResetPassword.getInitialProps = async () => ({
  namespacesRequired: ["getstarted"],
});

export default withTranslation("getstarted")(ResetPassword);
