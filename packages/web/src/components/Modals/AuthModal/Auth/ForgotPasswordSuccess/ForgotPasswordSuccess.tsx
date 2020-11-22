import React from "react";
import { Check } from "react-feather";
import { Text, Button } from "@chakra-ui/react";

import {
  HeaderIconTextContainer,
  CheckContainer,
} from "./ForgotPasswordSuccess.styles";

import { useAuthContext } from "src/context/Auth/Auth";

const ForgotPasswordSuccess = () => {
  const [, , , send] = useAuthContext();

  return (
    <>
      <HeaderIconTextContainer>
        <CheckContainer>
          <Check size={20} color="#27AE60" />
        </CheckContainer>

        <Text>
          Thanks, please check your email we've sent you instructions to reset your password
        </Text>
      </HeaderIconTextContainer>

      <Button
        type="button"
        onClick={() => send("SIGNIN")}
      >
        Done
      </Button>
    </>
  );
};

export default ForgotPasswordSuccess;
