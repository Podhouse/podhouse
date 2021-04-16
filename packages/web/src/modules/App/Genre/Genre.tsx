import React, { useState, useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";

import { GenreContainer } from "./Genre.styles";

const Genre = () => {
  return (
    <Scrollbars
      onScrollFrame={() => {}}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      <GenreContainer>
        <h1>Genre</h1>
      </GenreContainer>
    </Scrollbars>
  );
};

export default Genre;
