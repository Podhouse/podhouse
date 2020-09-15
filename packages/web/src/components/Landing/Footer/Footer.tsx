import React from "react";
import { Twitter, Linkedin, Instagram, Facebook } from "react-feather";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLink,
  FooterBrandsContainer,
  FooterBottomText,
} from "./Footer.styles";

const Footer = () => (
  <FooterContainer>
    <FooterLinksContainer>
      <FooterLink href="/about">About</FooterLink>
      <FooterLink href="/advertisers">Advertisers</FooterLink>
      <FooterLink href="/brand">Brand</FooterLink>
      <FooterLink
        href="mailto:leonardomso11@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </FooterLink>
    </FooterLinksContainer>

    <FooterBrandsContainer>
      <a
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter cursor="pointer" color="#666" />
      </a>
      <a
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin cursor="pointer" color="#666" />
      </a>
      <a
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram cursor="pointer" color="#666" />
      </a>
      <a
        href="https://twitter.com/leonardomso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook cursor="pointer" color="#666" />
      </a>
    </FooterBrandsContainer>

    <FooterBottomText>2020 Podhouse. All rights reserved</FooterBottomText>
  </FooterContainer>
);

export default Footer;
