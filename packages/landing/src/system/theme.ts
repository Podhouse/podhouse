import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Inter, sans-serif",
        fontSize: 16,
      },
    },
  },
  colors: {
    black: "#101010",
    white: "#FFFFFF",
    brand: {
      50: "#f7f7f7",
      100: "#ededed",
      200: "#e1e1e1",
      300: "#cecece",
      400: "#a9a9a9",
      500: "#888888",
      600: "#616161",
      700: "#4e4e4e",
      800: "#303030",
      900: "#101010",
    },
  },
});

export default theme;
