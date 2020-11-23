import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { Link } from "@chakra-ui/react";

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
            <Link href="/app" variant="secondary" size="normal">
              <Logo />
            </Link>
          </MenuLogoContainer>

          <Navigation />

          <Link href="/app/episode/[episode]" variant="secondary" size="normal">
            <MenuAvatarContainer src={avatar} alt="Podcast logo" />
          </Link>
        </MenuInsideContainer>
      </Scrollbars>
    </MenuContainer>
  );
};

export default Menu;
