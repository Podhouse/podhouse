import React from "react";
import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";
import { Twitter, Linkedin, Instagram } from "react-feather";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterBrandsContainer,
} from "./Footer.styles";

const Footer = () => (
  <FooterContainer>
    <FooterLinksContainer>
      <NextLink href="/about" as="/about">
        <Link href="/about" fontWeight="500" color="#6F6F6F">
          About
        </Link>
      </NextLink>

      <NextLink href="/advertise" as="/advertise">
        <Link href="/advertise" fontWeight="500" color="#6F6F6F">
          Advertise
        </Link>
      </NextLink>

      <NextLink href="/blog" as="/blog">
        <Link href="/blog" fontWeight="500" color="#6F6F6F">
          Blog
        </Link>
      </NextLink>

      <NextLink href="/press" as="/press">
        <Link href="/press" fontWeight="500" color="#6F6F6F">
          Press
        </Link>
      </NextLink>

      <NextLink href="/contact" as="/contact">
        <Link href="/contact" fontWeight="500" color="#6F6F6F">
          Contact
        </Link>
      </NextLink>
    </FooterLinksContainer>

    <FooterBrandsContainer>
      <Link
        href="https://twitter.com/podhouseapp"
        target="_blank"
        rel="noopener"
      >
        <Twitter cursor="pointer" color="#6F6F6F" />
      </Link>

      <Link
        href="https://www.linkedin.com/company/podhouseapp"
        target="_blank"
        rel="noopener"
      >
        <Linkedin cursor="pointer" color="#6F6F6F" />
      </Link>

      <Link
        href="https://www.instagram.com/podhouseapp/"
        target="_blank"
        rel="noopener"
      >
        <Instagram cursor="pointer" color="#6F6F6F" />
      </Link>
    </FooterBrandsContainer>

    <Text color="#6F6F6F" fontSize="12px">
      2021 © Podhouse, Inc. All rights reserved.
    </Text>
  </FooterContainer>
);

export default Footer;
