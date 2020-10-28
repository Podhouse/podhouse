import React from "react";
import NextLink from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "react-feather";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterBrandsContainer,
} from "./Footer.styles";

import Paragraph from "src/system/Paragraph/Paragraph";
import Link from "src/system/Link/Link";

const Footer = () => (
  <FooterContainer>
    <FooterLinksContainer>
      <NextLink href="/about" as="/about">
        <Link href="/about" variant="secondary" size="normal">
          About
        </Link>
      </NextLink>

      <NextLink href="/sponsorship" as="/sponsorship">
        <Link href="/sponsorship" variant="secondary" size="normal">
          Ads
        </Link>
      </NextLink>

      <NextLink href="/brand" as="/brand">
        <Link href="/brand" variant="secondary" size="normal">
          Brand
        </Link>
      </NextLink>

      <Link
        href="mailto:leonardomso11@gmail.com"
        target="_blank"
        rel="noopener"
        variant="secondary"
        size="normal"
      >
        Contact
      </Link>
    </FooterLinksContainer>

    <FooterBrandsContainer>
      <Link
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener"
        variant="secondary"
        size="normal"
      >
        <Twitter cursor="pointer" color="#6F6F6F" />
      </Link>

      <Link
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener"
        variant="secondary"
        size="normal"
      >
        <Linkedin cursor="pointer" color="#6F6F6F" />
      </Link>

      <Link
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener"
        variant="secondary"
        size="normal"
      >
        <Instagram cursor="pointer" color="#6F6F6F" />
      </Link>

      <Link
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener"
        variant="secondary"
        size="normal"
      >
        <Facebook cursor="pointer" color="#6F6F6F" />
      </Link>
    </FooterBrandsContainer>

    <Paragraph variant="secondary" size="normal">
      2020 Podhouse. All rights reserved
    </Paragraph>
  </FooterContainer>
);

export default Footer;
