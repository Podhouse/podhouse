import styled from "@emotion/styled";
import { variant } from "styled-system";

import { InputProps } from "./Input.types";

import { StyleProps } from "src/system/styles.types";

type Props = InputProps & StyleProps;

export const InputContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 10px;
`;

export const StyledInput = styled("input")<Props>(
  {
    width: "100%",
    textIndent: 20,
    outline: 0,
    letterSpacing: "normal",
    wordSpacing: "normal",
    boxSizing: "border-box",
    border: "none",
    borderRadius: 5,
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
    prop: "scale",
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
