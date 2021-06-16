import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const light = (props: ThemeComponentProps) => ({
  color: mode("gray.400", `#B7B7B7`)(props),
  fontFamily: "Passenger Sans",
  fontSize: "16px",
  fontWeight: "300",
  fontStyle: "normal",
  lineHeight: "30px",
});

const ListItem: ComponentSingleStyleConfig = {
  variants: {
    light,
  },
};

export default ListItem;
