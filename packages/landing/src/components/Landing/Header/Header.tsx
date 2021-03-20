import React from "react";
import NextLink from "next/link";
import { Link, Button, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLinksContainer,
  HeaderSignInContainer,
} from "./Header.styles";

import PodhouseLogo from "../../../../public/PodhouseLogo.svg";

const Header = () => (
  <HeaderContainer>
    <HeaderLogoContainer>
      <NextLink href="/" as="/">
        <Link aria-label="Podhouse logo" href="/">
          <PodhouseLogo />
        </Link>
      </NextLink>
    </HeaderLogoContainer>

    <HeaderLinksContainer>
      <NextLink href="/features" as="/features">
        <Link aria-label="Features" href="/features" fontWeight="500" color="#6F6F6F">
          Features
        </Link>
      </NextLink>

      <NextLink href="/advertise" as="/advertise">
        <Link aria-label="Advertise" href="/advertise" fontWeight="500" color="#6F6F6F">
          Advertise
        </Link>
      </NextLink>

      <NextLink href="/blog" as="/blog">
        <Link aria-label="Blog" href="/blog" fontWeight="500" color="#6F6F6F">
          Blog
        </Link>
      </NextLink>

      <NextLink href="/support" as="/support">
        <Link aria-label="Support" href="/support" fontWeight="500" color="#6F6F6F">
          Support
        </Link>
      </NextLink>
    </HeaderLinksContainer>

    <HeaderSignInContainer>
      <Menu>
        <MenuButton
          className="button"
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="ghost"
          size="md"
        />
        <MenuList>
          <MenuItem>
            Features
          </MenuItem>

          <MenuItem>
            Advertise
          </MenuItem>

          <MenuItem>
            Blog
          </MenuItem>

          <MenuItem>
            Support
          </MenuItem>
        </MenuList>
      </Menu>

      <Link className="button-800" href="https://play.podhouse.app">
        <Button
          type="button"
          size="md"
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

export default Header;
