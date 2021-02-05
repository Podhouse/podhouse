import React from "react";
import Scrollbars from "react-custom-scrollbars";
import ReactGA from "react-ga";

import { FavoritesContainer } from "./Favorites.styles";

ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ID}`);
ReactGA.pageview(window.location.pathname + window.location.search);

const Favorites = () => (
  <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
    <FavoritesContainer>
      <h1>Favorites</h1>
    </FavoritesContainer>
  </Scrollbars>
);

export default Favorites;
