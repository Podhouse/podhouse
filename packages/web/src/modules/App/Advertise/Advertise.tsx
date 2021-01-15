import React from "react";
import Scrollbars from "react-custom-scrollbars";

import { AdvertiseContainer } from "./Advertise.styles";

const Advertise = () => (
  <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
    <AdvertiseContainer>
      <h1>Advertise</h1>
    </AdvertiseContainer>
  </Scrollbars>
);

export default Advertise;
