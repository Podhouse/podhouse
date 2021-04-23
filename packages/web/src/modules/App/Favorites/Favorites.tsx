import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { Stack } from "@chakra-ui/react";

import FavoriteItem from "src/components/FavoriteItem/FavoriteItem";

import { FavoritesContainer } from "./Favorites.styles";

const Favorites = () => (
  <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
    <Stack direction="column" spacing="20px">
      <FavoriteItem
        id={745392}
        image="https://bit.ly/sage-adebayo"
        title="A new from Serial!"
        author="Serial"
        datePublished={1617098400}
        duration={225}
      />

      <FavoriteItem
        id={745392}
        image="https://bit.ly/sage-adebayo"
        title="A new from Serial!"
        author="Serial"
        datePublished={1617098400}
        duration={225}
      />

      <FavoriteItem
        id={745392}
        image="https://bit.ly/sage-adebayo"
        title="A new from Serial!"
        author="Serial"
        datePublished={1617098400}
        duration={225}
      />
    </Stack>
  </Scrollbars>
);

export default Favorites;
