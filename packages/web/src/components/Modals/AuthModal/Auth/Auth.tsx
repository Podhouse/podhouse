import React from "react";

import { AuthContainer, AuthInsideContainer } from "./Auth.styles";

import { ReactComponent as Logo } from "src/images/logo.svg";

interface AuthProps {
  children: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  return (
    <AuthContainer>
      <Logo />
      <AuthInsideContainer>{children}</AuthInsideContainer>
    </AuthContainer>
  );
};

export default Auth;
