import React from "react";
import Scrollbars from "react-custom-scrollbars";

import { BrowseContainer } from "./Browse.styles";

import Genres from "./Genres/Genres";

const Browse = () => {
  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <BrowseContainer>
        <Genres />
      </BrowseContainer>
    </Scrollbars>
  );
};

export default Browse;
