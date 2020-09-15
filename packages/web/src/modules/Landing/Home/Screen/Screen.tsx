import React from "react";

import { ScreenContainer } from "./Screen.styles";

import useTheme from "src/system/useTheme";

import ScreenDark from "../../../../../public/desktop/desktop-dark.svg";
import ScreenLight from "../../../../../public/desktop/desktop-light.jpg";

const Screen = () => {
  const themeState = useTheme();

  const onRenderLogo = themeState.dark ? ScreenDark : ScreenLight;

  return (
    <ScreenContainer>
      <img src={onRenderLogo} />
    </ScreenContainer>
  );
};

export default Screen;
