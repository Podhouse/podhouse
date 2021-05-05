import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const Accordion = {
  baseStyle: (props: Props) => ({
    container: {
      bg: "inherit",
      borderTopWidth: "1px",
      color: "inherit",
      borderColor: mode("gray.50", "#1A1C20")(props),
      _last: {
        borderBottomWidth: "1px",
      },
    },
    button: {
      color: mode("gray.400", "#E7E7E7")(props),
      border: "none",
      fontFamily: "Passenger Sans",
      fontSize: "16px",
      fontWeight: "normal",
      fontStyle: "normal",
      _hover: {
        bg: mode("gray.50", `#2C2E34`)(props),
      },
    },
    panel: {
      color: mode("gray.400", "#B7B7B7")(props),
      fontFamily: "Passenger Sans",
      fontSize: "16px",
      fontWeight: "300",
      fontStyle: "normal",
      lineHeight: "30px",
    },
  }),
};

export default Accordion;
