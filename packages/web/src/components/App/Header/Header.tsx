import React from "react";

import Search from "./Search/Search";
import Settings from "./Settings/Settings";

import { HeaderContainer, Logo } from "./Header.styles";

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo>xgruve</Logo>
    <Search />
    <Settings />
  </HeaderContainer>
);

export default Header;
