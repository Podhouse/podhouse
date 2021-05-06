import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Heading: ComponentSingleStyleConfig = {
  baseStyle: (props: ThemeComponentProps) => ({
    lineHeight: "base",
    fontWeight: "bold",
    letterSpacing: "-0.03em",
  }),
};

export default Heading;
