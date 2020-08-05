import React, { useRef } from "react";

import Auth from "./Auth/Auth";

import GetStarted from "./Auth/GetStarted/GetStarted";
import SignIn from "./Auth/SignIn/SignIn";
import SignUp from "./Auth/SignUp/SignUp";
import ForgotPassword from "./Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword/ResetPassword";
import ForgotPasswordSuccess from "./Auth/ForgotPasswordSuccess/ForgotPasswordSuccess";

import {
  AuthModalContainer,
  AutoModalInsideContainer,
} from "./AuthModal.styles";

import useOnClickOutside from "../../hooks/useOnClickOutside";

interface AuthModalProps {
  auth: any;
  handleAuth: () => any;
}

const AuthModal = ({ auth, handleAuth }: AuthModalProps) => {
  const ref = useRef<any>();

  useOnClickOutside(ref, () => handleAuth());

  const renderAuth = () => {
    if (auth.matches("open.getstarted")) {
      return <GetStarted />;
    }
    if (auth.matches("open.signin")) {
      return <SignIn />;
    }
    if (auth.matches("open.signup")) {
      return <SignUp />;
    }
    if (auth.matches("open.forgot")) {
      return <ForgotPassword />;
    }
    if (auth.matches("open.reset")) {
      return <ResetPassword />;
    }
    if (auth.matches("open.success")) {
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
