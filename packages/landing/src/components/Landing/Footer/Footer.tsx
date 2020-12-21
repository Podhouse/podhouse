import React from "react";
import NextLink from "next/link";
import { Link, Text } from "@chakra-ui/react";
import { Twitter, Linkedin, Instagram, Facebook } from "react-feather";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterBrandsContainer,
} from "./Footer.styles";

const Footer = () => (
  <FooterContainer>
    <FooterLinksContainer>
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
    </FooterLinksContainer>

    <FooterBrandsContainer>
      <Link
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener"
      >
        <Twitter cursor="pointer" color="#101010" />
      </Link>

      <Link
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener"
      >
        <Linkedin cursor="pointer" color="#101010" />
      </Link>

      <Link
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener"
      >
        <Instagram cursor="pointer" color="#101010" />
      </Link>

      <Link
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener"
      >
        <Facebook cursor="pointer" color="#101010" />
      </Link>
    </FooterBrandsContainer>

    <Text color="#101010">2020 Podhouse. All rights reserved</Text>
  </FooterContainer>
);

export default Footer;
