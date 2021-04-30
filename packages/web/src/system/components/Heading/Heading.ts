import { ComponentSingleStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Heading: ComponentSingleStyleConfig = {
  variants: {
    primary: {
      fontSize: ["2xl", "4xl", "4xl", "4xl", "5xl"],
      lineHeight: "base",
      fontWeight: "bold",
      color: "gray.100",
    },
    secondary: ({ colorScheme }) => ({
      color: colorScheme === "dark" ? "gray.600" : "gray.100",
      fontSize: ["xl", "xl", "2xl", "3xl", "4xl"],
      lineHeight: "base",
      fontWeight: "medium",
    }),
    cardHeading: {
      fontSize: ["sm", "xl", "xl", "xl", "xl"],
      lineHeight: "shorter",
      fontWeight: "semibold",
      color: "gray.600",
    },
  },
  defaultProps: {
    colorScheme: "dark",
  },
};

export default Heading;
