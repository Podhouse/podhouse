import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const Link = {
  baseStyle: (props: Props) => ({
    color: mode("gray.500", "#E7E7E7")(props),
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "30px",
    _hover: {
      color: mode("gray.600", "white")(props),
    },
  }),
};

export default Link;
