import React from "react";
import Scrollbars from "react-custom-scrollbars";

import { BrowseContainer } from "./Browse.styles";

import Featured from "src/components/Featured/Featured";

import Genres from "./Genres/Genres";

import featured from "src/utils/featured";

const Browse = () => (
  <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
    <BrowseContainer>
      <Featured featured={featured} />

      <Genres />
    </BrowseContainer>
  </Scrollbars>
);

export default Browse;
