import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const light = (props: Props) => ({
  field: {
    bg: "inherit",
    color: mode("gray.400", "#B7B7B7")(props),
    borderWidth: "1px",
    borderColor: mode("gray.50", "#1A1C20")(props),
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "300",
    fontStyle: "normal",
    borderRadius: "5px",
    _hover: {
      bg: "inherit",
      borderWidth: "1px",
      borderColor: mode("gray.100", "#2C2E34")(props),
    },
    _readOnly: {
      bg: "inherit",
      borderWidth: "1px",
      borderColor: mode("gray.100", "#151419")(props),
      userSelect: "all",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    _focus: {
      bg: "inherit",
      borderWidth: "1px",
      borderColor: mode("blue.500", "blue.500")(props),
    },
    _invalid: {
      bg: "inherit",
      borderWidth: "1px",
      borderColor: mode("red.500", "red.500")(props),
    },
  },
});

const Textarea = {
  variants: {
    light,
  },
};

export default Textarea;
