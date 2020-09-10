import styled from "@emotion/styled";
import { variant } from "styled-system";

import { ButtonProps } from "./Button.types";

import { StyleProps } from "src/system/styles.types";

type Props = ButtonProps & StyleProps;

const StyledButton = styled("button")<Props>(
  {
    width: "auto",
    paddingRight: 10,
    paddingLeft: 10,
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    fontFamily: "Inter",
    textAlign: "center",
    outline: 0,
  },
  variant({
    prop: "variant",
    scale: "buttons",
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

export default StyledButton;
