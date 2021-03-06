import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const light = (props: ThemeComponentProps) => ({
  bg: mode("white", "#151419")(props),
  color: mode("gray.300", "gray.300")(props),
  fontFamily: "Passenger Sans",
  fontSize: "16px",
  fontWeight: "300",
  fontStyle: "normal",
  _hover: {
    bg: mode("gray.50", "#1A1C20")(props),
    color: mode("gray.400", "#e7e7e7")(props),
  },
});

const IconButton: ComponentSingleStyleConfig = {
  baseStyle: (props: ThemeComponentProps) => ({
    bg: mode("gray.800", "white")(props),
    color: mode("white", "black")(props),
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "normal",
    fontStyle: "normal",
    _hover: {
      bg: mode("black", "white")(props),
      color: mode("white", "gray.900")(props),
    },
  }),
  variants: {
    light,
  },
};

export default IconButton;
