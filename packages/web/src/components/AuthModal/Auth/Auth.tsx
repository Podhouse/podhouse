import * as React from "react";

import { AuthContainer, AuthInsideContainer } from "./Auth.styles";

interface AuthProps {
  children: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => (
  <AuthContainer>
    Pod
    <AuthInsideContainer>{children}</AuthInsideContainer>
  </AuthContainer>
);

export default Auth;
