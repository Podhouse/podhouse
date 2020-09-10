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

interface SignUpFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignUp = ({ t }: any) => {
  const [, , , send] = useAuthContext();

  const { register, handleSubmit, errors } = useForm<SignUpFormProps>({
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
          variant="primary"
          scale="normal"
          ariaLabel="email"
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
          ariaLabel="password"
          ref={register}
          error={errors.password?.message}
        />

        <Button type="submit" variant="primary" size="normal">
          {t("sign-up")}
        </Button>

        <AuthLinksContainer>
          <AuthParagraphLink onClick={() => send("SIGNIN")}>
            {t("already-have-an-account?")}
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

SignUp.getInitialProps = async () => ({ namespacesRequired: ["getstarted"] });

export default withTranslation("getstarted")(SignUp);
