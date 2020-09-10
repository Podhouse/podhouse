import React from "react";
import { withTranslation } from "i18n";
import { Check } from "react-feather";

import { AuthText } from "../Auth.styles";

import {
  HeaderIconTextContainer,
  CheckContainer,
} from "./ForgotPasswordSuccess.styles";

import Button from "src/system/Button/Button";

import { useAuthContext } from "src/context/Auth/Auth";

const ForgotPasswordSuccess = ({ t }: any) => {
  const [, , , send] = useAuthContext();

  return (
    <>
      <HeaderIconTextContainer>
        <CheckContainer>
          <Check size={20} color="#27AE60" />
        </CheckContainer>

        <AuthText>
          {t(
            "thanks,-please-check-your-email,-we've-sent-you-an-email-with instructions-to-reset-your-password",
          )}
        </AuthText>
      </HeaderIconTextContainer>

      <Button
        type="button"
        onClick={() => send("SIGNIN")}
        variant="primary"
        size="normal"
      >
        {t("done")}
      </Button>
    </>
  );
};

ForgotPasswordSuccess.getInitialProps = async () => ({
  namespacesRequired: ["getstarted"],
});

export default withTranslation("getstarted")(ForgotPasswordSuccess);
