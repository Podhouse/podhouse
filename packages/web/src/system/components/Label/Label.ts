import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Label: ComponentSingleStyleConfig = {
  baseStyle: (props: ThemeComponentProps) => ({
    color: mode("gray.400", "#B7B7B7")(props),
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
  }),
};

export default Label;
