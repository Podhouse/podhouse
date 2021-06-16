import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const light = (props: ThemeComponentProps) => ({
  item: {
    color: mode("gray.400", `#B7B7B7`)(props),
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: "30px",
  },
});

const UnorderedList: ComponentSingleStyleConfig = {
  variants: {
    light,
  },
};

export default UnorderedList;
