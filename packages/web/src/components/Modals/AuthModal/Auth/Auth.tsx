import React from "react";

import { AuthContainer, AuthInsideContainer } from "./Auth.styles";

import PodhouseDark from "../../../../../public/logo/logo-medium-dark.svg";
import PodhouseWhite from "../../../../../public/logo/logo-medium-white.svg";

import useTheme from "src/system/useTheme";

interface AuthProps {
  children: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
  const themeState = useTheme();

  const onRenderLogo = () => {
    if (themeState.dark) {
      return <PodhouseWhite />;
    }

    return <PodhouseDark />;
  };

  return (
    <AuthContainer>
      {onRenderLogo()}
      <AuthInsideContainer>{children}</AuthInsideContainer>
    </AuthContainer>
  );
};

export default Auth;
