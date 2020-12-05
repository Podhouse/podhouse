import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { Link as ReactRouterLink } from "react-router-dom";

import Navigation from "./Navigation/Navigation";

import {
  MenuContainer,
  MenuInsideContainer,
  MenuLogoContainer,
  MenuPodcastImage,
  MenuSkeletonPodcastImage,
} from "./Menu.styles";

import { ReactComponent as Logo } from "src/images/logo-2.svg";

import { usePlayerContext } from "src/player/Player";

const Menu = () => {
  const { loading, episode } = usePlayerContext();

  const onRenderPodcastImage = () => {
    if (loading)
      return (
        <MenuSkeletonPodcastImage startColor="#E2E8F0" endColor="#E2E8F0" />
      );
    if (!episode) return null;
    return (
      <ReactRouterLink
        to={{
          pathname: `/episode/${episode._id}`,
          state: { _id: episode._id },
        }}
      >
        <MenuPodcastImage src={episode.image} alt="Podcast logo" />
      </ReactRouterLink>
    );
  };

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

          {onRenderPodcastImage()}
        </MenuInsideContainer>
      </Scrollbars>
    </MenuContainer>
  );
};

export default Menu;
