import React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { BsHouse, BsSearch, BsMic, BsHeart } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";

const DesktopNavigation = () => (
  <Grid templateRows="repeat(4, 35px)" gap={2}>
    <GridItem w="100%" h="35px">
      <Button
        as={ReactRouterLink}
        to="/"
        leftIcon={<BsHouse size={16} />}
        variant="ghost"
        w="100%"
        h="100%"
        justifyContent="flex-start"
      >
        Browse
      </Button>
    </GridItem>

    <GridItem w="100%" h="35px">
      <Button
        as={ReactRouterLink}
        to="/search"
        leftIcon={<BsSearch size={16} />}
        variant="ghost"
        w="100%"
        h="100%"
        justifyContent="flex-start"
      >
        Search
      </Button>
    </GridItem>

    <GridItem w="100%" h="35px">
      <Button
        as={ReactRouterLink}
        to="/subscriptions"
        leftIcon={<BsMic size={16} />}
        variant="ghost"
        w="100%"
        h="100%"
        justifyContent="flex-start"
      >
        Subscriptions
      </Button>
    </GridItem>

    <GridItem w="100%" h="35px">
      <Button
        as={ReactRouterLink}
        to="/favorites"
        leftIcon={<BsHeart size={16} />}
        variant="ghost"
        w="100%"
        h="100%"
        justifyContent="flex-start"
      >
        Favorites
      </Button>
    </GridItem>
  </Grid>
);

export default DesktopNavigation;
