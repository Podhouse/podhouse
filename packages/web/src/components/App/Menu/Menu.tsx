import React from "react";
import Scrollbars from "react-custom-scrollbars";
import NextLink from "next/link";

import Navigation from "./Navigation/Navigation";

import {
  MenuContainer,
  MenuInsideContainer,
  MenuLogoContainer,
  MenuAvatarContainer,
} from "./Menu.styles";

import useTheme from "src/system/useTheme";
import Link from "src/system/Link/Link";

import PodhouseDark from "../../../../public/logo/logo-medium-dark.svg";
import PodhouseWhite from "../../../../public/logo/logo-medium-white.svg";

const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg";

const Menu = () => {
  const themeState = useTheme();

  const onRenderLogo = () => {
    if (themeState.dark) {
      return <PodhouseWhite />;
    }

    return <PodhouseDark />;
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
            <NextLink href="/app" as="/app">
              <Link href="/app" variant="secondary" size="normal">
                {onRenderLogo()}
              </Link>
            </NextLink>
          </MenuLogoContainer>

          <Navigation />

          <NextLink href="/app/episode/[episode]" as="/app/episode/[episode]">
            <Link
              href="/app/episode/[episode]"
              variant="secondary"
              size="normal"
            >
              <MenuAvatarContainer src={avatar} alt="Podcast logo" />
            </Link>
          </NextLink>
        </MenuInsideContainer>
      </Scrollbars>
    </MenuContainer>
  );
};

export default Menu;
