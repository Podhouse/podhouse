import React from "react";
import { AlertTriangle } from "react-feather";

import { ErrorContainer, ErrorText } from "./Error.styles";

interface ErrorProps {
  error: string | undefined;
  mt?: number;
}

const Error: React.FC<ErrorProps> = ({ error, mt }) => (
  <ErrorContainer mt={mt}>
    <AlertTriangle size={16} color="#fc3d28" />

    <ErrorText mt={mt}>{error}</ErrorText>
  </ErrorContainer>
);

export default Error;
