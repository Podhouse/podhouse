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

import Button from "src/system/Button/Button";
import Input from "src/system/Input/Input";

import { useAuthContext } from "src/context/Auth/Auth";

interface SignInFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = ({ t }: any) => {
  const [, , , send] = useAuthContext();

  const { register, handleSubmit, errors } = useForm<SignInFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <AuthTextContainer>
        <AuthText>
          {t("the-best-way-to-listen-to-your-favorite-podcasts")}
        </AuthText>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          label={t("email")}
          placeholder={t("email")}
          height={40}
          ref={register}
          error={errors.email?.message}
        />

        <Input
          type="password"
          name="password"
          label={t("password")}
          placeholder={t("password")}
          height={40}
          ref={register}
          error={errors.password?.message}
        />

        <Button type="submit" variant="primary" size="normal">
          {t("sign-in")}
        </Button>

        <AuthLinksContainer>
          <AuthParagraphLink onClick={() => send("SIGNUP")}>
            {t("don't-have-an-account?")}
          </AuthParagraphLink>

          <AuthCircle />

          <AuthParagraphLink onClick={() => send("FORGOT")}>
            {t("forgot-your-password?")}
          </AuthParagraphLink>
        </AuthLinksContainer>
      </AuthFormContainer>
    </>
  );
};

SignIn.getInitialProps = async () => ({ namespacesRequired: ["getstarted"] });

export default withTranslation("getstarted")(SignIn);
