import React from "react";
import { withTranslation } from "i18n";
import { WithTranslation } from "next-i18next";

import {
  AuthGetStartedButtonsContainer,
  AuthLinksContainer,
  AuthTextContainer,
} from "../Auth.styles";

import Paragraph from "src/system/Paragraph/Paragraph";
import Button from "src/system/Button/Button";
import Link from "src/system/Link/Link";

import { useAuthContext } from "src/context/Auth/Auth";

const GetStarted = ({ t }: WithTranslation) => {
  const [, , , send] = useAuthContext();

  return (
    <>
      <AuthTextContainer>
        <Paragraph variant="secondary" size="normal">
          {t("listen-to-your-favorite-podcasts")}
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

        <Button
          type="button"
          variant="primary"
          size="normal"
          onClick={() => send("SIGNIN")}
        >
          {t("sign-in-with-email")}
        </Button>
      </AuthGetStartedButtonsContainer>

      <AuthLinksContainer>
        <Link variant="secondary" size="normal" onClick={() => send("FORGOT")}>
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
