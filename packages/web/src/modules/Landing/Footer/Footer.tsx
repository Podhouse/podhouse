import * as React from "react";
import { Twitter, Linkedin, Instagram, Facebook } from "react-feather";
import { SectionLink } from "react-scroll-section";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLink,
  FooterBrandsContainer,
  FooterBottomText,
} from "./Footer.styles";

const CTA = () => (
  <FooterContainer>
    <FooterLinksContainer>
      <SectionLink section="features">
        {({ onClick }) => <FooterLink onClick={onClick}>Features</FooterLink>}
      </SectionLink>
      <SectionLink section="pricing">
        {({ onClick }) => <FooterLink onClick={onClick}>Pricing</FooterLink>}
      </SectionLink>
      <FooterLink
        href="mailto:leonardomso11@gmail.com?subject=Hi%20Leo%2C%20let's%20talk%20about%20xgruve!"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </FooterLink>
    </FooterLinksContainer>

    <FooterBrandsContainer>
      <Twitter cursor="pointer" color="#666" />
      <Linkedin cursor="pointer" color="#666" />
      <Instagram cursor="pointer" color="#666" />
      <Facebook cursor="pointer" color="#666" />
    </FooterBrandsContainer>

    <FooterBottomText>2020 Podhouse, Inc. All rights reserved</FooterBottomText>
  </FooterContainer>
);

export default CTA;
