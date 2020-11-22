import React from "react";
import { Input, Button, Link, Text } from "@chakra-ui/react";

import {
  AuthGetStartedButtonsContainer,
  AuthLinksContainer,
  AuthTextContainer,
} from "../Auth.styles";

import { useAuthContext } from "src/context/Auth/Auth";

const GetStarted = () => {
  const [, , , send] = useAuthContext();

  return (
    <>
      <AuthTextContainer>
        <Text>
          Listen to your favorite podcasts
        </Text>
      </AuthTextContainer>

      <AuthGetStartedButtonsContainer>
        <Button
          type="button"
          onClick={() => send("SIGNUP")}
        >
          Sign up with email
        </Button>

        <AuthTextContainer>
          <Text>
            or
          </Text>
        </AuthTextContainer>

        <Button
          type="button"
          variant="primary"
          size="normal"
          onClick={() => send("SIGNIN")}
        >
          Sign in with email
        </Button>
      </AuthGetStartedButtonsContainer>

      <AuthLinksContainer>
        <Link onClick={() => send("FORGOT")}>
          Forgot your password?
        </Link>
      </AuthLinksContainer>
    </>
  );
};

export default GetStarted;
