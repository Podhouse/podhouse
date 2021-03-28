import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontFamily: "Passenger Sans",
        fontStyle: "normal",
        fontWeight: "normal",
      },
    },
  },
  styles: {
    global: {
      "html, body": {
        fontSize: 16,
      },
    },
  },
  fonts: {
    heading: "Passenger Sans",
    body: "Passenger Sans",
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
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
