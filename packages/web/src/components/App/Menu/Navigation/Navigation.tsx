import React from "react";
import { Home, Headphones, Search, User } from "react-feather";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  NavigationContainer,
  NavigationItemContainer,
} from "./Navigation.styles";

const Navigation = () => (
  <NavigationContainer>
    <NavigationItemContainer className="browse">
      <ReactRouterLink to="/">
        <Home size={16} strokeWidth={1.7} />
      </ReactRouterLink>

      <ReactRouterLink id="link-desktop" to="/">
        Browse
      </ReactRouterLink>
    </NavigationItemContainer>

    <NavigationItemContainer className="subscriptions">
      <ReactRouterLink to="/subscriptions">
        <Headphones size={16} strokeWidth={1.7} />
      </ReactRouterLink>

      <ReactRouterLink id="link-desktop" to="/subscriptions">
        Subscriptions
      </ReactRouterLink>
    </NavigationItemContainer>

    {/* <NavigationItemContainer className="favorites">
      <ReactRouterLink to="/favorites">
        <Heart size={16} strokeWidth={1.7} />
      </ReactRouterLink>

      <ReactRouterLink id="link-desktop" to="/favorites">
        Favorites
      </ReactRouterLink>
    </NavigationItemContainer> */}

    <NavigationItemContainer className="search">
      <ReactRouterLink to="/search">
        <Search size={16} strokeWidth={1.7} />
      </ReactRouterLink>
    </NavigationItemContainer>

    <NavigationItemContainer className="settings">
      <ReactRouterLink to="/settings">
        <User size={16} strokeWidth={1.7} />
      </ReactRouterLink>
    </NavigationItemContainer>
  </NavigationContainer>
);

export default Navigation;
