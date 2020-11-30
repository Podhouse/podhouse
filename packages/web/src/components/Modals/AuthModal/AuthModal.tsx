import React, { useRef } from "react";

import {
  AuthModalContainer,
  AutoModalInsideContainer,
} from "./AuthModal.styles";

import Auth from "./Auth/Auth";

import GetStarted from "./Auth/GetStarted/GetStarted";
import SignIn from "./Auth/SignIn/SignIn";
import SignUp from "./Auth/SignUp/SignUp";

import useOnClickOutside from "src/hooks/useOnClickOutside";

import { useAuthContext } from "src/context/Auth/Auth";

const AuthModal = () => {
  const [current, , handleAuth] = useAuthContext();

  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleAuth());

  const renderAuth = () => {
    if (current.matches("getstarted")) {
      return <GetStarted />;
    }
    if (current.matches("signin")) {
      return <SignIn />;
    }
    if (current.matches("signup")) {
      return <SignUp />;
    }
  };

  return (
    <AuthModalContainer>
      <AutoModalInsideContainer ref={ref}>
        <Auth>{renderAuth()}</Auth>
      </AutoModalInsideContainer>
    </AuthModalContainer>
  );
};

export default AuthModal;
