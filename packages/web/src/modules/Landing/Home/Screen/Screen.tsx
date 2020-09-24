import React from "react";

import { ScreenContainer } from "./Screen.styles";

import ScreenLight from "../../../../../public/desktop/desktop-light.jpg";

const Screen = () => (
  <ScreenContainer>
    <img src={ScreenLight} alt="Podhouse app screenshot" />
  </ScreenContainer>
);

export default Screen;
