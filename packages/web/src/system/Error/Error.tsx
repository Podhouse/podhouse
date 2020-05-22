import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import { ErrorContainer, ErrorText } from "./Error.styles";

interface ErrorProps {
  error: string | undefined;
  mt?: number;
}

const Error: React.FC<ErrorProps> = ({ error, mt }) => (
  <ErrorContainer mt={mt}>
    <FontAwesomeIcon icon={faExclamationTriangle} size="sm" color="#fc3d28" />

    <ErrorText mt={mt}>{error}</ErrorText>
  </ErrorContainer>
);

export default Error;
