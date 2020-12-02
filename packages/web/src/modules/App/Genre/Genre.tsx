import React from "react";
import Scrollbars from "react-custom-scrollbars";

import { GenreContainer } from "./Genre.styles";

import Featured from "src/components/Featured/Featured";

import featured from "src/utils/featured";

const Genre = () => (
  <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
    <GenreContainer>
      <Featured featured={featured} />
      <h1>Genre</h1>
    </GenreContainer>
  </Scrollbars>
);

export default Genre;
