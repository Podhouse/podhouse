import React from "react";
import Scrollbars from "react-custom-scrollbars";

import { FavoritesContainer } from "./Favorites.styles";

const Favorites = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <FavoritesContainer>
      <h1>Favorites</h1>
    </FavoritesContainer>
  </Scrollbars>
);

export default Favorites;
