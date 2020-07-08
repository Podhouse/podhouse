import * as React from "react";

import { StyledGoogleButton, Wrapper } from "./GoogleButton.styles";

import GoogleIcon from "../../../public/images/google-16.svg";

interface GoogleButtonProps {
  children: React.ReactNode;
}

const GoogleButton = ({ children }: GoogleButtonProps) => (
  <StyledGoogleButton type="button">
    <Wrapper>
      <GoogleIcon />
      {children}
    </Wrapper>
  </StyledGoogleButton>
);

export default GoogleButton;
