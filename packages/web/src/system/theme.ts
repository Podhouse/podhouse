import { extendTheme } from "@chakra-ui/react";
import type { Styles } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

import components from "./components/";

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode("#FFFFFF", "#151419")(props),
      fontFeatureSettings: "pnum",
      fontVariantNumeric: "proportional-nums",
      fontSize: 16,
      fontFamily: "Passenger Sans",
    },
  }),
};

const colors = {
  white: "#FFFFFF",
  black: "#101010",
  gray: {
    "50": "#f2f2f2",
    "100": "#d9d9d9",
    "200": "#bfbfbf",
    "300": "#a6a6a6",
    "400": "#8c8c8c",
    "500": "#737373",
    "600": "#595959",
    "700": "#404040",
    "800": "#262626",
    "900": "#0d0d0d",
  },
};

const fonts = {
  heading: "Passenger Sans",
  body: "Passenger Sans",
};

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  styles,
  colors,
  components,
  fonts,
});

export default theme;
