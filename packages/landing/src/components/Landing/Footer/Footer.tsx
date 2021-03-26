import React from "react";
import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";
import { Twitter, Linkedin, Instagram, GitHub } from "react-feather";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterBrandsContainer,
} from "./Footer.styles";

const Footer = () => (
  <FooterContainer>
    <FooterLinksContainer>
      <NextLink href="/about" as="/about">
        <Link
          href="/about"
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="400"
        >
          About
        </Link>
      </NextLink>

      <NextLink href="/for-podcasters" as="/for-podcasters">
        <Link
          href="/for-podcasters"
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="400"
        >
          For Podcasters
        </Link>
      </NextLink>

      <NextLink href="/blog" as="/blog">
        <Link
          href="/blog"
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="400"
        >
          Blog
        </Link>
      </NextLink>

      <NextLink href="/press" as="/press">
        <Link
          href="/press"
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="400"
        >
          Press
        </Link>
      </NextLink>

      <NextLink href="/contact" as="/contact">
        <Link
          href="/contact"
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="400"
        >
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
        href="https://github.com/Podhouse/podhouse"
        target="_blank"
        rel="noopener"
      >
        <GitHub cursor="pointer" color="#6F6F6F" />
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

    <Text color="#6F6F6F" fontSize={12} lineHeight="30px" fontWeight="300">
      2021 © Podhouse, Inc. All rights reserved.
    </Text>
  </FooterContainer>
);

export default Footer;
