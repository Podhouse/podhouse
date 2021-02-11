import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link, Button } from "@chakra-ui/react";

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLinksContainer,
  HeaderSignInContainer,
} from "./Header.styles";

import PodhouseDark from "../../../../public/logo.svg";

const Header = () => {
  const router = useRouter();

  const redirectToApp = () => {
    router.push("https://play.podhouse.app");
  };

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

        <NextLink href="/advertise" as="/advertise">
          <Link href="/advertise" fontWeight="500" color="#101010">
            Advertise
          </Link>
        </NextLink>
      </HeaderLinksContainer>

      <HeaderSignInContainer>
        <Link href="https://play.podhouse.app" >
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
        </Link>
      </HeaderSignInContainer>
    </HeaderContainer>
  );
};

export default Header;
