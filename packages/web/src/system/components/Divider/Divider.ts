import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const Divider = {
  baseStyle: (props: Props) => ({
    borderWidth: "1px",
    borderColor: mode("gray.50", `#2C2E34`)(props),
  }),
};

export default Divider;
