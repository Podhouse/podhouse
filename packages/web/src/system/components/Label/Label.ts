import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const Label = {
  baseStyle: (props: Props) => ({
    color: mode("gray.400", `#B7B7B7`)(props),
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
  }),
};

export default Label;
