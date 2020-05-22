import React from "react";
import Scrollbars from "react-custom-scrollbars";

import Navigation from "./Navigation/Navigation";
import Subscriptions from "./Subscriptions/Subscriptions";

import { MenuContainer, MenuInsideContainer } from "./Menu.styles";

const Menu: React.FC = () => (
  <MenuContainer>
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <MenuInsideContainer>
        <Navigation />
        <Subscriptions />
      </MenuInsideContainer>
    </Scrollbars>
  </MenuContainer>
);

export default Menu;
