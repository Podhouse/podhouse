import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Link: ComponentSingleStyleConfig = {
  baseStyle: (props: ThemeComponentProps) => ({
    color: mode("gray.500", "#E7E7E7")(props),
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "base",
    _hover: {
      color: mode("gray.600", "white")(props),
    },
  }),
};

export default Link;
