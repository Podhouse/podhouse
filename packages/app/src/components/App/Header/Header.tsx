import React from "react";

import Search from "./Search/Search";
import Settings from "./Settings/Settings";

import { HeaderContainer } from "./Header.styles";

const Header = () => (
  <HeaderContainer>
    <Search />
    <Settings />
  </HeaderContainer>
);

export default Header;
