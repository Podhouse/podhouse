import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";

const Link: ComponentSingleStyleConfig = {
  baseStyle: (props: ThemeComponentProps) => ({
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "base",
  }),
};

export default Link;
