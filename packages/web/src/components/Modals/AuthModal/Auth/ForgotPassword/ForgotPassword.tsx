import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  AuthTextContainer,
  AuthFormContainer,
  AuthLinksContainer,
  AuthCircle,
} from "../Auth.styles";

import Paragraph from "src/system/Paragraph/Paragraph";
import Input from "src/system/Input/Input";
import Button from "src/system/Button/Button";
import Link from "src/system/Link/Link";

import { useAuthContext } from "src/context/Auth/Auth";

interface ForgotPasswordFormProps {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = ({ t }: WithTranslation) => {
  const [, , , send] = useAuthContext();

  const {
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm<ForgotPasswordFormProps>({
    mode: "onChange",
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
          type="email"
          name="email"
          label={t("email")}
          placeholder={t("email")}
          variant="primary"
          scale="normal"
          ref={register}
          error={errors.email?.message}
        />

        <Button
          type="submit"
          variant="primary"
          size="normal"
          isDisabled={!formState.isValid || formState.isSubmitting}
        >
          {t("send-reset-link")}
        </Button>

        <AuthLinksContainer>
          <Link
            variant="secondary"
            size="normal"
            onClick={() => send("SIGNIN")}
          >
            {t("already-have-an-account?")}
          </Link>

          <AuthCircle />

          <Link
            variant="secondary"
            size="normal"
            onClick={() => send("SIGNUP")}
          >
            {t("don't-have-an-account?")}
          </Link>
        </AuthLinksContainer>
      </AuthFormContainer>
    </>
  );
};

ForgotPassword.getInitialProps = async () => ({
  namespacesRequired: ["getstarted"],
});

export default withTranslation("getstarted")(ForgotPassword);
