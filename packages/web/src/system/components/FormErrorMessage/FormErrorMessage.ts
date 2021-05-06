import {
  ComponentSingleStyleConfig,
  ThemeComponentProps,
} from "@chakra-ui/react";

const FormErrorMessage: ComponentSingleStyleConfig = {
  baseStyle: (props: ThemeComponentProps) => ({
    color: "red.500",
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
  }),
};

export default FormErrorMessage;
