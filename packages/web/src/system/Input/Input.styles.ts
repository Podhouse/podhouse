import styled from "@emotion/styled";
import { padding, color, margin, layout, space, variant } from "styled-system";

import { InputProps } from "./Input.types";

const variants = variant({
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
});

const scales = variant({
  prop: "scale",
  variants: {
    small: {
      height: 30,
      fontWeight: 400,
      fontSize: 12,
    },
    normal: {
      height: 40,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
    },
    big: {
      height: 50,
      fontWeight: 500,
      fontSize: 16,
    },
  },
});

export const InputContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 10px;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  text-indent: 20px;
  outline: 0;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  line-height: 17px;
  letter-spacing: 0.01em;
  ${padding};
  ${color};
  ${margin};
  ${layout};
  ${space};
  ${variants};
  ${scales};

  ${({ error }) =>
    error &&
    `
    border: 1px solid #DD0426;
    box-sizing: border-box;
    border-radius: 5px;
  `};

  &:focus {
    border: 2px solid blue;
  }

  &:disabled {
    cursor: not-allowed;
  }

  :-moz-placeholder {
    font-family: Inter;
    letter-spacing: 0.01em;
    line-height: 17px;
    text-indent: 20px;
  }
`;
