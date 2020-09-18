import React from "react";
import { withTranslation } from "i18n";

import {
  AuthGetStartedButtonsContainer,
  AuthLinksContainer,
  AuthTextContainer,
  AuthCircle,
} from "../Auth.styles";

import Paragraph from "src/system/Paragraph/Paragraph";
import Button from "src/system/Button/Button";
import GoogleButton from "src/system/GoogleButton/GoogleButton";
import Link from "src/system/Link/Link";

import { useAuthContext } from "src/context/Auth/Auth";

const GetStarted = ({ t }: any) => {
  const [, , , send] = useAuthContext();

  return (
    <>
      <AuthTextContainer>
        <Paragraph variant="secondary" size="normal">
          {t("the-best-way-to-listen-to-your-favorite-podcasts")}
        </Paragraph>
      </AuthTextContainer>

      <AuthGetStartedButtonsContainer>
        <Button
          type="button"
          variant="primary"
          size="normal"
          onClick={() => send("SIGNUP")}
        >
          {t("sign-up-with-email")}
        </Button>

        <AuthTextContainer>
          <Paragraph variant="secondary" size="normal">
            {t("or")}
          </Paragraph>
        </AuthTextContainer>

        <GoogleButton>{t("sign-up-with-google")}</GoogleButton>
      </AuthGetStartedButtonsContainer>

      <AuthLinksContainer>
        <Link
          href=""
          variant="secondary"
          size="normal"
          onClick={() => send("SIGNIN")}
        >
          {t("already-have-an-account?")}
        </Link>

        <AuthCircle />

        <Link
          href=""
          variant="secondary"
          size="normal"
          onClick={() => send("FORGOT")}
        >
          {t("forgot-your-password?")}
        </Link>
      </AuthLinksContainer>
    </>
  );
};

GetStarted.getInitialProps = async () => ({
  namespacesRequired: ["getstarted"],
});

export default withTranslation("getstarted")(GetStarted);
