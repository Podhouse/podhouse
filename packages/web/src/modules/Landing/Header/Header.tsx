import * as React from "react";
import { SectionLink } from "react-scroll-section";
import { useRouter } from "next/router";

import {
  HeaderContainer,
  HeaderTitle,
  HeaderLinksContainer,
  HeaderLink,
  HeaderButtonContainer,
  HeaderButton,
} from "./Header.styles";

const Header = () => {
  const router = useRouter();

  const handleStart = (e) => {
    e.preventDefault();
    router.push("/app");
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Podhouse</HeaderTitle>

      <HeaderLinksContainer>
        <SectionLink section="features">
          {({ onClick }) => <HeaderLink onClick={onClick}>Features</HeaderLink>}
        </SectionLink>
        <SectionLink section="pricing">
          {({ onClick }) => <HeaderLink onClick={onClick}>Pricing</HeaderLink>}
        </SectionLink>
        <HeaderLink
          href="mailto:leonardomso11@gmail.com?subject=Hi%20Leo%2C%20let's%20talk%20about%20Podhouse!"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </HeaderLink>
      </HeaderLinksContainer>

      <HeaderButtonContainer>
        <HeaderButton type="button" onClick={handleStart}>
          Get started
        </HeaderButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
