import React from "react";

import { HeaderContainer } from "./Header.styles";

import Search from "./Search/Search";
import Settings from "./Settings/Settings";

const Header = () => (
  <HeaderContainer>
    <Search />
    <Settings />
  </HeaderContainer>
);

export default Header;
