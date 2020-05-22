import * as React from "react";
import Link from "next/link";
import { Home, Headphones, Search, Settings } from "react-feather";

import {
  NavigationContainer,
  NavigationItemContainer,
  NavigationItemLink,
} from "./Navigation.styles";

const Navigation = () => (
  <NavigationContainer>
    <NavigationItemContainer className="browse">
      <Link href="/app" passHref>
        <Home size={16} color="#666" />
      </Link>

      <Link href="/app" passHref>
        <NavigationItemLink>Browse</NavigationItemLink>
      </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="subscriptions">
      <Link href="/app/subscriptions" passHref>
        <Headphones size={16} color="#666" />
      </Link>

      <Link href="/app/subscriptions" passHref>
        <NavigationItemLink>Subscriptions</NavigationItemLink>
      </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="search">
      <Link href="/app/search" passHref>
        <Search size={16} color="#666" />
      </Link>

      <Link href="/app/search" passHref>
        <NavigationItemLink>Search</NavigationItemLink>
      </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="settings">
      <Link href="/app/settings" passHref>
        <Settings size={16} color="#666" />
      </Link>

      <Link href="/app/settings" passHref>
        <NavigationItemLink>Settings</NavigationItemLink>
      </Link>
    </NavigationItemContainer>
  </NavigationContainer>
);

export default Navigation;
