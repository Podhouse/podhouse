import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
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

interface SignInFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = ({ t }: WithTranslation) => {
  const [, , , send] = useAuthContext();

  const { register, handleSubmit, errors } = useForm<SignInFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <AuthTextContainer>
        <Paragraph variant="secondary" size="normal">
          {t("listen-to-your-favorite-podcasts")}
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

        <Input
          type="password"
          name="password"
          label={t("password")}
          placeholder={t("password")}
          variant="primary"
          scale="normal"
          ref={register}
          error={errors.password?.message}
        />

        <Button type="submit" variant="primary" size="normal">
          {t("sign-in")}
        </Button>

        <AuthLinksContainer>
          <Link
            href=""
            variant="secondary"
            size="normal"
            onClick={() => send("SIGNUP")}
          >
            {t("don't-have-an-account?")}
          </Link>

          <AuthCircle />

          <Link
            href=""
            variant="secondary"
            size="normal"
            onClick={() => send("FORGOT")}
          >
            {t("forgot-your-password?")}
          </Link>
        </AuthLinksContainer>
      </AuthFormContainer>
    </>
  );
};

SignIn.getInitialProps = async () => ({ namespacesRequired: ["getstarted"] });

export default withTranslation("getstarted")(SignIn);
