import * as React from "react";
import Link from "next/link";
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
        <Link href="/about" as="/about">
          <HeaderLink href="/about">About</HeaderLink>
        </Link>
        <Link href="/advertise" as="/advertise">
          <HeaderLink href="/advertise">Advertise</HeaderLink>
        </Link>
        <Link href="/brand" as="/brand">
          <HeaderLink href="/brand">Brand</HeaderLink>
        </Link>
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
