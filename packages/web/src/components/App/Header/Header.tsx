import React from "react";

import Navigation from "./Navigation/Navigation";
import Settings from "./Settings/Settings";

import { HeaderContainer } from "./Header.styles";

import useColor from "src/hooks/useColor";

const Header = () => {
  return (
    <HeaderContainer
      borderBottomWidth="1px"
      borderBottomColor={useColor("2C2E34", "#f2f2f2")}
    >
      <Navigation />
      <Settings />
    </HeaderContainer>
  );
};

export default Header;
