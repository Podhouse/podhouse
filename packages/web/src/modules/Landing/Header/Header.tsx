import * as React from "react";
import { useRouter } from "next/router";

import LogoPodhouse from "../../../../public/logo/2.svg";

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLinksContainer,
  HeaderLink,
  HeaderSignInContainer,
} from "./Header.styles";

const Header = () => {
  const router = useRouter();

  const handleStart = e => {
    e.preventDefault();
    router.push("/app");
  };

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <LogoPodhouse />
      </HeaderLogoContainer>

      <HeaderLinksContainer>
        <HeaderLink
          onClick={() => {
            console.log("clicked");
          }}
        >
          About
        </HeaderLink>
        <HeaderLink
          onClick={() => {
            console.log("clicked");
          }}
        >
          Advertisers
        </HeaderLink>
        <HeaderLink
          onClick={() => {
            console.log("clicked");
          }}
        >
          Brand
        </HeaderLink>
        <HeaderLink
          href="mailto:leonardomso11@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </HeaderLink>
      </HeaderLinksContainer>

      <HeaderSignInContainer>
        <HeaderLink onClick={handleStart}>Sign in</HeaderLink>
      </HeaderSignInContainer>
    </HeaderContainer>
  );
};

export default Header;
