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

import { usePlayerContext } from "src/player/Player";

const Menu = () => {
  const { episode } = usePlayerContext();

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

          {episode ? (
            <ReactRouterLink
              to={{
                pathname: `/episode/${episode._id}`,
                state: { _id: episode._id },
              }}
            >
              <MenuAvatarContainer src={episode.image} alt="Podcast logo" />
            </ReactRouterLink>
          ) : null}
        </MenuInsideContainer>
      </Scrollbars>
    </MenuContainer>
  );
};

export default Menu;
