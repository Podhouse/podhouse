import * as React from "react";
import { useRouter } from "next/router";

import LogoPodhouseDark from "../../../../public/logo/logo-podhouse-medium-dark.svg";

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLinksContainer,
  HeaderLink,
  HeaderSignInContainer,
} from "./Header.styles";

const Header = () => {
  const router = useRouter();

  const handleStart = (e: any) => {
    e.preventDefault();
    router.push("/app");
  };

  const handleHome = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <LogoPodhouseDark onClick={handleHome} />
      </HeaderLogoContainer>

      <HeaderLinksContainer>
        <HeaderLink href="/about">About</HeaderLink>
        <HeaderLink href="/advertise">Advertise</HeaderLink>
        <HeaderLink href="/brand">Brand</HeaderLink>
        <HeaderLink
          href="mailto:leonardomso11@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </HeaderLink>
      </HeaderLinksContainer>

      <HeaderSignInContainer>
        <HeaderLink onClick={handleStart}>Get started</HeaderLink>
      </HeaderSignInContainer>
    </HeaderContainer>
  );
};

export default Header;
