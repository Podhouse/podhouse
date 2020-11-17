import styled from "@emotion/styled";
import { variant } from "styled-system";

type Props = {
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "normal" | "big";
};

const StyledOption = styled("li")<Props>(
  {
    padding: "8px 8px",
    outline: 0,
    cursor: "pointer",
    border: "none",
    borderRadius: 5,
    textIndent: 20,
  },
  variant({
    prop: "variant",
    scale: "inputs",
    variants: {
      primary: {
        color: "primary",
        backgroundColor: "primary",
      },
      secondary: {
        color: "secondary",
        backgroundColor: "secondary",
      },
      disabled: {
        color: "disabled",
        backgroundColor: "disabled",
      },
    },
  }),
  variant({
    prop: "size",
    variants: {
      small: {
        height: 30,
        fontWeight: 400,
        fontSize: 12,
      },
      normal: {
        height: 40,
        fontWeight: 500,
        fontSize: 14,
      },
      big: {
        height: 50,
        fontWeight: 500,
        fontSize: 16,
      },
    },
  }),
);

export default StyledOption;
