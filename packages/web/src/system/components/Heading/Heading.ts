import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const Heading = {
  baseStyle: (props: Props) => ({
    color: mode("black", `white`)(props),
    fontFamily: "Passenger Sans",
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: "-0.03em",
    lineHeight: "30px",
  }),
};

export default Heading;
