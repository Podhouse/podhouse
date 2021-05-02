import { mode, orient } from "@chakra-ui/theme-tools";

type Props = Record<string, any>;

function thumbOrientation(props: Record<string, any>) {
  return orient({
    orientation: props.orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`,
      },
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`,
      },
    },
  });
}

const Slider = {
  baseStyle: ({ orientation, ...props }: Props) => ({
    container: {
      _disabled: {
        opacity: 0.6,
        pointerEvents: "none",
      },
      ...orient({
        orientation,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    },
    track: {
      borderRadius: "sm",
      bg: mode("gray.50", "whiteAlpha.200")(props),
      _disabled: {
        bg: mode("gray.50", "#2C2E34")(props),
      },
    },
    thumb: {
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "2px solid",
      borderColor: "transparent",
      transition: "transform 0.2s",
      _focus: { boxShadow: "base" },
      _disabled: { bg: "gray.200" },
      ...thumbOrientation(props),
    },
    filledTrack: {
      bg: mode(`#101010`, `#FFFFFF`)(props),
    },
  }),
};

export default Slider;
