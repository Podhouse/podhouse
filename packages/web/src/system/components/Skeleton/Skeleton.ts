import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const Skeleton = {
  baseStyle: (props: Props) => ({
    bg: mode("gray.50", `#151419`)(props),
  }),
};

export default Skeleton;
