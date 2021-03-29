import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      color: mode("#B7B7B7", "whiteAlpha.900")(props),
      bg: mode("white", "#B7B7B7")(props),
      lineHeight: "base",
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
      fontFeatureSettings: `"pnum"`,
      fontVariantNumeric: "proportional-nums",
      fontSize: 16,
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "Passenger Sans",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
      },
    },
    Link: {
      baseStyle: {
        fontFamily: "Passenger Sans",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
      },
    },
  },
  fonts: {
    heading: "Passenger Sans",
    body: "Passenger Sans",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
