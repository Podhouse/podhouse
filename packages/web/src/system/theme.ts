import { extendTheme } from "@chakra-ui/react";
import type { GlobalStyleProps, Styles } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode("#FFFFFF", "#151419")(props),
      fontFeatureSettings: "pnum",
      fontVariantNumeric: "proportional-nums",
      fontSize: 16,
    },
  }),
};

const colors = {
  black: "#101010",
  gray: {
    "50": "#FAFAFA",
    "100": "#F5F5F5",
    "200": "#EBEBEB",
    "300": "#E0E0E0",
    "400": "#D6D6D6",
    "500": "#CCCCCC",
    "600": "#C2C2C2",
    "700": "#B8B8B8",
    "800": "#B7B7B7",
    "900": "#6F6F6F",
  },
};

const components = {
  Button: {
    baseStyle: {
      color: "gray.900",
      fontFamily: "Passenger Sans",
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "30px",
    },
  },
  Link: {
    baseStyle: {
      color: "gray.900",
      fontFamily: "Passenger Sans",
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "30px",
    },
  },
  Heading: {
    baseStyle: {
      color: "black",
      fontFamily: "Passenger Sans",
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: "30px",
    },
  },
  Text: {
    baseStyle: {
      color: "gray.800",
      fontFamily: "Passenger Sans",
      fontWeight: "300",
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "30px",
    },
  },
};

const fonts = {
  heading: "Passenger Sans",
  body: "Passenger Sans",
};

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  styles,
  colors,
  components,
  fonts,
});

export default theme;
