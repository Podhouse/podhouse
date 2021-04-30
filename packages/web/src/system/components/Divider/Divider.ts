import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const light = (props: Props) => ({
  borderColor: mode("gray.50", "purple.100")(props),
});

const Divider = {
  variants: {
    light,
  },
};

export default Divider;
