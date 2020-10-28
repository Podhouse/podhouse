import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";
import { Check } from "react-feather";

import {
  HeaderIconTextContainer,
  CheckContainer,
} from "./ForgotPasswordSuccess.styles";

import Paragraph from "src/system/Paragraph/Paragraph";
import Button from "src/system/Button/Button";

import { useAuthContext } from "src/context/Auth/Auth";

const ForgotPasswordSuccess = ({ t }: WithTranslation) => {
  const [, , , send] = useAuthContext();

  return (
    <>
      <HeaderIconTextContainer>
        <CheckContainer>
          <Check size={20} color="#27AE60" />
        </CheckContainer>

        <Paragraph variant="secondary" size="normal">
          {t(
            "thanks,-please-check-your-email,-we've-sent-you-an-email-with instructions-to-reset-your-password",
          )}
        </Paragraph>
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
