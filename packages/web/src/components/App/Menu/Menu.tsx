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

import { usePlayerContext } from "src/machines/Player/PlayerContext";

import convertEpisodeNameToURL from "src/utils/convertEpisodeNameToURL";

const Menu = () => {
  const { loading, episode } = usePlayerContext();

  const renderEpisodeImageBasedOnData = () => {
    if (!episode) {
      return "https://ebwu.education/wp-content/themes/claue/assets/images/placeholder.png";
    } else if (!episode.image && episode?.podcast?.image) {
      return episode?.podcast?.image;
    } else if (episode && episode.image) {
      return episode?.image;
    }
  };

  const renderEpisodeImageElement = () => {
    if (loading)
      return (
        <MenuSkeletonPodcastImage startColor="#E2E8F0" endColor="#E2E8F0" />
      );

    if (!episode) return null;

    const episodeRoute: string = convertEpisodeNameToURL(
      episode.title,
      episode.podcast.appleId
    );

    return (
      <ReactRouterLink
        to={{ pathname: episodeRoute, state: { _id: episode._id } }}
      >
        <MenuPodcastImage
          src={renderEpisodeImageBasedOnData()}
          alt="Podcast logo"
        />
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

          {renderEpisodeImageElement()}
        </MenuInsideContainer>
      </Scrollbars>
    </MenuContainer>
  );
};

export default Menu;
