import React from "react";
import { Link } from "@chakra-ui/react";

import { ErrorLoginFallbackContainer } from "./ErrorLoginFallback.styles";

const ErrorLoginFallback = ({ resetErrorBoundary }: any) => (
  <ErrorLoginFallbackContainer role="alert">
    <Link
      color="brand.900"
      fontWeight="bold"
      textTransform="uppercase"
      onClick={resetErrorBoundary}
    >
      RETRY
    </Link>
  </ErrorLoginFallbackContainer>
);

export default ErrorLoginFallback;
