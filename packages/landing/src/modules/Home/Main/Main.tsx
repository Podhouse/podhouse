import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

const Main = () => {
  const router = useRouter();

  const redirectToApp = () => {
    router.push("https://play.podhouse.app");
  };

  return (
    <LandingGridContainer>
      <LandingGridContentContainer>
        <Heading
          color="#101010"
          as="h1"
          fontSize={64}
          letterSpacing="-0.03em"
          textAlign="center"
        >
          Listen to your favorite podcasts
        </Heading>
        <Text color="#101010" lineHeight="25px" textAlign="center">
          A powerful, clean, and intuitive app for you to discover and explore
          podcasts everywhere, anytime with the best podcast experience.
        </Text>
      </LandingGridContentContainer>

      <Button
        type="button"
        size="lg"
        onClick={redirectToApp}
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
        Listen now for free
      </Button>
    </LandingGridContainer>
  );
};

export default Main;
