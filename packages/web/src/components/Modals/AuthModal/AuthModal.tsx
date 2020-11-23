import React, { useRef } from "react";

import {
  AuthModalContainer,
  AutoModalInsideContainer,
} from "./AuthModal.styles";

import Auth from "./Auth/Auth";

import GetStarted from "./Auth/GetStarted/GetStarted";
import SignIn from "./Auth/SignIn/SignIn";
import SignUp from "./Auth/SignUp/SignUp";
import ForgotPassword from "./Auth/ForgotPassword/ForgotPassword";
import ChangePassword from "./Auth/ChangePassword/ChangePassword";
import ForgotPasswordSuccess from "./Auth/ForgotPasswordSuccess/ForgotPasswordSuccess";

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
    if (current.matches("forgot")) {
      return <ForgotPassword />;
    }
    if (current.matches("reset")) {
      return <ChangePassword />;
    }
    if (current.matches("success")) {
      return <ForgotPasswordSuccess />;
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
