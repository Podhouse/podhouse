import * as React from "react";

import Search from "./Search/Search";
import Settings from "./Settings/Settings";

import { HeaderContainer, LogoContainer } from "./Header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer>Pod</LogoContainer>
    <Search />
    <Settings />
  </HeaderContainer>
);

export default Header;
