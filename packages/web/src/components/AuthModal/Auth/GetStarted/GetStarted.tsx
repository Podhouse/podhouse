import React from "react";

import Button from "src/system/Button/Button";
import GoogleButton from "src/system/GoogleButton/GoogleButton";

import { useAuthContext } from "src/context/Auth/Auth";

import {
  AuthGetStartedButtonsContainer,
  AuthTextContainer,
  AuthText,
  AuthLinksContainer,
  AuthCircle,
  AuthParagraphLink,
} from "../Auth.styles";

const GetStarted = () => {
  const [, , , send] = useAuthContext();

  return (
    <>
      <AuthTextContainer>
        <AuthText>The best way to listen to your favorite podcasts</AuthText>
      </AuthTextContainer>

      <AuthGetStartedButtonsContainer>
        <Button type="button" height={40} onClick={() => send("SIGNUP")}>
          Sign up with email
        </Button>

        <AuthTextContainer>
          <AuthText>or</AuthText>
        </AuthTextContainer>

        <GoogleButton>Sign up with Google</GoogleButton>
      </AuthGetStartedButtonsContainer>

      <AuthLinksContainer>
        <AuthParagraphLink onClick={() => send("SIGNUP")}>
          Don't have an account?
        </AuthParagraphLink>

        <AuthCircle />

        <AuthParagraphLink onClick={() => send("FORGOT")}>
          Forgot your password?
        </AuthParagraphLink>
      </AuthLinksContainer>
    </>
  );
};

export default GetStarted;
