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
        <Text>Listen to your favorite podcasts</Text>
      </AuthTextContainer>

      <AuthGetStartedButtonsContainer>
        <Button
          colorScheme="blue"
          type="button"
          width="100%"
          onClick={() => send("SIGNUP")}
        >
          Sign up with email
        </Button>

        <AuthTextContainer>
          <Text>or</Text>
        </AuthTextContainer>

        <Button
          colorScheme="blue"
          type="button"
          width="100%"
          onClick={() => send("SIGNIN")}
        >
          Sign in with email
        </Button>
      </AuthGetStartedButtonsContainer>
    </>
  );
};

export default GetStarted;
