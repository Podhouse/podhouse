import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Menu: ComponentSingleStyleConfig = {
  baseStyle: (props: ThemeComponentProps) => ({
    list: {
      bg: mode("white", `#151419`)(props),
      border: "1px solid",
      borderColor: mode("gray.50", "#1A1C20")(props),
      borderWidth: "initial",
    },
    item: {
      bg: mode("white", `#151419`)(props),
      color: mode("gray.400", `#B7B7B7`)(props),
      fontFamily: "Passenger Sans",
      fontSize: "16px",
      fontWeight: "300",
      fontStyle: "normal",
      lineHeight: "30px",
      _focus: {
        bg: mode(`gray.50`, `whiteAlpha.100`)(props),
        color: mode("gray.600", `white`)(props),
      },
      _active: {
        bg: mode(`gray.50`, `whiteAlpha.200`)(props),
      },
      _expanded: {
        bg: mode(`gray.50`, `whiteAlpha.100`)(props),
      },
    },
  }),
};

export default Menu;
