import React, { useState, useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";

const Search = () => {
  return (
    <Scrollbars
      onScrollFrame={() => {}}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      <h1>Search...</h1>
    </Scrollbars>
  );
};

export default Search;
