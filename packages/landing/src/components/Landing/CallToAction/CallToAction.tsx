import React from "react";
import { useRouter } from "next/router";
import { Heading, Text, Button, Stack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const CallToAction = () => {
  const router = useRouter();

  const redirectToApp = () => {
    router.push("https://play.podhouse.app");
  };

  return (
    <Stack
      direction="column"
      spacing="20px"
      maxW="800px"
      justifySelf="center"
      alignItems="center"
      justifyItems="center"
    >
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
      <Text
        color="#6F6F6F"
        fontSize={16}
        lineHeight="30px"
        fontWeight="300"
        textAlign="center"
      >
        We will always be free. You will never need to pay to listen to your
        favorite podcasts with us
      </Text>

      <Button
        type="button"
        size="lg"
        aria-label="Get started"
        onClick={redirectToApp}
        width="fit-content"
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
        rightIcon={<ArrowForwardIcon />}
      >
        Listen now for free
      </Button>
    </Stack>
  );
};

export default CallToAction;
