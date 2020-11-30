import React from "react";
import { useRouter } from "next/router";
import { Heading, Text, Button } from "@chakra-ui/react";

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
          as="h2"
          fontSize={36}
          letterSpacing="-0.03em"
          textAlign="center"
        >
          Totally yours
        </Heading>
        <Text color="#101010" lineHeight="25px" textAlign="center">
          Although there are some premium features planned, we will always be
          free. You won't need to pay anything in order to listen to your
          favorite podcasts with us
        </Text>
      </LandingGridContentContainer>

      <Button
        type="button"
        onClick={redirectToApp}
        size="lg"
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
        Get started
      </Button>
    </LandingGridContainer>
  );
};

export default CallToAction;
