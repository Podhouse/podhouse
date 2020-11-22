import React from "react";
import { Home, Headphones, Search, User, Heart } from "react-feather";
import { Link } from "@chakra-ui/react";

import {
  NavigationContainer,
  NavigationItemContainer,
} from "./Navigation.styles";

const Navigation = () => (
  <NavigationContainer>
    <NavigationItemContainer className="browse">
      <Link href="/app">
        <Home size={16} strokeWidth={1.7} />
      </Link>

      <Link id="link-desktop" href="/app">
        Browse
      </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="podcasts">
      <Link href="/app/podcasts">
        <Headphones size={16} strokeWidth={1.7} />
      </Link>

      <Link
        id="link-desktop"
        href="/app/podcasts"
      >
        Podcasts
      </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="favorites">
      <Link href="/app/favorites">
        <Heart size={16} strokeWidth={1.7} />
      </Link>

      <Link
        id="link-desktop"
        href="/app/favorites"
      >
        Favorites
        </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="search">
      <Link href="/app/search">
        <Search size={16} strokeWidth={1.7} />
      </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="settings">
      <Link href="/app/settings">
        <User size={16} strokeWidth={1.7} />
      </Link>
    </NavigationItemContainer>
  </NavigationContainer>
);

export default Navigation;
