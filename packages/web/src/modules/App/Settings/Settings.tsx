import React from "react";
import { Stack, Heading, Text, Button, Grid, GridItem } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Settings = () => {
  return (
    <Stack
      direction="column"
      spacing="20px"
      p="20px"
      w="100%"
      h="100%"
      maxW="500px"
      margin="0 auto"
    >
      <Stack direction="column" spacing="10px">
        <Heading as="h1" fontSize={36} textAlign="start">
          Settings
        </Heading>

        <Text
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="300"
          textAlign="start"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Stack>

      <Grid templateRows="repeat(6, max-content)" gap={2}>
        <GridItem w="100%" h="35px">
          <Button
            variant="light"
            as={ReactRouterLink}
            to="/settings/password"
            w="100%"
            h="100%"
            justifyContent="flex-start"
          >
            Password
          </Button>
        </GridItem>

        <GridItem w="100%" h="35px">
          <Button
            variant="light"
            as={ReactRouterLink}
            to="/settings/about"
            w="100%"
            h="100%"
            justifyContent="flex-start"
          >
            About
          </Button>
        </GridItem>

        <GridItem w="100%" h="35px">
          <Button
            variant="light"
            as={ReactRouterLink}
            to="/settings/faq"
            w="100%"
            h="100%"
            justifyContent="flex-start"
          >
            Frequently Asked Questions
          </Button>
        </GridItem>

        <GridItem w="100%" h="35px">
          <Button
            variant="light"
            as={ReactRouterLink}
            to="/settings/feedback"
            w="100%"
            h="100%"
            justifyContent="flex-start"
          >
            Feedback
          </Button>
        </GridItem>

        <GridItem w="100%" h="35px">
          <Button
            variant="light"
            as={ReactRouterLink}
            to="/settings/privacy"
            w="100%"
            h="100%"
            justifyContent="flex-start"
          >
            Privacy Policy
          </Button>
        </GridItem>

        <GridItem w="100%" h="35px">
          <Button
            variant="light"
            as={ReactRouterLink}
            to="/settings/terms"
            w="100%"
            h="100%"
            justifyContent="flex-start"
          >
            Terms
          </Button>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default Settings;
