import * as React from "react";
import Link from "next/link";
import { Home, Headphones, Search, User } from "react-feather";

import {
  NavigationContainer,
  NavigationItemContainer,
  NavigationItemLink,
} from "./Navigation.styles";

const Navigation = () => (
  <NavigationContainer>
    <NavigationItemContainer className="browse">
      <Link href="/app" passHref>
        <Home size={16} color="#B7B7B7" strokeWidth={1.5} />
      </Link>

      <Link href="/app" passHref>
        <NavigationItemLink>Browse</NavigationItemLink>
      </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="podcasts">
      <Link href="/app/podcasts" passHref>
        <Headphones size={16} color="#B7B7B7" strokeWidth={1.5} />
      </Link>

      <Link href="/app/podcasts" passHref>
        <NavigationItemLink>Podcasts</NavigationItemLink>
      </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="search">
      <Link href="/app/search" passHref>
        <Search size={16} color="#B7B7B7" strokeWidth={1.5} />
      </Link>

      <Link href="/app/search" passHref>
        <NavigationItemLink>Search</NavigationItemLink>
      </Link>
    </NavigationItemContainer>

    <NavigationItemContainer className="settings">
      <Link href="/app/settings" passHref>
        <User size={16} color="#B7B7B7" strokeWidth={1.5} />
      </Link>

      <Link href="/app/settings" passHref>
        <NavigationItemLink>User</NavigationItemLink>
      </Link>
    </NavigationItemContainer>
  </NavigationContainer>
);

export default Navigation;
