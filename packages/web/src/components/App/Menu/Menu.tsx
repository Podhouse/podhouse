import { useCallback } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import DesktopNavigation from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

import {
  MenuContainer,
  MenuLogoContainer,
  MenuNavigationContainer,
} from "./Menu.styles";

import { ReactComponent as PodhouseDarkLogo } from "src/images/podhouse-logo-dark.svg";
import { ReactComponent as PodhouseWhiteLogo } from "src/images/podhouse-logo-white.svg";

import useWindowSize from "src/hooks/useWindowSize";

const Menu = () => {
  const { colorMode } = useColorMode();
  const { innerWidth } = useWindowSize();

  const borderColor: string = colorMode === "dark" ? "2C2E34" : "#f2f2f2";

  const renderLogo = useCallback(() => {
    if (colorMode === "light") {
      return <PodhouseDarkLogo />;
    } else {
      return <PodhouseWhiteLogo />;
    }
  }, [colorMode]);

  const renderNavigation = useCallback(() => {
    if (innerWidth <= 800) {
      return <MobileNavigation />;
    } else {
      return <DesktopNavigation />;
    }
  }, [innerWidth]);

  return (
    <MenuContainer borderRightWidth="1px" borderRightColor={borderColor}>
      <MenuLogoContainer>
        <ReactRouterLink to="/">{renderLogo()}</ReactRouterLink>
      </MenuLogoContainer>

      <MenuNavigationContainer>{renderNavigation()}</MenuNavigationContainer>
    </MenuContainer>
  );
};

export default Menu;
