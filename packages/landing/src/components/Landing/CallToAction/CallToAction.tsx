import React from "react";
import { useRouter } from "next/router";
import { Heading, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "../Landing.styles";

const CallToAction = () => {
  const router = useRouter();

  const redirectToApp = () => {
    router.push("https://play.podhouse.app");
  };

  return (
    <LandingGridContainer>
      <LandingGridContentContainer>
        <Heading
          color="#101010"
          as="h3"
          fontSize={36}
          letterSpacing="-0.03em"
          textAlign="center"
          fontWeight="600"
        >
          Always free. Totally yours.
        </Heading>
        <Text color="#6F6F6F" fontSize={16} lineHeight="30px" fontWeight="300" textAlign="center">
          We will always be free. You will never need to pay to listen to your favorite podcasts with us
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

export default CallToAction;
