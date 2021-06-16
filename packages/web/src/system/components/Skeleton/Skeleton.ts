import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Skeleton: ComponentSingleStyleConfig = {
  baseStyle: (props: ThemeComponentProps) => ({
    animation: "none",
    bg: mode("gray.50", `blackLight`)(props),
    borderRadius: "3px",
  }),
};

export default Skeleton;
