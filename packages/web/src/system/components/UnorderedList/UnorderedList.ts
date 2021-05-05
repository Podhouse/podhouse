import { mode } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

const light = (props: Props) => ({
  item: {
    color: mode("gray.400", `#B7B7B7`)(props),
    fontFamily: "Passenger Sans",
    fontSize: "16px",
    fontWeight: "300",
    fontStyle: "normal",
    lineHeight: "30px",
  },
});

const UnorderedList = {
  variants: {
    light,
  },
};

export default UnorderedList;
