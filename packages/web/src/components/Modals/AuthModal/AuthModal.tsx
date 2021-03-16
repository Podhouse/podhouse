import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

import { AuthContainer, AuthLogoContainer } from "./AuthModal.styles";

import { ReactComponent as Logo } from "src/images/logo-2.svg";

import GetStarted from "./GetStarted/GetStarted";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import { useAuthContext } from "src/machines/Auth/AuthContext";

const AuthModal = () => {
  const { current, auth, onCloseAuth } = useAuthContext();

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
    <Modal isOpen={auth} onClose={onCloseAuth} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton onClick={onCloseAuth} />
        <ModalBody>
          <AuthContainer>
            <AuthLogoContainer>
              <Logo />
              <Text>Listen to your favorite podcasts</Text>
            </AuthLogoContainer>
            {renderAuth()}
          </AuthContainer>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
