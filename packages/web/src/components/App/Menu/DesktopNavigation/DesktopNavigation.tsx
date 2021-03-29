import React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { BsHouse, BsSearch, BsMic, BsHeart } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";

const DesktopNavigation = () => (
  <Grid templateRows="repeat(4, 35px)" gap={2}>
    <GridItem w="100%" h="35px">
      <ReactRouterLink to="/">
        <Button
          leftIcon={<BsHouse size={16} />}
          variant="ghost"
          w="100%"
          h="100%"
          justifyContent="flex-start"
        >
          Browse
        </Button>
      </ReactRouterLink>
    </GridItem>

    <GridItem w="100%" h="35px">
      <ReactRouterLink to="/search">
        <Button
          leftIcon={<BsSearch size={16} />}
          variant="ghost"
          w="100%"
          h="100%"
          justifyContent="flex-start"
        >
          Search
        </Button>
      </ReactRouterLink>
    </GridItem>

    <GridItem w="100%" h="35px">
      <ReactRouterLink to="/subscriptions">
        <Button
          leftIcon={<BsMic size={16} />}
          variant="ghost"
          w="100%"
          h="100%"
          justifyContent="flex-start"
        >
          Subscriptions
        </Button>
      </ReactRouterLink>
    </GridItem>

    <GridItem w="100%" h="35px">
      <ReactRouterLink to="/favorites">
        <Button
          leftIcon={<BsHeart size={16} />}
          variant="ghost"
          w="100%"
          h="100%"
          justifyContent="flex-start"
        >
          Favorites
        </Button>
      </ReactRouterLink>
    </GridItem>
  </Grid>
);

export default DesktopNavigation;
