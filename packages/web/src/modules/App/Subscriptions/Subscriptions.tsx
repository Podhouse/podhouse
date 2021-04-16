import React, { useState, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";

const Subscriptions = () => {
  return (
    <Scrollbars
      onScrollFrame={() => {}}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      <h1>Subscriptions...</h1>
    </Scrollbars>
  );
};

export default Subscriptions;
