import styled from "@emotion/styled";
import { variant } from "styled-system";

type Props = { variant: "primary" | "secondary" | "disabled" };

const StyledListBox = styled("ul")<Props>(
  {
    width: "100%",
    padding: 0,
    listStyle: "none",
    border: "none",
    borderRadius: 5,
    background: "#F3F3F3",
    outline: 0,
  },
  variant({
    prop: "variant",
    scale: "select",
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
);

export default StyledListBox;
