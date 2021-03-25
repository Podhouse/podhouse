import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
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
          fontWeight="600"
        >
          Listen to your favorite podcasts
        </Heading>
        <Text
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="300"
          textAlign="center"
        >
          A clean and intuitive web app for you to listen to your favorite
          podcasts
        </Text>
      </LandingGridContentContainer>

      <Button
        type="button"
        aria-label="Get started"
        rightIcon={<ArrowForwardIcon />}
        size="lg"
        onClick={redirectToApp}
        bgColor="#101010"
        color="#ffffff"
        fontWeight="400"
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
