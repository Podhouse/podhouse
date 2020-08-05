import React from "react";
import { withTranslation } from "i18n";

import {
  AuthGetStartedButtonsContainer,
  AuthTextContainer,
  AuthText,
  AuthLinksContainer,
  AuthCircle,
  AuthParagraphLink,
} from "../Auth.styles";

import Button from "src/system/Button/Button";
import GoogleButton from "src/system/GoogleButton/GoogleButton";

import { useAuthContext } from "src/context/Auth/Auth";

const GetStarted = ({ t }: any) => {
  const [, , , send] = useAuthContext();

  return (
    <>
      <AuthTextContainer>
        <AuthText>
          {t("the-best-way-to-listen-to-your-favorite-podcasts")}
        </AuthText>
      </AuthTextContainer>

      <AuthGetStartedButtonsContainer>
        <Button type="button" height={40} onClick={() => send("SIGNUP")}>
          {t("sign-up-with-email")}
        </Button>

        <AuthTextContainer>
          <AuthText>{t("or")}</AuthText>
        </AuthTextContainer>

        <GoogleButton>{t("sign-up-with-google")}</GoogleButton>
      </AuthGetStartedButtonsContainer>

      <AuthLinksContainer>
        <AuthParagraphLink onClick={() => send("SIGNIN")}>
          {t("already-have-an-account?")}
        </AuthParagraphLink>

        <AuthCircle />

        <AuthParagraphLink onClick={() => send("FORGOT")}>
          {t("forgot-your-password?")}
        </AuthParagraphLink>
      </AuthLinksContainer>
    </>
  );
};

GetStarted.getInitialProps = async () => ({
  namespacesRequired: ["getstarted"],
});

export default withTranslation("getstarted")(GetStarted);
