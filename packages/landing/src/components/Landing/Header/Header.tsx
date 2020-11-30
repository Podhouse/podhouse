import React from "react";
import NextLink from "next/link";
import { Link, Button } from "@chakra-ui/react";

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLinksContainer,
  HeaderSignInContainer,
} from "./Header.styles";

import PodhouseDark from "../../../../public/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <NextLink href="/" as="/">
          <Link href="/">
            <PodhouseDark />
          </Link>
        </NextLink>
      </HeaderLogoContainer>

      <HeaderLinksContainer>
        <NextLink href="/about" as="/about">
          <Link href="/about" fontWeight="500" color="#101010">
            About
          </Link>
        </NextLink>

        <Link
          href="mailto:leonardomso11@gmail.com"
          target="_blank"
          rel="noopener"
          fontWeight="500"
          color="#101010"
        >
          Contact
        </Link>
      </HeaderLinksContainer>

      <HeaderSignInContainer>
        <Button
          type="button"
          width={120}
          bgColor="#101010"
          color="#ffffff"
          _hover={{ bg: "#101010" }}
          _active={{
            bg: "#101010",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(0, 0, 0, .50), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          Get started
        </Button>
      </HeaderSignInContainer>
    </HeaderContainer>
  );
};

export default Header;