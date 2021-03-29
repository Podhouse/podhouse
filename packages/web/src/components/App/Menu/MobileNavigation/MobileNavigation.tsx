import React from "react";
import { BsHouse, BsGrid, BsSearch, BsPerson } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import {
  MobileNavigationContainer,
  MobileNavigationItemContainer,
} from "./MobileNavigation.styles";

const MobileNavigation = () => (
  <MobileNavigationContainer>
    <MobileNavigationItemContainer>
      <ReactRouterLink to="/">
        <BsHouse size={20} />
      </ReactRouterLink>

      <ChakraLink to="/" href="/" as={ReactRouterLink}>
        Browse
      </ChakraLink>
    </MobileNavigationItemContainer>

    <MobileNavigationItemContainer>
      <ReactRouterLink to="/filters">
        <BsGrid size={20} />
      </ReactRouterLink>

      <ChakraLink to="/filters" href="/filters" as={ReactRouterLink}>
        Filters
      </ChakraLink>
    </MobileNavigationItemContainer>

    <MobileNavigationItemContainer>
      <ReactRouterLink to="/search">
        <BsSearch size={20} />
      </ReactRouterLink>

      <ChakraLink to="/search" href="/search" as={ReactRouterLink}>
        Search
      </ChakraLink>
    </MobileNavigationItemContainer>

    <MobileNavigationItemContainer>
      <ReactRouterLink to="/settings">
        <BsPerson size={20} />
      </ReactRouterLink>

      <ChakraLink to="/settings" href="/settings" as={ReactRouterLink}>
        Settings
      </ChakraLink>
    </MobileNavigationItemContainer>
  </MobileNavigationContainer>
);

export default MobileNavigation;
