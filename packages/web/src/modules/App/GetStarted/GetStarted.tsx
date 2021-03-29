import React from "react";
import { Stack, Box, Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const GetStarted = () => {
  const history = useHistory();

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
        onClick={() => history.push("/sign-up")}
      >
        Sign up with email
      </Button>

      <Box>
        <Text>or</Text>
      </Box>

      <Button
        type="button"
        width="100%"
        onClick={() => history.push("/sign-in")}
      >
        Sign in with email
      </Button>
    </Stack>
  );
};

export default GetStarted;
