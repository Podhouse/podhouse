import React from "react";
import { Link } from "@chakra-ui/react";

import { ErrorLoginFallbackContainer } from "./ErrorLoginFallback.styles";

const ErrorLoginFallback = ({ resetErrorBoundary }: any) => (
  <ErrorLoginFallbackContainer role="alert">
    <Link onClick={resetErrorBoundary}>Retry</Link>
  </ErrorLoginFallbackContainer>
);

export default ErrorLoginFallback;
