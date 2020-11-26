import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { Link as ReactRouterLink } from "react-router-dom";

import Navigation from "./Navigation/Navigation";

import {
  MenuContainer,
  MenuInsideContainer,
  MenuLogoContainer,
  MenuAvatarContainer,
} from "./Menu.styles";

import { ReactComponent as Logo } from "src/images/logo-2.svg";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Menu = () => {
  return (
    <MenuContainer>
      <Scrollbars
        universal
        autoHide
        autoHideTimeout={100}
        autoHideDuration={100}
      >
        <MenuInsideContainer>
          <MenuLogoContainer>
            <ReactRouterLink to="/">
              <Logo />
            </ReactRouterLink>
          </MenuLogoContainer>

          <Navigation />

          <ReactRouterLink to="/episode/123">
            <MenuAvatarContainer src={avatar} alt="Podcast logo" />
          </ReactRouterLink>
        </MenuInsideContainer>
      </Scrollbars>
    </MenuContainer>
  );
};

export default Menu;
