import React from "react";
import { Button, Text } from "@chakra-ui/react";

import {
  AuthGetStartedButtonsContainer,
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
          type="button"
          width="100%"
          onClick={() => send("SIGNUP")}
          bgColor="#101010"
          color="#ffffff"
          _hover={{ bg: "#101010" }}
          _active={{
            bg: "#101010",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(0, 0, 0, .50), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          Sign up with email
        </Button>

        <AuthTextContainer>
          <Text>or</Text>
        </AuthTextContainer>

        <Button
          variant="solid"
          colorScheme="black"
          type="button"
          width="100%"
          onClick={() => send("SIGNIN")}
          bgColor="#101010"
          color="#ffffff"
          _hover={{ bg: "#101010" }}
          _active={{
            bg: "#101010",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(0, 0, 0, .50), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          _disabled={{
            bgColor: "#f3f3f3",
          }}
        >
          Sign in with email
        </Button>
      </AuthGetStartedButtonsContainer>
    </>
  );
};

export default GetStarted;
