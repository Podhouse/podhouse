import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Box: ComponentSingleStyleConfig = {
  baseStyle: (props: ThemeComponentProps) => ({
    bg: mode("white", `#151419`)(props),
  }),
};

export default Box;
