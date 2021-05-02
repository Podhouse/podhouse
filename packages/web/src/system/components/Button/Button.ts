import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const main = (props: Props) => ({
  bg: mode("black", `white`)(props),
  color: mode("white", `black`)(props),
  fontFamily: "Passenger Sans",
  fontSize: "16px",
  fontWeight: "500",
  fontStyle: "normal",
  _disabled: {
    bg: mode("gray.50", `#2C2E34`)(props),
    color: mode("gray.300", `#2C2E34`)(props),
  },
});

const light = (props: Props) => ({
  bg: mode("white", `#151419`)(props),
  color: mode("gray.400", `gray.300`)(props),
  fontFamily: "Passenger Sans",
  fontSize: "16px",
  fontWeight: "300",
  fontStyle: "normal",
  _hover: {
    bg: mode("gray.50", `#1A1C20`)(props),
    color: mode("gray.500", `#e7e7e7`)(props),
  },
});

const Button = {
  variants: {
    light,
    main,
  },
};

export default Button;
