import styled from "@emotion/styled";
import { Theme } from "@emotion/react";
import { padding, color, margin, layout, space, variant } from "styled-system";

type Props = Theme & any;

const variants = variant({
  prop: "variant",
  scale: "errors",
  variants: {
    primary: {
      color: "primary",
    },
  },
});

const sizes = variant({
  prop: "size",
  scale: "errors",
  variants: {
    small: {
      fontSize: 12,
      fontWeight: 400,
    },
    normal: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
    },
    big: {
      fontSize: 16,
      fontWeight: 500,
    },
  },
});

export const ErrorContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const ErrorText = styled.p<Props>`
  margin: 0;
  outline: none;
  font-family: Inter;
  ${padding};
  ${color};
  ${margin};
  ${layout};
  ${space};
  ${variants};
  ${sizes};
`;
