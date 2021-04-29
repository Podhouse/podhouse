import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const Text = {
  baseStyle: (props: Props) => ({
    color: mode("#B7B7B7", `#B7B7B7`)(props),
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: "30px",
  }),
};

export default Text;
