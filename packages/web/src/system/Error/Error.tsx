import React from "react";
import { AlertTriangle } from "react-feather";

import { ErrorContainer, ErrorText } from "./Error.styles";

import { ErrorProps } from "./Error.types";

const Error = ({ error, variant = "primary", size = "normal" }: ErrorProps) => (
  <ErrorContainer>
    <AlertTriangle size={16} color="#DD0426" strokeWidth={1.5} />

    <ErrorText variant={variant} size={size}>
      {error}
    </ErrorText>
  </ErrorContainer>
);

export default Error;
