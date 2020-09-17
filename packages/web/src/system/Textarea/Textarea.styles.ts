import styled from "@emotion/styled";
import { padding, color, margin, layout, space, variant } from "styled-system";

import { TextareaProps } from "./Textarea.types";

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
      height: 70,
      fontWeight: 400,
      fontSize: 12,
    },
    normal: {
      height: 90,
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "normal",
    },
    big: {
      height: 120,
      fontWeight: 500,
      fontSize: 16,
    },
  },
});

export const TextareaContainer = styled.div`
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

export const StyledTextarea = styled.textarea<TextareaProps>`
  width: 100%;
  text-indent: 20px;
  outline: 0;
  font-family: Inter;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  line-height: 25px;
  resize: none;
  padding-top: 12px;
  box-sizing: border-box;
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
    border-radius: 5px;
  `};

  &:disabled {
    cursor: not-allowed;
  }

  :-moz-placeholder {
    font-family: Inter;
    line-height: 25px;
  }
`;
