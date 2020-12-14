import React from "react";
import { Heading, Button } from "@chakra-ui/react";

import {
  ErrorFallbackContainer,
  ErrorFallbackInnerContainer,
} from "./ErrorFallback.styles";

const ErrorFallback = ({ error, resetErrorBoundary }: any) => (
  <ErrorFallbackContainer role="alert">
    <ErrorFallbackInnerContainer>
      <Heading
        color="#101010"
        as="h1"
        size="4xl"
        letterSpacing="-0.03em"
        textAlign="center"
      >
        404
      </Heading>

      <Heading color="#101010" as="h2" size="lg" textAlign="center">
        {error.message}
      </Heading>

      <Button
        width="120px"
        size="lg"
        onClick={resetErrorBoundary}
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
        Try again
      </Button>
    </ErrorFallbackInnerContainer>
  </ErrorFallbackContainer>
);

export default ErrorFallback;
