import * as React from "react";

import { AuthContainer, AuthInsideContainer } from "./Auth.styles";

import LogoPodhouseDark from "../../../../public/logo/logo-podhouse-medium-dark.svg";

interface AuthProps {
  children: React.ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children }) => (
  <AuthContainer>
    <LogoPodhouseDark />

    <AuthInsideContainer>{children}</AuthInsideContainer>
  </AuthContainer>
);

export default Auth;
