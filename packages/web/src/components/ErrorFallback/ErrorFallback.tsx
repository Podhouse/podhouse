import React from "react";
import { Heading, Button } from "@chakra-ui/react";

import {
  ErrorFallbackContainer,
  ErrorFallbackInnerContainer,
} from "./ErrorFallback.styles";

interface Props {
  resetErrorBoundary: (...args: unknown[]) => void;
}

const ErrorFallback = ({ resetErrorBoundary }: Props) => (
  <ErrorFallbackContainer role="alert">
    <ErrorFallbackInnerContainer>
      <Heading as="h1" size="4xl" textAlign="center">
        404
      </Heading>

      <Heading as="h2" size="lg" textAlign="center">
        Something went wrong
      </Heading>

      <Button width="120px" size="lg" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </ErrorFallbackInnerContainer>
  </ErrorFallbackContainer>
);

export default ErrorFallback;
