import * as React from "react";
import { Check } from "react-feather";

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
          <Check size={20} color="#27AE60" />
        </CheckContainer>

        <AuthText>
          Thanks, please check your email, we've sent you an email with
          instructions to reset your password
        </AuthText>
      </HeaderIconTextContainer>

      <Button type="button" onClick={() => send("SIGNIN")} height={40}>
        OK
      </Button>
    </>
  );
};

export default ForgotPasswordSuccess;
