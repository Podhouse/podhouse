import React from "react";
import { Stack, Box, Button, Text } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";

type State = {
  from: {
    pathname: string;
  };
};

const GetStarted = () => {
  const history = useHistory();
  const location = useLocation<State>();

  const signUpRedirect = {
    pathname: "/sign-up",
    state: { from: location },
  };

  const signInRedirect = {
    pathname: "/sign-in",
    state: { from: location },
  };

  return (
    <Stack
      direction="column"
      spacing="10px"
      w="100%"
      h="100%"
      maxW="400px"
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        type="button"
        width="100%"
        onClick={() => history.push(signUpRedirect)}
      >
        Sign up with email
      </Button>

      <Box>
        <Text>or</Text>
      </Box>

      <Button
        type="button"
        width="100%"
        onClick={() => history.push(signInRedirect)}
      >
        Sign in with email
      </Button>
    </Stack>
  );
};

export default GetStarted;
