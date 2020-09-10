import * as React from "react";
import { withTranslation } from "i18n";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";

import {
  AuthTextContainer,
  AuthText,
  AuthFormContainer,
  AuthLinksContainer,
  AuthParagraphLink,
  AuthCircle,
} from "../Auth.styles";

import Input from "src/system/Input/Input";
import Button from "src/system/Button/Button";

import { useAuthContext } from "src/context/Auth/Auth";

interface ForgotPasswordFormProps {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = ({ t }: any) => {
  const [, , , send] = useAuthContext();

  const { register, handleSubmit, errors } = useForm<ForgotPasswordFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <AuthTextContainer>
        <AuthText>
          {t(
            "enter-your-email-address-and-we'll-send-you-an-email-with-a-password-reset-link",
          )}
        </AuthText>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          label={t("email")}
          placeholder={t("email")}
          variant="primary"
          scale="normal"
          ariaLabel="email"
          ref={register}
          error={errors.email?.message}
        />

        <Button type="submit" variant="primary" size="normal">
          {t("send-reset-link")}
        </Button>

        <AuthLinksContainer>
          <AuthParagraphLink onClick={() => send("SIGNIN")}>
            {t("already-have-an-account?")}
          </AuthParagraphLink>

          <AuthCircle />

          <AuthParagraphLink onClick={() => send("SIGNUP")}>
            {t("don't-have-an-account?")}
          </AuthParagraphLink>
        </AuthLinksContainer>
      </AuthFormContainer>
    </>
  );
};

ForgotPassword.getInitialProps = async () => ({
  namespacesRequired: ["getstarted"],
});

export default withTranslation("getstarted")(ForgotPassword);
