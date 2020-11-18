import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-relay/hooks";

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

import UserSignInWithEmail from "./UserSignInWithEmail";
import {
  UserSignInWithEmailMutation,
  UserSignInWithEmailMutationResponse,
} from "./__generated__/UserSignInWithEmailMutation.graphql";

import { updateToken } from "src/utils/auth";

interface SignInFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = ({ t }: WithTranslation) => {
  const [, handleAuth, , send] = useAuthContext();
  const [userSignInWithEmail, isPending] = useMutation<
    UserSignInWithEmailMutation
  >(UserSignInWithEmail);

  const {
    register,
    handleSubmit,
    setError,
    errors,
    formState,
    getValues,
  } = useForm<SignInFormProps>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    userSignInWithEmail({
      variables: {
        input: {
          email: getValues().email,
          password: getValues().password,
        },
      },
      onCompleted: ({
        UserSignInWithEmail,
      }: UserSignInWithEmailMutationResponse) => {
        if (UserSignInWithEmail.error) {
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

        updateToken(UserSignInWithEmail.token);
        handleAuth();
      },
    });
  };

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

        <Button
          type="submit"
          variant="primary"
          size="normal"
          isDisabled={!formState.isValid || formState.isSubmitting || isPending}
        >
          {t("sign-in")}
        </Button>

        <AuthLinksContainer>
          <Link
            variant="secondary"
            size="normal"
            onClick={() => send("SIGNUP")}
          >
            {t("don't-have-an-account?")}
          </Link>

          <AuthCircle />

          <Link
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
