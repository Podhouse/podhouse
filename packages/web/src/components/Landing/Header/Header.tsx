import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLinksContainer,
  HeaderSignInContainer,
} from "./Header.styles";

import Link from "src/system/Link/Link";
import Button from "src/system/Button/Button";

import useTheme from "src/system/useTheme";

import PodhouseDark from "../../../../public/logo/logo-medium-dark.svg";
import PodhouseWhite from "../../../../public/logo/logo-medium-white.svg";

const Header = () => {
  const router = useRouter();

  const handleStart = (e) => {
    e.preventDefault();
    router.push("/app");
  };

  const themeState = useTheme();

  const onRenderLogo = () =>
    themeState.dark ? <PodhouseWhite /> : <PodhouseDark />;

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <NextLink href="/" as="/">
          <Link href="/" variant="secondary" size="normal">
            {onRenderLogo()}
          </Link>
        </NextLink>
      </HeaderLogoContainer>

      <HeaderLinksContainer>
        <NextLink href="/about" as="/about">
          <Link href="/about" variant="secondary" size="normal">
            About
          </Link>
        </NextLink>

        <NextLink href="/advertise" as="/advertise">
          <Link href="/advertise" variant="secondary" size="normal">
            Advertise
          </Link>
        </NextLink>

        <Link
          href="mailto:leonardomso11@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="normal"
        >
          Contact
        </Link>
      </HeaderLinksContainer>

      <HeaderSignInContainer>
        <Button
          type="button"
          variant="primary"
          size="normal"
          onClick={handleStart}
          width={120}
        >
          Get started
        </Button>
      </HeaderSignInContainer>
    </HeaderContainer>
  );
};

export default Header;
