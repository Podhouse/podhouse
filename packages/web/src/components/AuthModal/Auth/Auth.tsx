import * as React from "react";

import { AuthContainer, AuthInsideContainer, XgruveTitle } from "./Auth.styles";

interface AuthProps {
  children: any;
}

const Auth: React.FC<AuthProps> = ({ children }) => (
  <AuthContainer>
    <XgruveTitle>xgruve</XgruveTitle>

    <AuthInsideContainer>{children}</AuthInsideContainer>
  </AuthContainer>
);

export default Auth;
