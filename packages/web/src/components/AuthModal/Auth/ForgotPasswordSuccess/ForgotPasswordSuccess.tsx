import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Button from "../../../../system/Button/Button";

import { useAuthContext } from "../../../../context/Auth/Auth";

import {
  HeaderIconTextContainer,
  CheckContainer,
} from "./ForgotPasswordSuccess.styles";

import { AuthText } from "../Auth.styles";

const ForgotPasswordSuccess = () => {
  const [, , , send] = useAuthContext();

  return (
    <>
      <HeaderIconTextContainer>
        <CheckContainer>
          <FontAwesomeIcon icon={faCheck} size="1x" color="#27AE60" />
        </CheckContainer>

        <AuthText>
          Thanks, please check your email, we've sent you an email with
          instructions to reset your password
        </AuthText>
      </HeaderIconTextContainer>

      <Button type="button" onClick={() => send("SIGNIN")}>
        OK
      </Button>
    </>
  );
};

export default ForgotPasswordSuccess;
