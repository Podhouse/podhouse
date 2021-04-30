import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const FormErrorMessage = {
  baseStyle: (props: Props) => ({
    color: "red.500",
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
  }),
};

export default FormErrorMessage;
