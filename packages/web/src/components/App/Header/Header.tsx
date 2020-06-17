import React from "react";

import Search from "./Search/Search";
import Settings from "./Settings/Settings";

import { HeaderContainer, LogoContainer } from "./Header.styles";

import LogoDark from "../../../../public/logo/logo-medium-dark.svg";

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <LogoDark />
    </LogoContainer>
    <Search />
    <Settings />
  </HeaderContainer>
);

export default Header;
