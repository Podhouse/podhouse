import React from "react";
import { Home, Headphones, Search, User, Heart } from "react-feather";
import { Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  NavigationContainer,
  NavigationItemContainer,
} from "./Navigation.styles";

const Navigation = () => (
  <NavigationContainer>
    <NavigationItemContainer className="browse">
      <Link href="/">
        <Home size={16} strokeWidth={1.7} />
      </Link>

      <ReactRouterLink id="link-desktop" to="/">
        Browse
      </ReactRouterLink>
    </NavigationItemContainer>

    <NavigationItemContainer className="subscriptions">
      <Link href="/subscriptions">
        <Headphones size={16} strokeWidth={1.7} />
      </Link>

      <ReactRouterLink id="link-desktop" to="/subscriptions">
        Subscriptions
      </ReactRouterLink>
    </NavigationItemContainer>

    <NavigationItemContainer className="favorites">
      <Link href="/favorites">
        <Heart size={16} strokeWidth={1.7} />
      </Link>

      <ReactRouterLink id="link-desktop" to="/favorites">
        Favorites
      </ReactRouterLink>
    </NavigationItemContainer>

    <NavigationItemContainer className="search">
      <Link href="/search">
        <Search size={16} strokeWidth={1.7} />
      </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="settings">
      <Link href="/settings">
        <User size={16} strokeWidth={1.7} />
      </Link>
    </NavigationItemContainer>
  </NavigationContainer>
);

export default Navigation;
