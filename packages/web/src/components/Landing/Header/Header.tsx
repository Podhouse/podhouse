import * as React from "react";
import Link from "next/link";

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLinksContainer,
  HeaderLink,
  HeaderSignInContainer,
} from "./Header.styles";

import useTheme from "src/system/useTheme";

import PodhouseDark from "../../../../public/logo/logo-medium-dark.svg";
import PodhouseWhite from "../../../../public/logo/logo-medium-white.svg";

const Header = () => {
  const themeState = useTheme();

  const onRenderLogo = () =>
    themeState.dark ? <PodhouseWhite /> : <PodhouseDark />;

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <Link href="/" as="/">
          {onRenderLogo()}
        </Link>
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
        <Link href="/app" as="/app">
          <HeaderLink href="/app">Get started</HeaderLink>
        </Link>
      </HeaderSignInContainer>
    </HeaderContainer>
  );
};

export default Header;
