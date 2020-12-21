import React from "react";
import { Link } from "@chakra-ui/react";

import { ErrorLoginFallbackContainer } from "./ErrorLoginFallback.styles";

const ErrorLoginFallback = () => (
  <ErrorLoginFallbackContainer role="alert">
    <Link color="brand.900" fontWeight="bold" textTransform="uppercase">
      Retry
    </Link>
  </ErrorLoginFallbackContainer>
);

export default ErrorLoginFallback;
