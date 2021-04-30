import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Divider: ComponentSingleStyleConfig = {
  baseStyle: (props: ThemeComponentProps) => ({
    borderWidth: "1px",
    borderColor: mode("gray.50", "#2C2E34")(props),
  }),
};

export default Divider;
