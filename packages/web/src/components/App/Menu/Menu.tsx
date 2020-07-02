import * as React from "react";
import Scrollbars from "react-custom-scrollbars";

import Navigation from "./Navigation/Navigation";

import {
  MenuContainer,
  MenuInsideContainer,
  MenuLogoContainer,
  MenuAvatarContainer,
} from "./Menu.styles";

const Menu = () => (
  <MenuContainer>
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <MenuInsideContainer>
        <MenuLogoContainer />
        <Navigation />
        <MenuAvatarContainer />
      </MenuInsideContainer>
    </Scrollbars>
  </MenuContainer>
);

export default Menu;
