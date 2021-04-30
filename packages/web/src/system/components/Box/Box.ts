import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const Box = {
  baseStyle: (props: Props) => ({
    bg: mode("white", `#151419`)(props),
  }),
};

export default Box;
